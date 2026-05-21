import Link from "next/link";
import type { IconType } from "react-icons";
import {
  SiAngular,
  SiCloudflare,
  SiCplusplus,
  SiCss,
  SiDart,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiGit,
  SiGithub,
  SiGo,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiShopify,
  SiSupabase,
  SiSvelte,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  Palette,
  Smartphone,
  Sparkles,
  Star,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import { AnimateIn, AnimateInStagger } from "@/components/animate-in";
import { CountUp } from "@/components/count-up";
import { CtaSection } from "@/components/cta-section";
import { Faq } from "@/components/faq";
import { HeroSlider } from "@/components/hero-slider";
import { ImageSlot } from "@/components/image-slot";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { siteAssets } from "@/config/site-assets";
import {
  blogPosts,
  portfolioItems,
  pricingPlans,
  services,
  siteFaqs,
  testimonials,
} from "@/data/site-data";
import { createMetadata, faqSchema, organizationSchema, websiteSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Premium Software, Website, App & SEO Company",
  description:
    "Arixa Technologies builds premium websites, apps, custom software, SEO systems, e-commerce platforms, and AI automation for businesses.",
  path: "/",
});

const homeServiceVisuals = [
  {
    icon: Globe2,
    frame: "bg-[linear-gradient(145deg,#07111f,#092b38_58%,#08111f)]",
    corner: "bg-[linear-gradient(135deg,rgba(56,214,209,0.38),transparent)]",
    marker: "bg-[#67eee0] text-[#071525]",
    iconBox: "border-cyan-100/18 bg-cyan-100/12 text-[#67eee0]",
    eyebrow: "text-[#67eee0]",
    button: "bg-[#67eee0] text-[#071525]",
  },
  {
    icon: Layers3,
    frame: "bg-[linear-gradient(145deg,#07111f,#251c39_58%,#08111f)]",
    corner: "bg-[linear-gradient(135deg,rgba(143,124,255,0.42),transparent)]",
    marker: "bg-[#cabdff] text-[#071525]",
    iconBox: "border-violet-100/18 bg-violet-100/12 text-[#cabdff]",
    eyebrow: "text-[#cabdff]",
    button: "bg-[#cabdff] text-[#071525]",
  },
  {
    icon: Smartphone,
    frame: "bg-[linear-gradient(145deg,#07111f,#11313b_58%,#08111f)]",
    corner: "bg-[linear-gradient(135deg,rgba(246,201,91,0.38),transparent)]",
    marker: "bg-[#f6c95b] text-[#071525]",
    iconBox: "border-amber-100/18 bg-amber-100/12 text-[#f6c95b]",
    eyebrow: "text-[#f6c95b]",
    button: "bg-[#f6c95b] text-[#071525]",
  },
  {
    icon: BarChart3,
    frame: "bg-[linear-gradient(145deg,#07111f,#30201f_58%,#08111f)]",
    corner: "bg-[linear-gradient(135deg,rgba(255,133,109,0.42),transparent)]",
    marker: "bg-[#ffb785] text-[#071525]",
    iconBox: "border-orange-100/18 bg-orange-100/12 text-[#ffb785]",
    eyebrow: "text-[#ffb785]",
    button: "bg-[#ffb785] text-[#071525]",
  },
  {
    icon: Code2,
    frame: "bg-[linear-gradient(145deg,#07111f,#122642_58%,#08111f)]",
    corner: "bg-[linear-gradient(135deg,rgba(92,174,255,0.38),transparent)]",
    marker: "bg-[#8dcfff] text-[#071525]",
    iconBox: "border-sky-100/18 bg-sky-100/12 text-[#8dcfff]",
    eyebrow: "text-[#8dcfff]",
    button: "bg-[#8dcfff] text-[#071525]",
  },
  {
    icon: Palette,
    frame: "bg-[linear-gradient(145deg,#07111f,#321c34_58%,#08111f)]",
    corner: "bg-[linear-gradient(135deg,rgba(201,96,255,0.4),transparent)]",
    marker: "bg-[#e4a7ff] text-[#071525]",
    iconBox: "border-fuchsia-100/18 bg-fuchsia-100/12 text-[#e4a7ff]",
    eyebrow: "text-[#e4a7ff]",
    button: "bg-[#e4a7ff] text-[#071525]",
  },
  {
    icon: Bot,
    frame: "bg-[linear-gradient(145deg,#07111f,#123038_58%,#08111f)]",
    corner: "bg-[linear-gradient(135deg,rgba(56,214,209,0.34),transparent)]",
    marker: "bg-[#6ce9d1] text-[#071525]",
    iconBox: "border-emerald-100/18 bg-emerald-100/12 text-[#6ce9d1]",
    eyebrow: "text-[#6ce9d1]",
    button: "bg-[#6ce9d1] text-[#071525]",
  },
  {
    icon: Sparkles,
    frame: "bg-[linear-gradient(145deg,#07111f,#2c2619_58%,#08111f)]",
    corner: "bg-[linear-gradient(135deg,rgba(246,201,91,0.4),transparent)]",
    marker: "bg-[#ffe08c] text-[#071525]",
    iconBox: "border-yellow-100/18 bg-yellow-100/12 text-[#ffe08c]",
    eyebrow: "text-[#ffe08c]",
    button: "bg-[#ffe08c] text-[#071525]",
  },
];

