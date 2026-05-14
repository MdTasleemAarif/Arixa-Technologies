import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { logoAsset } from "@/config/site-assets";
import { siteConfig } from "@/config/site";
import { services } from "@/data/site-data";
import { submitNewsletter } from "@/app/actions";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#090611] px-4 py-14 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(115deg,rgba(139,92,246,0.1),transparent_34%),linear-gradient(74deg,transparent_45%,rgba(34,211,238,0.08),transparent_78%),linear-gradient(0deg,rgba(232,121,249,0.07),transparent)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        {/* Brand column */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3 group">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
              <Image
                src={logoAsset.src}
                alt={logoAsset.alt}
                width={32}
                height={32}
                unoptimized
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-display text-base font-semibold text-white">{siteConfig.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Premium websites, apps, SEO systems, custom software, and automation built to make your brand look sharper and your operations run smarter.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-400">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 transition-colors hover:text-cyan-300">
              <Mail size={15} aria-hidden="true" className="text-violet-300" /> {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 transition-colors hover:text-fuchsia-200">
              <Phone size={15} aria-hidden="true" className="text-fuchsia-300" /> {siteConfig.phone}
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={15} aria-hidden="true" className="shrink-0 text-purple-300" /> {siteConfig.address}
            </p>
          </div>
          {/* Social icons */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arixa Technologies on LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-violet-300/40 hover:bg-violet-500/10 hover:text-violet-200"
            >
              <LinkedInIcon />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arixa Technologies on Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-fuchsia-300/40 hover:bg-fuchsia-400/10 hover:text-fuchsia-200"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arixa Technologies on X"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200"
            >
              <XIcon />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arixa Technologies on Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-purple-300/40 hover:bg-purple-400/10 hover:text-purple-200"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
            Services
          </h2>
          <div className="mt-4 grid gap-3 text-sm">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-slate-400 transition hover:text-fuchsia-200"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
            Company
          </h2>
          <div className="mt-4 grid gap-3 text-sm">
            {[
              ["About", "/about"],
              ["Portfolio", "/portfolio"],
              ["Pricing", "/pricing"],
              ["Blog", "/blog"],
              ["Careers", "/careers"],
              ["Contact", "/contact"],
              ["Privacy Policy", "/privacy-policy"],
              ["Terms", "/terms-and-conditions"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-slate-400 transition hover:text-cyan-200">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
            Stay Updated
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Get practical ideas on websites, apps, SEO, design, automation, and digital growth.
          </p>
          <form action={submitNewsletter} className="mt-5 flex gap-2">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 focus:bg-white/[0.08]"
            />
            <button
              type="submit"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 text-[#15091f] shadow-[0_0_18px_rgba(139,92,246,0.32)] transition hover:scale-105 hover:shadow-[0_0_24px_rgba(34,211,238,0.32)]"
              aria-label="Subscribe"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/[0.07] pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>(c) {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Built with Next.js / Supabase / Vercel</p>
      </div>
    </footer>
  );
}
