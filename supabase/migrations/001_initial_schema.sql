create extension if not exists "pgcrypto";

do $$ begin
  create type public.app_role as enum ('admin', 'editor');
exception
  when duplicate_object then null;
end $$;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  role public.app_role not null default 'editor',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'full_name', ''), 'editor')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public.is_content_manager()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid()
      and role in ('admin', 'editor')
  );
$$;

create table if not exists public.blog_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_tags (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content_markdown text not null,
  category text not null,
  tags text[] not null default '{}',
  author_name text not null default 'Arixa Editorial Team',
  featured_image text,
  featured_image_alt text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz,
  meta_title text,
  meta_description text,
  canonical_url text,
  og_image text,
  noindex boolean not null default false,
  faqs jsonb not null default '[]'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_status_published_at_idx on public.blog_posts(status, published_at desc);
create index if not exists blog_posts_slug_idx on public.blog_posts(slug);
create index if not exists blog_posts_tags_idx on public.blog_posts using gin(tags);

create table if not exists public.blog_post_tags (
  blog_post_id uuid references public.blog_posts(id) on delete cascade,
  blog_tag_id uuid references public.blog_tags(id) on delete cascade,
  primary key (blog_post_id, blog_tag_id)
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  eyebrow text,
  summary text not null,
  description text not null,
  image text,
  image_alt text,
  keywords text[] not null default '{}',
  benefits text[] not null default '{}',
  features text[] not null default '{}',
  process text[] not null default '{}',
  faqs jsonb not null default '[]'::jsonb,
  sort_order integer not null default 0,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  meta_title text,
  meta_description text,
  canonical_url text,
  og_image text,
  noindex boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists services_status_order_idx on public.services(status, sort_order);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  quote text not null,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  page_path text,
  category text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  service text,
  budget text,
  message text not null,
  source text not null default 'website',
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'won', 'lost', 'spam')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_status_created_idx on public.leads(status, created_at desc);

create table if not exists public.careers (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  location text,
  type text,
  summary text,
  responsibilities text[] not null default '{}',
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.career_applications (
  id uuid primary key default gen_random_uuid(),
  career_slug text not null,
  name text not null,
  email text not null,
  phone text,
  resume_url text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'reviewing', 'shortlisted', 'rejected', 'hired')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.media_assets (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  file_path text not null,
  storage_bucket text,
  alt_text text not null,
  caption text,
  mime_type text,
  size_bytes bigint,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  value text not null,
  group_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.seo_overrides (
  id uuid primary key default gen_random_uuid(),
  path text not null unique,
  meta_title text,
  meta_description text,
  canonical_url text,
  og_title text,
  og_description text,
  og_image text,
  noindex boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.newsletters (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text,
  created_at timestamptz not null default now()
);

create unique index if not exists newsletters_email_idx on public.newsletters(lower(email));

create table if not exists public.redirects (
  id uuid primary key default gen_random_uuid(),
  source_path text not null unique,
  destination_path text not null,
  status_code integer not null default 301 check (status_code in (301, 302, 307, 308)),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'profiles',
    'blog_categories',
    'blog_tags',
    'blog_posts',
    'services',
    'testimonials',
    'faqs',
    'leads',
    'careers',
    'career_applications',
    'media_assets',
    'site_settings',
    'seo_overrides',
    'redirects'
  ]
  loop
    execute format('drop trigger if exists %I on public.%I', 'set_' || table_name || '_updated_at', table_name);
    execute format('create trigger %I before update on public.%I for each row execute function public.set_updated_at()', 'set_' || table_name || '_updated_at', table_name);
  end loop;
end $$;

alter table public.profiles enable row level security;
alter table public.blog_categories enable row level security;
alter table public.blog_tags enable row level security;
alter table public.blog_posts enable row level security;
alter table public.blog_post_tags enable row level security;
alter table public.services enable row level security;
alter table public.testimonials enable row level security;
alter table public.faqs enable row level security;
alter table public.leads enable row level security;
alter table public.careers enable row level security;
alter table public.career_applications enable row level security;
alter table public.media_assets enable row level security;
alter table public.site_settings enable row level security;
alter table public.seo_overrides enable row level security;
alter table public.newsletters enable row level security;
alter table public.redirects enable row level security;

create policy "Profiles readable by owner or managers" on public.profiles
  for select to authenticated
  using (id = auth.uid() or public.is_content_manager());

create policy "Profiles editable by managers" on public.profiles
  for all to authenticated
  using (public.is_content_manager())
  with check (public.is_content_manager());

create policy "Public categories" on public.blog_categories
  for select to anon, authenticated using (true);

create policy "Public tags" on public.blog_tags
  for select to anon, authenticated using (true);

create policy "Public published blog posts" on public.blog_posts
  for select to anon, authenticated
  using (status = 'published' and (published_at is null or published_at <= now()));

create policy "Public published services" on public.services
  for select to anon, authenticated using (status = 'published');

create policy "Public published testimonials" on public.testimonials
  for select to anon, authenticated using (status = 'published');

create policy "Public published faqs" on public.faqs
  for select to anon, authenticated using (status = 'published');

create policy "Public published careers" on public.careers
  for select to anon, authenticated using (status = 'published');

create policy "Public media metadata" on public.media_assets
  for select to anon, authenticated using (true);

create policy "Lead insert from website" on public.leads
  for insert to anon, authenticated with check (true);

create policy "Career application insert from website" on public.career_applications
  for insert to anon, authenticated with check (true);

create policy "Newsletter insert from website" on public.newsletters
  for insert to anon, authenticated with check (true);

create policy "Public active redirects" on public.redirects
  for select to anon, authenticated using (is_active = true);

do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'blog_categories',
    'blog_tags',
    'blog_posts',
    'blog_post_tags',
    'services',
    'testimonials',
    'faqs',
    'leads',
    'careers',
    'career_applications',
    'media_assets',
    'site_settings',
    'seo_overrides',
    'newsletters',
    'redirects'
  ]
  loop
    execute format('create policy %I on public.%I for all to authenticated using (public.is_content_manager()) with check (public.is_content_manager())', 'Managers manage ' || table_name, table_name);
  exception
    when duplicate_object then null;
  end loop;
end $$;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('site-media', 'site-media', true, 5242880, array['image/webp', 'image/png', 'image/jpeg', 'image/svg+xml']),
  ('career-resumes', 'career-resumes', false, 5242880, array['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create policy "Public read site media" on storage.objects
  for select to anon, authenticated
  using (bucket_id = 'site-media');

create policy "Managers manage site media" on storage.objects
  for all to authenticated
  using (bucket_id = 'site-media' and public.is_content_manager())
  with check (bucket_id = 'site-media' and public.is_content_manager());

create policy "Managers read resumes" on storage.objects
  for select to authenticated
  using (bucket_id = 'career-resumes' and public.is_content_manager());