const homeServiceOutcomes = [
  { label: "Design", text: "Premium visual identity and page sections that build trust quickly." },
  { label: "Build", text: "Fast websites, apps, stores, dashboards, CMS, and custom systems." },
  { label: "Rank", text: "SEO, AEO, GEO, schema, blog structure, and clean internal linking." },
  { label: "Convert", text: "Quote paths, WhatsApp actions, lead forms, and persuasive service copy." },
];

const homePillars = [
  {
    icon: Sparkles,
    title: "Premium design that sells",
    text: "Modern layouts, strong hierarchy, polished motion, and trust-building sections that make visitors feel they are dealing with a serious company.",
    accent: "from-teal-500/20 to-cyan-500/10 text-[#087987]",
  },
  {
    icon: Code2,
    title: "Engineering that can grow",
    text: "Next.js, TypeScript, PostgreSQL, Supabase, clean components, CMS workflows, and deployment planning built for real business use.",
    accent: "from-cyan-400/20 to-indigo-400/10 text-[#087987]",
  },
  {
    icon: TrendingUp,
    title: "SEO structure from day one",
    text: "Service pages, blog architecture, schema, metadata, sitemap, RSS, image SEO, AEO, GEO, and internal links prepared before launch.",
    accent: "from-orange-400/20 to-indigo-500/10 text-[#c25231]",
  },
];

const servicePitches = [
  "Make the first impression feel expensive, trustworthy, and ready to convert.",
  "Turn business workflows into secure portals, dashboards, and user journeys.",
  "Give customers a polished mobile experience connected to your backend.",
  "Build search visibility with technical SEO, content structure, and schema.",
  "Launch a store that makes products easier to discover, trust, and buy.",
  "Replace spreadsheets with CRM, billing, reporting, and automation systems.",
  "Upgrade your brand, UI, graphics, and conversion-focused visual language.",
  "Automate leads, support, reporting, and repeated operations with practical AI.",
];

const homeMetrics = [
  { value: 8, suffix: "", label: "Service tracks", detail: "Website, apps, software, SEO, design, and automation." },
  { value: 10, suffix: "", label: "Starter blog topics", detail: "Publishing structure ready for long-term search growth." },
  { value: 4, suffix: "", label: "Launch layers", detail: "Brand, product UX, CMS control, and lead generation." },
  { value: 1, suffix: "", label: "Custom CMS", detail: "Admin workflows built inside the website stack." },
];

type TechIcon = {
  name: string;
  icon: IconType;
  color: string;
};

