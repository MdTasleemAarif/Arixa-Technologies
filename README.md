# Arixa Technologies Website

Premium Next.js website and custom CMS for Arixa Technologies, built for Vercel now and Hostinger VPS portability later.

## Folder Structure

```txt
.
+-- src/app/                  # App Router pages, admin routes, SEO routes
+-- src/components/           # Shared UI, forms, admin components
+-- src/config/               # Site, asset, and admin resource config
+-- src/data/                 # Starter content fallback
+-- src/lib/                  # SEO, Supabase, validators, utilities
+-- supabase/migrations/      # PostgreSQL schema and RLS policies
+-- supabase/seed/            # Starter seed data
+-- public/images/            # SEO-friendly image folders
+-- docs/                     # SEO and asset documentation
```

## Tech Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- PostgreSQL on Supabase
- Supabase Auth and Storage
- Server Actions and Route Handlers
- Vercel deployment now, Node/VPS deployment later

## Features

- Premium dark company website with responsive pages
- Home, About, Services, Blog, Careers, Contact, Privacy, Terms, Thank You, 404, error page
- Individual service, blog, category, tag, and career pages
- Custom CMS/admin panel at `/admin`
- Admin resources for blog posts, categories, tags, services, testimonials, FAQs, careers, applications, leads, media, SEO overrides, and site settings
- Contact, newsletter, and career application forms
- Supabase auth, RLS-ready schema, media buckets, resume bucket
- SEO metadata, canonical URLs, sitemap, robots, RSS feed, JSON-LD, FAQ schema, breadcrumbs, Article schema, and `llms.txt`
- Image SEO manifest and public image folder plan
- Security headers, protected admin middleware, honeypot fields, validation, and file upload checks

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Required for database-backed production:

```txt
NEXT_PUBLIC_SITE_URL=https://www.arixatechnologies.in
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Optional:

```txt
NEXT_PUBLIC_CONTACT_EMAIL=arixatechnologies@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+91 74169 98886
NEXT_PUBLIC_CONTACT_PHONE_SECONDARY=+91 74169 98887
NEXT_PUBLIC_WHATSAPP_NUMBER=917416998886
RESEND_API_KEY=
LEAD_NOTIFICATION_EMAIL=
LEAD_EMAIL_FROM=Arixa Website <noreply@arixatechnologies.in>
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Supabase Setup

1. Create a Supabase project.
2. Open SQL Editor.
3. Run `supabase/migrations/001_initial_schema.sql`.
4. Run `supabase/seed/seed.sql`.
5. Add env vars to `.env.local`.
6. Create your first auth user in Supabase Auth.
7. Promote that user to admin:

```sql
update public.profiles
set role = 'admin'
where email = 'your-email@example.com';
```

8. Sign in at `/admin/login`.

The schema creates:

- content tables for blog, services, testimonials, FAQs, careers
- lead and career application tables
- media, SEO overrides, site settings, newsletter, and redirects tables
- RLS policies for public published reads, public form inserts, and authenticated admin/editor management
- `site-media` and `career-resumes` storage buckets

## Admin CMS

Go to `/admin/login`, sign in with a Supabase Auth user, then manage:

- Blog posts, categories, tags
- Services
- Testimonials and FAQs
- Careers and applications
- Contact leads
- Media assets
- SEO overrides
- Site settings

The blog editor uses Markdown stored in PostgreSQL. Use one FAQ per line in admin forms:

```txt
Question text | Answer text
```

## Images

Images go in:

```txt
public/images/home/
public/images/about/
public/images/services/
public/images/blog/
public/images/contact/
public/images/og/
public/images/common/
```

The central manifest is `src/config/site-assets.ts`. Full prompts and alt text are in `docs/IMAGE-ASSET-GUIDE.md`.

Use descriptive filenames, width/height, meaningful alt text, and compressed assets. The current committed assets use PNG paths; for launch you can convert them to WebP and update `src/config/site-assets.ts` plus seeded image paths together.

## SEO

Implemented:

- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/feed.xml/route.ts`
- `src/app/llms.txt/route.ts`
- metadata helpers in `src/lib/seo.ts`
- Organization, Website, BreadcrumbList, FAQPage, Service, and BlogPosting JSON-LD
- canonical URLs and Open Graph/Twitter metadata
- blog categories, tags, related posts, reading time, and table of contents

Search Console checklist:

1. Set `NEXT_PUBLIC_SITE_URL` to the final domain.
2. Deploy production.
3. Submit `/sitemap.xml`.
4. Inspect key URLs.
5. Fix crawl issues, redirects, duplicate titles, and missing image assets.
6. Add analytics and conversion tracking after launch.

Off-page SEO guidance is in `docs/OFFPAGE-SEO-PLAN.md`.

## Security Notes

Included:

- Supabase Auth protected admin routes
- server-side role checks in Server Actions
- RLS policies
- zod validation for public forms
- honeypot anti-bot fields
- file type and size checks
- security headers in `next.config.ts`
- noindex metadata for admin and thank-you pages

Production recommendations:

- Keep `SUPABASE_SERVICE_ROLE_KEY` server-only.
- Use HTTPS only.
- Rotate keys if leaked.
- Review CSP before adding third-party scripts.
- Add rate limiting or CAPTCHA if spam becomes an issue.
- Replace starter legal pages with counsel-approved text.

## SSL/TLS

Vercel provides SSL automatically after the domain is connected. Set the production domain in Vercel and update `NEXT_PUBLIC_SITE_URL`.

For Hostinger VPS later, use Nginx or Caddy as a reverse proxy and issue certificates with Let's Encrypt. Force HTTPS at the proxy layer and keep HSTS enabled.

Example production commands on a VPS:

```bash
npm ci
npm run build
npm run start
```

Use a process manager such as PM2 or systemd and proxy port `3000` through Nginx/Caddy.

## Vercel Deployment

1. Push this repo to GitHub.
2. Import into Vercel.
3. Add all environment variables.
4. Deploy.
5. Connect domain.
6. Confirm `/sitemap.xml`, `/robots.txt`, `/feed.xml`, and `/llms.txt`.
7. Submit sitemap in Google Search Console.

## Hostinger VPS Migration Path

The app is portable because it uses standard Next.js and PostgreSQL/Supabase APIs.

Later migration options:

- Keep Supabase database/storage and move only the Next.js runtime to VPS.
- Move PostgreSQL to VPS-managed Postgres and replace Supabase Auth/Storage with self-hosted equivalents.
- Keep table shapes and content models from `supabase/migrations/001_initial_schema.sql`.

VPS notes:

- Install Node 20.9+ or newer.
- Configure `.env.production`.
- Run `npm ci && npm run build`.
- Run with PM2/systemd.
- Use Nginx/Caddy for reverse proxy, gzip/brotli, HTTPS, and redirects.
- Use Let's Encrypt certificates.

## Troubleshooting

- Admin visible but writes fail: Supabase env vars are missing or RLS role is not admin/editor.
- Login succeeds but admin redirects: update the user's `profiles.role` to `admin`.
- Images show fallback frames: add the image files documented in `docs/IMAGE-ASSET-GUIDE.md`.
- Sitemap uses localhost: set `NEXT_PUBLIC_SITE_URL`.
- Resume uploads fail: set `SUPABASE_SERVICE_ROLE_KEY` and confirm the `career-resumes` bucket exists.
- Email notifications do not send: add `RESEND_API_KEY` and `LEAD_NOTIFICATION_EMAIL`.
