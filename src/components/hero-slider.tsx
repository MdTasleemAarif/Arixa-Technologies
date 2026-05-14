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
    accentColor: "from-violet-500 via-fuchsia-400 to-cyan-400",
    gradientText: "from-violet-200 via-fuchsia-200 to-cyan-200",
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
    accentColor: "from-fuchsia-400 via-purple-400 to-cyan-400",
    gradientText: "from-fuchsia-200 via-purple-200 to-cyan-200",
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
    accentColor: "from-purple-400 via-cyan-400 to-violet-400",
    gradientText: "from-purple-200 via-cyan-200 to-violet-200",
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
    <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/15">
      <div
        className={`h-full rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 transition-all ${
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
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero slideshow"
    >
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
            className="object-cover object-center"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#090611]/96 via-[#111024]/78 to-[#090611]/42" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090611]/64 via-transparent to-transparent" />
        </div>

        {/* Accent overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(139,92,246,0.20),transparent_30%),linear-gradient(75deg,transparent_45%,rgba(34,211,238,0.15)_72%,transparent),linear-gradient(180deg,rgba(232,121,249,0.10),transparent_56%)]" />

        {/* Content */}
        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[minmax(0,1fr)_430px] lg:px-8">
          <div className="max-w-4xl">
            {/* Eyebrow badge */}
            <div
              className={`hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-white/18 bg-black/25 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-500 ${
                transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <EyebrowIcon size={14} className="shrink-0 text-fuchsia-200" aria-hidden="true" />
              {slide.eyebrow}
            </div>

            {/* Headline */}
            <h1
              className={`font-display text-balance text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.35rem] transition-all duration-500 delay-75 ${
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
              className={`text-pretty mt-6 max-w-2xl text-lg leading-8 text-slate-200 transition-all duration-500 delay-100 ${
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-100 backdrop-blur"
                >
                  <CheckCircle2 size={13} className="text-purple-200" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            {/* Service badge */}
            <p
              className={`mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 transition-all duration-500 delay-150 ${
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
                className={`btn-glow inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-gradient-to-r ${slide.accentColor} px-7 py-3.5 text-sm font-bold text-[#15091f] shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-300`}
              >
                {slide.cta.label} <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href={slide.secondaryCta.href}
                className="inline-flex h-13 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-fuchsia-200/40 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                {slide.secondaryCta.label}
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.whatsapp}`}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-lg border border-purple-300/35 bg-purple-400/10 px-7 py-3.5 text-sm font-semibold text-purple-200 backdrop-blur-sm transition hover:bg-purple-400/20 focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                <MessageCircle size={17} aria-hidden="true" /> WhatsApp Us
              </Link>
            </div>
          </div>

          <aside
            className={`premium-card hidden rounded-lg p-5 backdrop-blur-xl transition-all duration-500 delay-150 lg:block ${
              transitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
            }`}
            aria-label="Arixa project capabilities"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
                  {slide.panelTitle}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  Built to look premium and work hard.
                </h2>
              </div>
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${slide.accentColor}`}>
                <EyebrowIcon size={18} className="text-[#15091f]" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-6 grid gap-3">
              {slide.panelRows.map(([label, detail]) => (
                <div key={label} className="premium-card-soft rounded-lg p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <span className="h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_18px_rgba(192,132,252,0.55)]" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {slide.stats.map(([value, label]) => (
                <div key={value} className="rounded-lg border border-white/10 bg-black/20 p-3">
                  <p className="gradient-text text-lg font-black">{value}</p>
                  <p className="mt-1 text-[11px] leading-4 text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* Controls overlay */}
      <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-6 px-4">
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
                  ? "h-2.5 w-7 bg-white"
                  : "h-2 w-2 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:border-violet-300/40 hover:bg-white/20"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:border-cyan-300/40 hover:bg-white/20"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Slide counter */}
        <p className="text-xs font-semibold tabular-nums text-white/50">
          {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </p>
      </div>

      {/* Slide number */}
      <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 text-[10rem] font-black leading-none text-white/[0.03] select-none">
        {String(current + 1).padStart(2, "0")}
      </div>
    </section>
  );
}