const techGroups: { title: string; items: TechIcon[] }[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "PHP", icon: SiPhp, color: "#777bb4" },
      { name: "Java", icon: SiOpenjdk, color: "#f89820" },
      { name: "Go", icon: SiGo, color: "#00add8" },
      { name: "Rust", icon: SiRust, color: "#f46623" },
      { name: "C++", icon: SiCplusplus, color: "#00599c" },
      { name: "Dart", icon: SiDart, color: "#0175c2" },
      { name: "Swift", icon: SiSwift, color: "#f05138" },
      { name: "Kotlin", icon: SiKotlin, color: "#a97bff" },
    ],
  },
  {
    title: "Frontend & UI",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS", icon: SiCss, color: "#663399" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#07304d" },
      { name: "Vue", icon: SiVuedotjs, color: "#4fc08d" },
      { name: "Angular", icon: SiAngular, color: "#dd0031" },
      { name: "Svelte", icon: SiSvelte, color: "#ff3e00" },
      { name: "Flutter", icon: SiFlutter, color: "#02569b" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#46c7c7" },
      { name: "Framer", icon: SiFramer, color: "#a78bfa" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
    ],
  },
  {
    title: "Backend, CMS & APIs",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Express", icon: SiExpress, color: "#07304d" },
      { name: "NestJS", icon: SiNestjs, color: "#e0234e" },
      { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
      { name: "WordPress", icon: SiWordpress, color: "#21759b" },
      { name: "Shopify", icon: SiShopify, color: "#95bf47" },
      { name: "GraphQL", icon: SiGraphql, color: "#e10098" },
      { name: "Prisma", icon: SiPrisma, color: "#7dd3fc" },
      { name: "Redis", icon: SiRedis, color: "#ff4438" },
    ],
  },
  {
    title: "Database, Cloud & DevOps",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
      { name: "Vercel", icon: SiVercel, color: "#07304d" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#f38020" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#07304d" },
      { name: "Linux", icon: SiLinux, color: "#fcc624" },
    ],
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Position",
    desc: "Clarify your offer, audience, services, competitors, and the action every page should drive.",
    icon: TrendingUp,
    color: "text-[#0797a5]",
    glow: "rgba(7,151,165,0.22)",
  },
  {
    step: "02",
    title: "Shape",
    desc: "Create the visual direction, content hierarchy, UX flow, trust sections, and conversion paths.",
    icon: Palette,
    color: "text-[#c25231]",
    glow: "rgba(244,127,95,0.22)",
  },
  {
    step: "03",
    title: "Build",
    desc: "Develop the Next.js app, CMS, forms, database schema, admin routes, and integrations.",
    icon: Code2,
    color: "text-[#0797a5]",
    glow: "rgba(70,199,199,0.22)",
  },
  {
    step: "04",
    title: "Grow",
    desc: "Deploy, test, submit SEO assets, monitor leads, and plan content or automation upgrades.",
    icon: Zap,
    color: "text-[#6968b8]",
    glow: "rgba(121,120,200,0.22)",
  },
];

function StarRating() {
  return (
    <div className="star-rating flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="fill-orange-500 text-[#e56842]" aria-hidden="true" />
      ))}
    </div>
  );
}

