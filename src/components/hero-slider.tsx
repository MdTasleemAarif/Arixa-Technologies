"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Code2,
  TrendingUp,
} from "lucide-react";
import { siteConfig } from "@/config/site";

/* Slide data */
const heroSlides = [
  {
    id: 1,
    image: "/images/home/hero-slide-1.png",
    eyebrow: "Premium Digital Solutions",
    eyebrowIcon: Globe2,
    headline: "Premium digital systems that",
    headlineGradient: "win trust",
    headlineEnd: "and bring serious enquiries.",
    subtext:
      "Arixa Technologies creates high-end websites, apps, SEO engines, e-commerce experiences, and automation systems that make your business look sharper, load faster, and convert better.",
    cta: { label: "Start Your Project", href: "/contact" },
    secondaryCta: { label: "Explore Services", href: "/services" },
    accentColor: "from-[#38d6d1] via-[#8f7cff] to-[#ff9a6b]",
    gradientText: "from-white via-[#67eee0] to-[#cabdff]",
    badge: "Website / Web App / Mobile App / SEO / Automation",
    proof: ["Lead-focused pages", "Premium UI/UX", "CMS and SEO ready"],
    panelTitle: "Launch stack",
    panelRows: [
      ["Brand Website", "Hero, service pages, trust sections, CTAs"],
      ["Custom CMS", "Blog, portfolio, media, leads, careers"],
      ["Search System", "Metadata, schema, sitemap, RSS, llms.txt"],
    ],
    stats: [
      ["Fast", "Core Web Vitals focus"],
      ["SEO", "Built for search visibility"],
      ["Secure", "Protected admin workflows"],
    ],
  },
  {
    id: 2,
    image: "/images/home/hero-slide-2.png",
    eyebrow: "Custom Software & Mobile Apps",
    eyebrowIcon: Code2,
    headline: "Web apps and automation that",
    headlineGradient: "replace manual work",
    headlineEnd: "with clean systems.",
    subtext:
      "We plan and build CRM systems, billing software, admin dashboards, portals, mobile apps, and AI-assisted workflows around the way your team actually operates.",
    cta: { label: "Get Free Quote", href: "/pricing" },
    secondaryCta: { label: "View Portfolio", href: "/portfolio" },
    accentColor: "from-[#ff9a6b] via-[#f6c95b] to-[#8f7cff]",
    gradientText: "from-white via-[#ffb785] to-[#67eee0]",
    badge: "Custom Software / CRM / Billing / Admin Panels",
    proof: ["Role-based dashboards", "PostgreSQL data models", "Portable deployment"],
    panelTitle: "Operations console",
    panelRows: [
      ["Leads", "Capture, assign, filter, and follow up"],
      ["Billing", "Invoices, payments, customers, reports"],
      ["Automation", "Reduce repeated admin tasks and delays"],
    ],
    stats: [
      ["CRM", "Centralized customer data"],
      ["Roles", "Admin and editor access"],
      ["Reports", "Business visibility"],
    ],
  },
  {
    id: 3,
    image: "/images/home/hero-slide-3.png",
    eyebrow: "SEO & Growth Systems",
    eyebrowIcon: TrendingUp,
    headline: "SEO and content systems that",
    headlineGradient: "make you easier to find",
    headlineEnd: "and easier to choose.",
    subtext:
      "We structure pages, blogs, FAQs, metadata, schema, image SEO, sitemaps, RSS, AEO, GEO, and llms.txt so search engines and AI systems understand your brand clearly.",
    cta: { label: "Get SEO Audit", href: "/contact" },
    secondaryCta: { label: "SEO Services", href: "/services/seo-services" },
    accentColor: "from-[#cabdff] via-[#38d6d1] to-[#f6c95b]",
    gradientText: "from-white via-[#cabdff] to-[#67eee0]",
    badge: "Technical SEO / AEO / GEO / Blog Growth",
    proof: ["Answer-first content", "Structured data", "Internal linking"],
    panelTitle: "Growth signals",
    panelRows: [
      ["Technical SEO", "Clean crawl paths, metadata, canonical URLs"],
      ["AEO and GEO", "Direct answers and machine-readable context"],
      ["Content Engine", "Categories, tags, related posts, FAQs"],
    ],
    stats: [
      ["Rank", "Service-page architecture"],
      ["Answer", "FAQ and schema support"],
      ["Grow", "Publishing-ready blog"],
    ],
  },
];

const SLIDE_DURATION = 5500; // ms

/* Progress bar */
function ProgressBar({
  active,
  duration,
  paused,
}: {
  active: boolean;
  duration: number;
  paused: boolean;
}) {
  return (
    <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/20">
      <div
        className={`h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-orange-300 transition-all ${
          active && !paused ? "ease-linear" : "ease-out"
        }`}
        style={{
          width: active && !paused ? "100%" : "0%",
          transitionDuration: active && !paused ? `${duration}ms` : "300ms",
        }}
      />
    </div>
  );
}

