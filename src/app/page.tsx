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

const serviceIcons = [Globe2, Layers3, Smartphone, BarChart3, Code2, Palette, Bot, Sparkles];

const serviceColors = [
  "from-violet-500/22 to-indigo-500/10 text-violet-200",
  "from-fuchsia-400/22 to-purple-500/10 text-fuchsia-200",
  "from-cyan-400/22 to-indigo-500/10 text-cyan-200",
  "from-purple-400/22 to-violet-500/10 text-purple-200",
  "from-indigo-500/22 to-violet-500/10 text-indigo-200",
  "from-indigo-500/22 to-fuchsia-400/10 text-indigo-200",
  "from-indigo-400/22 to-purple-400/10 text-indigo-200",
  "from-fuchsia-400/18 to-cyan-400/10 text-fuchsia-200",
];

const homePillars = [
  {
    icon: Sparkles,
    title: "Premium design that sells",
    text: "Modern layouts, strong hierarchy, polished motion, and trust-building sections that make visitors feel they are dealing with a serious company.",
    accent: "from-violet-500/20 to-indigo-500/10 text-violet-200",
  },
  {
    icon: Code2,
    title: "Engineering that can grow",
    text: "Next.js, TypeScript, PostgreSQL, Supabase, clean components, CMS workflows, and deployment planning built for real business use.",
    accent: "from-cyan-400/20 to-purple-400/10 text-cyan-200",
  },
  {
    icon: TrendingUp,
    title: "SEO structure from day one",
    text: "Service pages, blog architecture, schema, metadata, sitemap, RSS, image SEO, AEO, GEO, and internal links prepared before launch.",
    accent: "from-fuchsia-400/20 to-purple-500/10 text-fuchsia-200",
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
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Vue", icon: SiVuedotjs, color: "#4fc08d" },
      { name: "Angular", icon: SiAngular, color: "#dd0031" },
      { name: "Svelte", icon: SiSvelte, color: "#ff3e00" },
      { name: "Flutter", icon: SiFlutter, color: "#02569b" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Framer", icon: SiFramer, color: "#a78bfa" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
    ],
  },
  {
    title: "Backend, CMS & APIs",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
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
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#f38020" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
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
    color: "text-violet-300",
    glow: "rgba(139,92,246,0.22)",
  },
  {
    step: "02",
    title: "Shape",
    desc: "Create the visual direction, content hierarchy, UX flow, trust sections, and conversion paths.",
    icon: Palette,
    color: "text-fuchsia-200",
    glow: "rgba(232,121,249,0.22)",
  },
  {
    step: "03",
    title: "Build",
    desc: "Develop the Next.js app, CMS, forms, database schema, admin routes, and integrations.",
    icon: Code2,
    color: "text-cyan-300",
    glow: "rgba(34,211,238,0.22)",
  },
  {
    step: "04",
    title: "Grow",
    desc: "Deploy, test, submit SEO assets, monitor leads, and plan content or automation upgrades.",
    icon: Zap,
    color: "text-purple-300",
    glow: "rgba(192,132,252,0.22)",
  },
];

