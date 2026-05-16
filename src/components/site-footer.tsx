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
    <footer className="relative overflow-hidden border-t border-teal-500/20 bg-[#fff8ea] px-4 py-14 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(115deg,rgba(7,151,165,0.1),transparent_34%),linear-gradient(74deg,transparent_45%,rgba(70,199,199,0.08),transparent_78%),linear-gradient(0deg,rgba(244,127,95,0.07),transparent)]" />

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
            <span className="font-display text-base font-semibold text-[#07304d]">{siteConfig.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#587487]">
            Premium websites, apps, SEO systems, custom software, and automation built to make your brand look sharper and your operations run smarter.
          </p>
          <div className="mt-6 space-y-3 text-sm text-[#587487]">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 transition-colors hover:text-[#0797a5]">
              <Mail size={15} aria-hidden="true" className="text-[#0797a5]" /> {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 transition-colors hover:text-[#c25231]">
              <Phone size={15} aria-hidden="true" className="text-[#e56842]" /> {siteConfig.phone}
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={15} aria-hidden="true" className="shrink-0 text-[#6968b8]" /> {siteConfig.address}
            </p>
          </div>
          {/* Social icons */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arixa Technologies on LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-teal-500/20 text-[#587487] transition hover:border-teal-300/40 hover:bg-teal-500/10 hover:text-[#087987]"
            >
              <LinkedInIcon />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arixa Technologies on Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-teal-500/20 text-[#587487] transition hover:border-orange-300/40 hover:bg-orange-400/10 hover:text-[#c25231]"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arixa Technologies on X"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-teal-500/20 text-[#587487] transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-[#087987]"
            >
              <XIcon />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arixa Technologies on Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-teal-500/20 text-[#587487] transition hover:border-indigo-300/40 hover:bg-indigo-400/10 hover:text-[#5756a4]"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#173f5f]">
            Services
          </h2>
          <div className="mt-4 grid gap-3 text-sm">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-[#587487] transition hover:text-[#c25231]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#173f5f]">
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
              <Link key={href} href={href} className="text-[#587487] transition hover:text-[#087987]">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#173f5f]">
            Stay Updated
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#587487]">
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
              className="min-w-0 flex-1 rounded-lg border border-teal-500/20 bg-white/75 px-3 py-2 text-sm text-[#07304d] outline-none transition placeholder:text-[#6d8797] focus:border-teal-300/60 focus:bg-white/85"
            />
            <button
              type="submit"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 via-orange-400 to-cyan-400 text-[#07304d] shadow-[0_0_18px_rgba(7,151,165,0.32)] transition hover:scale-105 hover:shadow-[0_0_24px_rgba(70,199,199,0.32)]"
              aria-label="Subscribe"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-teal-500/20 pt-6 text-sm text-[#6d8797] sm:flex-row sm:items-center sm:justify-between">
        <p>(c) {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Built with Next.js / Supabase / Vercel</p>
      </div>
    </footer>
  );
}