function AvatarInitial({ name, gradient }: { name: string; gradient: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-sm font-bold text-[#07304d] shrink-0`}
    >
      {initials}
    </span>
  );
}

const avatarGradients = [
  "from-teal-500 to-cyan-500",
  "from-orange-400 to-indigo-400",
  "from-cyan-400 to-cyan-500",
];

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema(), faqSchema(siteFaqs)]} />


      {/* Hero Slider */}
      <HeroSlider />

      <section className="relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="hero-metrics mx-auto grid max-w-7xl gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {homeMetrics.map((metric, index) => (
            <div key={metric.label} className="relative bg-[#08111f]/82 p-5 sm:p-6">
              <span className="metric-trace absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" style={{ animationDelay: `${index * 0.35}s` }} />
              <p className="font-display text-3xl font-bold text-white">
                <CountUp end={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-[#67eee0]">{metric.label}</p>
              <p className="mt-2 text-sm leading-6 text-[#b9cadd]">{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Strip */}
      <section className="section-band px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c25231]">
              Technology expertise
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#07304d] sm:text-3xl">
              Real languages, frameworks, databases, and cloud tools behind premium builds.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#587487]">
              Arixa Technologies can plan the right stack for websites, CMS platforms, apps, automation, e-commerce, SEO systems, and scalable admin panels.
            </p>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-2">
            {techGroups.map((group) => (
              <div key={group.title} className="premium-card-soft rounded-lg p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#173f5f]">
                    {group.title}
                  </h3>
                  <span className="h-px flex-1 bg-gradient-to-r from-teal-400/45 via-orange-300/35 to-transparent" />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6">
                  {group.items.map((tech) => {
                    const Icon = tech.icon;

                    return (
                      <div
                        key={tech.name}
                        className="tech-logo group flex min-w-0 flex-col items-center gap-2 rounded-lg border border-teal-500/20 bg-white/80 px-2 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition hover:border-teal-300/45 hover:bg-white"
                        title={tech.name}
                      >
                        <Icon
                          className="h-7 w-7 transition duration-300 group-hover:scale-110"
                          style={{ color: tech.color }}
                          aria-hidden="true"
                        />
                        <span className="max-w-full truncate text-[11px] font-semibold leading-4 text-[#365b70]">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <SectionHeading
              eyebrow="What makes it premium"
              title="Arixa combines visual polish, clean engineering, and growth strategy."
              description="The website is designed to impress buyers, explain your services clearly, capture enquiries, and stay manageable after launch."
              align="center"
              gradient
            />
          </AnimateIn>
          <AnimateInStagger
            wrapperClassName="mt-10 grid gap-5 lg:grid-cols-3"
            stepDelay={80}
          >
            {homePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="premium-card card-hover rounded-lg p-6">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${pillar.accent}`}>
                    <Icon size={22} className={pillar.accent.split(" ")[2]} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#07304d]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#365b70]">{pillar.text}</p>
                </div>
              );
            })}
          </AnimateInStagger>
        </div>
      </section>

      {/* Services */}
      <section className="ink-section relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-px w-1/2 bg-gradient-to-l from-transparent via-orange-200/45 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-[#67eee0]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffb785]" />
                  Services
                </p>
                <h2 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.04] text-white sm:text-5xl lg:text-6xl">
                  Services that make your brand look premium and your business easier to run.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7d8ea]">
                  Arixa combines design, development, SEO, e-commerce, apps, CMS, and automation into practical systems that can attract leads and support daily operations.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/services"
                    className="btn-glow inline-flex h-12 items-center gap-2 rounded-lg px-5 text-sm font-extrabold text-[#071525]"
                  >
                    Explore all services <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/18 bg-white/9 px-5 text-sm font-bold text-white transition hover:bg-white/16"
                  >
                    Get a free quote
                  </Link>
                </div>
              </div>

              <div className="hero-console relative rounded-lg p-5">
                <p className="relative text-xs font-extrabold uppercase tracking-[0.18em] text-[#ffb785]">
                  Growth system
                </p>
                <h3 className="relative mt-3 font-display text-3xl font-bold leading-tight text-white">
                  One section. Clear services. Strong reason to contact.
                </h3>
                <div className="relative mt-5 divide-y divide-white/10">
                  {homeServiceOutcomes.map((item) => (
                    <div key={item.label} className="grid gap-2 py-3 sm:grid-cols-[90px_1fr] sm:items-start">
                      <span className="text-sm font-extrabold text-[#67eee0]">{item.label}</span>
                      <span className="text-sm leading-6 text-[#c7d8ea]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateInStagger
            wrapperClassName="relative mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            stepDelay={60}
          >
            {services.slice(0, 8).map((service, index) => {
              const visual = homeServiceVisuals[index] || homeServiceVisuals[0];
              const Icon = visual.icon;
              const highlights = [service.benefits[0], service.features[0]]
                .filter((item): item is string => Boolean(item))
                .slice(0, 2);

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`premium-service-card card-hover group relative flex min-h-[360px] flex-col rounded-lg p-5 ${visual.frame}`}
                >
                  <span className={`pointer-events-none absolute right-0 top-0 h-24 w-28 rounded-bl-[3.5rem] ${visual.corner}`} />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-extrabold shadow-[0_12px_30px_rgba(0,0,0,0.24)] ${visual.marker}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`icon-glow inline-flex h-12 w-12 items-center justify-center rounded-lg border shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] ${visual.iconBox}`}>
                      <Icon size={22} aria-hidden="true" />
                    </span>
                  </div>

                  <p className={`relative mt-6 text-xs font-extrabold uppercase tracking-[0.15em] ${visual.eyebrow}`}>
                    {service.eyebrow}
                  </p>
                  <h3 className="relative mt-2 font-display text-2xl font-bold leading-tight text-white transition-colors group-hover:text-[#f5fbff]">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-7 text-[#c7d8ea]">
                    {servicePitches[index] || service.summary}
                  </p>

                  <div className="relative mt-5 grid gap-2">
                    {highlights.map((highlight) => (
                      <span key={highlight} className="flex items-start gap-2 text-xs font-semibold leading-5 text-white/78">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#67eee0]" aria-hidden="true" />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <span className={`relative mt-auto inline-flex w-max items-center gap-2 rounded-full px-4 py-2 text-sm font-bold shadow-[0_12px_28px_rgba(0,0,0,0.2)] transition group-hover:gap-3 ${visual.button}`}>
                    Learn more <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </AnimateInStagger>
        </div>
      </section>

      {/* Why Choose Arixa */}
      <section className="section-band px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <AnimateIn variant="left">
            <ImageSlot
              src={siteAssets.homeServices.src}
              alt={siteAssets.homeServices.alt}
              width={siteAssets.homeServices.width}
              height={siteAssets.homeServices.height}
            />
          </AnimateIn>
          <AnimateIn variant="right">
            <div>
              <SectionHeading
                eyebrow="Why Arixa"
                title="A sharper online presence, plus the backend control to keep it growing."
                description="Your site should not only look beautiful. It should capture leads, publish content, prove expertise, and remain easy to maintain as your business expands."
              />
              <div className="mt-8 grid gap-3">
                {[
                  { icon: Shield, text: "A private CMS for blogs, portfolio, careers, leads, media, FAQs, and SEO fields." },
                  { icon: Code2, text: "A clean Next.js codebase designed for Vercel now and Hostinger VPS migration later." },
                  { icon: TrendingUp, text: "SEO foundations built into pages, images, schema, sitemap, RSS, and answer-ready content." },
                  { icon: CheckCircle2, text: "Lead forms, WhatsApp CTAs, validation, protected admin routes, and launch documentation." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="premium-card-soft card-hover flex gap-3 rounded-lg p-4 text-sm leading-7 text-[#365b70]"
                    >
                      <Icon className="mt-1 shrink-0 text-[#0797a5]" size={17} aria-hidden="true" />
                      {item.text}
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <SectionHeading
              eyebrow="Portfolio preview"
              title="Case-study layouts that show problem, solution, and business value."
              description="Portfolio pages are structured to make your work look credible: clear project visuals, stack details, challenges, solutions, results, and conversion paths."
            />
          </AnimateIn>
          <AnimateInStagger
            wrapperClassName="mt-10 grid gap-5 md:grid-cols-3"
            stepDelay={80}
          >
            {portfolioItems.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="premium-card-soft card-hover group flex flex-col rounded-lg p-4"
              >
                <ImageSlot src={item.image} alt={item.imageAlt} width={1200} height={900} className="shadow-none" />
                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-full border border-indigo-300/20 bg-indigo-400/12 px-2.5 py-0.5 text-xs font-semibold text-[#5756a4]">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-[#07304d] transition-colors group-hover:text-[#c25231]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#587487] flex-1">{item.summary}</p>
                <span className="premium-link mt-4 text-xs font-semibold transition-all group-hover:gap-2.5">
                  View case study <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </AnimateInStagger>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <SectionHeading
              eyebrow="Workflow"
              title="A guided process that turns ideas into a polished launch."
              description="We define the offer, shape the design, build the system, test the details, launch cleanly, and prepare the next growth step."
              align="center"
            />
          </AnimateIn>
          <AnimateInStagger
            wrapperClassName="mt-12 grid gap-4 md:grid-cols-4"
            stepDelay={90}
          >
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="workflow-connector premium-card-soft card-hover relative rounded-lg p-6"
                  style={{ "--glow": step.glow } as React.CSSProperties}
                >
                  {/* Step number with glow ring */}
                  <div className="mb-5 flex items-center gap-3">
                    <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/20 bg-current/10 text-sm font-bold ${step.color}`}
                      style={{ borderColor: `${step.glow}` }}>
                      {step.step}
                    </span>
                    <Icon size={20} className={step.color} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#07304d]">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-7 text-[#587487]">{step.desc}</p>
                </div>
              );
            })}
          </AnimateInStagger>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <SectionHeading
              eyebrow="Trust"
              title="Built to feel reliable before the first call."
              description="The copy, proof sections, contact paths, process, FAQs, and admin workflows are designed to reduce doubt and move serious buyers forward."
            />
          </AnimateIn>
          <AnimateInStagger
            wrapperClassName="mt-10 grid gap-5 md:grid-cols-3"
            stepDelay={80}
          >
            {testimonials.map((testimonial, i) => (
              <figure
                key={testimonial.name}
                className="premium-card-soft card-hover flex flex-col rounded-lg p-6"
              >
                <StarRating />
                <blockquote className="mt-4 flex-1 text-sm leading-7 text-[#365b70]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-teal-500/15 pt-5">
                  <AvatarInitial name={testimonial.name} gradient={avatarGradients[i % avatarGradients.length]} />
                  <div>
                    <p className="text-sm font-semibold text-[#07304d]">{testimonial.name}</p>
                    <p className="mt-0.5 text-xs text-[#6d8797]">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </AnimateInStagger>
        </div>
      </section>

      {/* Blog */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Blog preview"
                title="A content engine for search, answers, and AI discovery."
                description="The blog is ready for categories, tags, article schema, related posts, table of contents, FAQs, RSS, and long-term SEO publishing."
              />
              <Link href="/blog" className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg border border-teal-500/30 px-4 text-sm font-semibold text-[#07304d] transition hover:bg-white/85">
                View all posts <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </AnimateIn>
          <AnimateInStagger
            wrapperClassName="mt-10 grid gap-5 md:grid-cols-3"
            stepDelay={80}
          >
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="premium-card-soft card-hover group flex flex-col rounded-lg p-5"
              >
                <span className="inline-flex self-start rounded-full border border-teal-300/20 bg-teal-500/12 px-2.5 py-0.5 text-xs font-semibold text-[#087987]">
                  {post.category}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#07304d] transition-colors group-hover:text-[#087987]">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#587487]">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-teal-500/15 pt-4">
                  <span className="text-xs text-[#6d8797]">{new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="premium-link text-xs font-semibold transition-all group-hover:gap-2.5">
                    Read more <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </AnimateInStagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimateIn variant="left">
            <SectionHeading
              eyebrow="FAQ"
              title="Clear answers that remove hesitation."
              description="Short, direct FAQs help buyers understand your offer quickly while also supporting search engines and AI answer systems."
            />
          </AnimateIn>
          <AnimateIn variant="right">
            <Faq items={siteFaqs} />
          </AnimateIn>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <SectionHeading
              eyebrow="Pricing preview"
              title="Simple starting points for serious digital work."
              description="Use these ranges to choose the right direction. Custom software, automation, and app projects receive tailored planning and quotes."
              align="center"
            />
          </AnimateIn>
          <AnimateInStagger
            wrapperClassName="mt-10 grid gap-5 md:grid-cols-4"
            stepDelay={70}
          >
            {pricingPlans.map((plan) => {
              const isPopular = plan.slug === "business";
              return (
                <div
                  key={plan.slug}
                  className={`flex flex-col rounded-lg border p-6 transition ${
                    isPopular
                      ? "pricing-popular"
                      : "premium-card-soft hover:border-teal-300/30 hover:bg-teal-500/5"
                  }`}
                >
                  {isPopular && (
                    <span className="mb-3 inline-flex self-start items-center gap-1 rounded-full bg-gradient-to-r from-teal-500 via-orange-400 to-cyan-400 px-3 py-0.5 text-xs font-bold text-[#07304d]">
                      <Star size={10} /> Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-[#07304d]">{plan.name}</h3>
                  <p className="mt-2 text-lg font-bold gradient-text">{plan.price}</p>
                  <p className="mt-3 text-sm leading-6 text-[#587487]">{plan.description}</p>
                  <ul className="mt-5 grid gap-2.5 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-[#365b70]">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#6968b8]" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-6 inline-flex h-11 items-center justify-center rounded-lg text-sm font-semibold transition ${
                      isPopular
                        ? "btn-glow text-[#07304d]"
                        : "border border-teal-500/30 text-[#07304d] hover:bg-white/85"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              );
            })}
          </AnimateInStagger>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