function StarRating() {
  return (
    <div className="star-rating flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="fill-fuchsia-300 text-fuchsia-300" aria-hidden="true" />
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
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-sm font-bold text-white shrink-0`}
    >
      {initials}
    </span>
  );
}

const avatarGradients = [
  "from-violet-500 to-indigo-500",
  "from-fuchsia-400 to-purple-400",
  "from-cyan-400 to-indigo-500",
];

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema(), faqSchema(siteFaqs)]} />


      {/* Hero Slider */}
      <HeroSlider />


      {/* Tech Stack Strip */}
      <section className="section-band px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-200">
              Technology expertise
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Real languages, frameworks, databases, and cloud tools behind premium builds.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Arixa Technologies can plan the right stack for websites, CMS platforms, apps, automation, e-commerce, SEO systems, and scalable admin panels.
            </p>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-2">
            {techGroups.map((group) => (
              <div key={group.title} className="premium-card-soft rounded-lg p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
                    {group.title}
                  </h3>
                  <span className="h-px flex-1 bg-gradient-to-r from-violet-400/45 via-fuchsia-300/35 to-transparent" />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6">
                  {group.items.map((tech) => {
                    const Icon = tech.icon;

                    return (
                      <div
                        key={tech.name}
                        className="tech-logo group flex min-w-0 flex-col items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.045] px-2 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-violet-300/45 hover:bg-white/[0.075]"
                        title={tech.name}
                      >
                        <Icon
                          className="h-7 w-7 transition duration-300 group-hover:scale-110"
                          style={{ color: tech.color }}
                          aria-hidden="true"
                        />
                        <span className="max-w-full truncate text-[11px] font-semibold leading-4 text-slate-300">
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
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{pillar.text}</p>
                </div>
              );
            })}
          </AnimateInStagger>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <SectionHeading
              eyebrow="Services"
              title="Everything your business needs to look better, rank better, and work smarter."
              description="Choose one focused service or combine website, app, SEO, e-commerce, branding, and automation into a complete digital growth system."
            />
          </AnimateIn>
          <AnimateInStagger
            wrapperClassName="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            stepDelay={60}
          >
            {services.slice(0, 8).map((service, index) => {
              const Icon = serviceIcons[index] || Code2;
              const colorClass = serviceColors[index] || serviceColors[0];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="premium-card-soft card-hover group rounded-lg p-5"
                >
                  <span className={`icon-glow inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${colorClass.split(" ").slice(0,2).join(" ")}`}>
                    <Icon size={20} className={colorClass.split(" ")[2]} aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-white">{service.title}</h3>
                  <p className="mt-2.5 text-sm leading-7 text-slate-300">{servicePitches[index] || service.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-fuchsia-200 opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight size={12} />
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
                      className="premium-card-soft card-hover flex gap-3 rounded-lg p-4 text-sm leading-7 text-slate-300"
                    >
                      <Icon className="mt-1 shrink-0 text-cyan-300" size={17} aria-hidden="true" />
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
                  <span className="rounded-full border border-purple-300/20 bg-purple-400/12 px-2.5 py-0.5 text-xs font-semibold text-purple-200">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white transition-colors group-hover:text-fuchsia-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400 flex-1">{item.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-cyan-200 opacity-0 transition-opacity group-hover:opacity-100">
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
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-7 text-slate-400">{step.desc}</p>
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
                <blockquote className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <AvatarInitial name={testimonial.name} gradient={avatarGradients[i % avatarGradients.length]} />
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{testimonial.role}</p>
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
              <Link href="/blog" className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg border border-white/15 px-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]">
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
                <span className="inline-flex self-start rounded-full border border-violet-300/20 bg-violet-500/12 px-2.5 py-0.5 text-xs font-semibold text-violet-200">
                  {post.category}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white transition-colors group-hover:text-violet-100">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <span className="text-xs text-slate-500">{new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-fuchsia-200 opacity-0 transition-opacity group-hover:opacity-100">
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
                      : "premium-card-soft hover:border-violet-300/30 hover:bg-violet-500/5"
                  }`}
                >
                  {isPopular && (
                    <span className="mb-3 inline-flex self-start items-center gap-1 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 px-3 py-0.5 text-xs font-bold text-[#15091f]">
                      <Star size={10} /> Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-2 text-lg font-bold gradient-text">{plan.price}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{plan.description}</p>
                  <ul className="mt-5 grid gap-2.5 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-purple-300" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-6 inline-flex h-11 items-center justify-center rounded-lg text-sm font-semibold transition ${
                      isPopular
                        ? "btn-glow text-[#15091f]"
                        : "border border-white/15 text-white hover:bg-white/[0.08]"
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
