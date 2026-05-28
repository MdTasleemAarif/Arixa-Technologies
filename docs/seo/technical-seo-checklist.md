# Technical SEO Checklist

This project implements technical SEO in code and leaves launch tasks documented for production.

## Implemented In Code

- Metadata helper for title, description, canonical URL, robots, Open Graph, and Twitter cards.
- CMS-backed SEO overrides through the `seo_overrides` table.
- `robots.txt` generated from `src/app/robots.ts`.
- `sitemap.xml` generated from `src/app/sitemap.ts` with service, blog, and image URLs.
- RSS feed at `/feed.xml`.
- GEO-friendly machine-readable summary at `/llms.txt`.
- JSON-LD for Organization, ProfessionalService/LocalBusiness, WebSite, BreadcrumbList, FAQPage, BlogPosting, and Service.
- Custom 404 and error pages.
- Noindex handling for admin and thank-you routes, plus CMS noindex fields.
- Redirect handling through `src/proxy.ts` and the `redirects` table.
- Security headers in `next.config.ts`.
- `next/image` usage with dimensions, alt text, priority hero images, and lazy loading by default.

## Redirect Strategy

- Use 301 or 308 for permanent URL moves.
- Use 302 or 307 only for temporary moves.
- Keep source and destination paths human-readable.
- Avoid redirect chains by pointing old URLs directly to the final URL.
- Add removed pages to `redirects` or the static redirect list in `src/proxy.ts`.
- Check Search Console crawl errors after deployment and add redirects for important broken URLs.

## Crawl Budget

- Keep admin and thank-you pages out of the index.
- Avoid indexing search/filter query URLs.
- Keep sitemap focused on canonical public pages.
- Remove broken internal links before deployment.
- Keep duplicate or thin pages out of navigation and sitemap.

## HTTPS / TLS

- Vercel provides SSL/TLS automatically after the domain is connected.
- For Hostinger VPS later, use Let’s Encrypt through Caddy, Nginx + Certbot, or the Hostinger panel.
- Keep HTTP to HTTPS redirects enabled.
- Keep HSTS enabled only after HTTPS is stable for the production domain.

## Broken-Link Prevention

- Prefer internal links from central config/data where possible.
- Run a link crawl before launch.
- Keep deleted pages redirected when they have backlinks or have been indexed.
- Submit the updated sitemap in Google Search Console after major URL changes.
