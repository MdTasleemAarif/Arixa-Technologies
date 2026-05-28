alter table public.services
  add column if not exists canonical_url text,
  add column if not exists og_image text,
  add column if not exists noindex boolean not null default false;

drop policy if exists "Public published blog posts" on public.blog_posts;

create policy "Public published blog posts" on public.blog_posts
  for select to anon, authenticated
  using (status = 'published' and (published_at is null or published_at <= now()));

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'redirects'
      and policyname = 'Public active redirects'
  ) then
    create policy "Public active redirects" on public.redirects
      for select to anon, authenticated using (is_active = true);
  end if;
end $$;