/* Main slider */
export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [progressKey, setProgressKey] = useState(0); // forces bar re-mount

  const goTo = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setProgressKey((k) => k + 1);
        setTransitioning(false);
      }, 400);
    },
    [transitioning],
  );

  const next = useCallback(() => {
    goTo((current + 1) % heroSlides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + heroSlides.length) % heroSlides.length);
  }, [current, goTo]);

  /* Auto-advance */
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [current, paused, next, progressKey]);

  const slide = heroSlides[current];
  const EyebrowIcon = slide.eyebrowIcon;

  return (
    <section
      className="hero-stage relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero slideshow"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-[14%] z-10 h-px w-1/3 bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" />
      <div className="pointer-events-none absolute bottom-[18%] right-0 z-10 h-px w-[42%] bg-gradient-to-l from-transparent via-orange-200/35 to-transparent" />
      {/* Background image layer */}
      <div
        className={`relative min-h-[92vh] transition-opacity duration-500 ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Full-bleed image */}
        <div className="absolute inset-0">
          <Image
            src={slide.image}
            alt={`Arixa Technologies - ${slide.eyebrow}`}
            fill
            priority
            sizes="100vw"
            className="hero-image-motion object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,8,18,0.98)_0%,rgba(4,10,22,0.88)_42%,rgba(5,11,23,0.54)_72%,rgba(5,11,23,0.84)_100%)]" />
          <div className="absolute inset-0 bg-[#050a13]/24" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a13] via-transparent to-[#050a13]/42" />
        </div>

        {/* Accent overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(56,214,209,0.22),transparent_28%),linear-gradient(78deg,transparent_44%,rgba(143,124,255,0.18)_70%,transparent),linear-gradient(180deg,rgba(255,133,109,0.12),transparent_58%)]" />

        {/* Content */}
        <div className="relative z-20 mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[minmax(0,1fr)_430px] lg:px-8">
          <div className="max-w-4xl">
            {/* Eyebrow badge */}
            <div
              className={`hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_42px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md transition-all duration-500 ${
                transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <EyebrowIcon size={14} className="shrink-0 text-[#ffb785]" aria-hidden="true" />
              {slide.eyebrow}
            </div>

            {/* Headline */}
            <h1
              className={`font-display text-balance text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.15rem] transition-all duration-500 delay-75 ${
                transitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
              }`}
            >
              {slide.headline}{" "}
              <span
                className={`bg-gradient-to-r ${slide.gradientText} bg-clip-text text-transparent`}
              >
                {slide.headlineGradient}
              </span>{" "}
              {slide.headlineEnd}
            </h1>

            {/* Subtext */}
            <p
              className={`text-pretty mt-6 max-w-2xl text-lg leading-8 text-[#d1dfef] transition-all duration-500 delay-100 ${
                transitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
              }`}
            >
              {slide.subtext}
            </p>

            <div
              className={`mt-6 flex flex-wrap gap-2 transition-all duration-500 delay-125 ${
                transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {slide.proof.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/9 px-3 py-1.5 text-xs font-semibold text-white/88 backdrop-blur"
                >
                  <CheckCircle2 size={13} className="text-[#67eee0]" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            {/* Service badge */}
            <p
              className={`mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/46 transition-all duration-500 delay-150 ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {slide.badge}
            </p>

            {/* CTA buttons */}
            <div
              className={`mt-8 flex flex-wrap gap-3 transition-all duration-500 delay-150 ${
                transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <Link
                href={slide.cta.href}
                className={`btn-glow inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-gradient-to-r ${slide.accentColor} px-7 py-3.5 text-sm font-bold text-[#071525] shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-300`}
              >
                {slide.cta.label} <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href={slide.secondaryCta.href}
                className="inline-flex h-13 items-center justify-center rounded-lg border border-white/18 bg-white/9 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-cyan-100/40 hover:bg-white/16 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                {slide.secondaryCta.label}
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.whatsapp}`}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-lg border border-violet-200/26 bg-violet-300/10 px-7 py-3.5 text-sm font-semibold text-[#ece6ff] backdrop-blur-sm transition hover:bg-violet-300/18 focus:outline-none focus:ring-2 focus:ring-violet-300"
              >
                <MessageCircle size={17} aria-hidden="true" /> WhatsApp Us
              </Link>
            </div>
          </div>

          <aside
            className={`hero-console hidden rounded-lg p-5 transition-all duration-500 delay-150 lg:block ${
              transitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
            }`}
            aria-label="Arixa project capabilities"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ffb785]">
                  {slide.panelTitle}
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                  Built to look premium and work hard.
                </h2>
              </div>
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${slide.accentColor} shadow-[0_14px_34px_rgba(56,214,209,0.24)]`}>
                <EyebrowIcon size={18} className="text-[#071525]" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-6 grid gap-3">
              {slide.panelRows.map(([label, detail]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/8 p-4 backdrop-blur">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(56,214,209,0.72)]" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#c8d8ea]">{detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {slide.stats.map(([value, label]) => (
                <div key={value} className="rounded-lg border border-white/10 bg-white/8 p-3">
                  <p className="bg-gradient-to-r from-white via-cyan-100 to-orange-100 bg-clip-text text-lg font-black text-transparent">{value}</p>
                  <p className="mt-1 text-[11px] leading-4 text-[#c8d8ea]">{label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* Controls overlay */}
      <div className="absolute inset-x-0 bottom-6 z-20 px-4">
        <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-center gap-4 rounded-lg border border-white/12 bg-[#06101d]/70 px-4 py-3 shadow-[0_18px_54px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:gap-6">
        {/* Progress bars */}
        <div className="flex w-full max-w-xs items-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={`${s.id}-${progressKey}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="flex-1"
            >
              <ProgressBar
                active={i === current}
                duration={SLIDE_DURATION}
                paused={paused}
              />
            </button>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "h-2.5 w-7 bg-cyan-200"
                  : "h-2 w-2 bg-white/22 hover:bg-white/45"
              }`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/16 bg-white/9 text-white backdrop-blur-sm transition hover:border-cyan-200/38 hover:bg-white/18"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/16 bg-white/9 text-white backdrop-blur-sm transition hover:border-violet-200/38 hover:bg-white/18"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Slide counter */}
        <p className="text-xs font-semibold tabular-nums text-white/48">
          {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </p>
        </div>
      </div>

      {/* Slide number */}
      <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 select-none font-display text-[10rem] font-bold leading-none text-white/[0.045] lg:block">
        {String(current + 1).padStart(2, "0")}
      </div>
    </section>
  );
}
