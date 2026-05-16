import { CheckCircle2, Compass, Eye, Gem, Target } from "lucide-react";
import { AnimateIn, AnimateInStagger } from "@/components/animate-in";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { ImageSlot } from "@/components/image-slot";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { siteAssets } from "@/config/site-assets";
import { createMetadata, breadcrumbSchema, organizationSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Arixa Technologies",
  description:
    "Learn about Arixa Technologies, a premium software and digital solutions company focused on websites, apps, SEO, custom software, and automation.",
  path: "/about",
});

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Business-first thinking",
      text: "We connect design and engineering decisions to lead generation, operations, visibility, and long-term maintainability.",
      color: "text-[#0797a5]",
      bg: "bg-teal-500/10",
    },
    {
      icon: Gem,
      title: "Premium execution",
      text: "Every page, component, form, and admin workflow is planned to feel polished, usable, and credible.",
      color: "text-[#c25231]",
      bg: "bg-orange-400/10",
    },
    {
      icon: Compass,
      title: "Portable architecture",
      text: "We build with standard Next.js, PostgreSQL, Supabase, and environment-driven configuration so future migration remains practical.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <AnimateIn variant="left">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#c25231]">
                <span className="inline-block h-px w-4 bg-gradient-to-r from-teal-400 via-orange-300 to-cyan-300" aria-hidden="true" />
                About Arixa
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-[#07304d] sm:text-6xl">
                We build premium digital systems for{" "}
                <span className="gradient-text">ambitious businesses.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#365b70]">
                Arixa Technologies is a software and digital solutions company focused on websites, web apps, mobile apps, SEO, e-commerce, custom software, branding, digital marketing, and AI automation.
              </p>
            </AnimateIn>
            <AnimateIn variant="right">
              <ImageSlot
                src={siteAssets.about.src}
                alt={siteAssets.about.alt}
                width={siteAssets.about.width}
                height={siteAssets.about.height}
                priority
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <AnimateIn variant="left">
            <div className="card-hover h-full rounded-lg border border-teal-500/20 bg-white/65 p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
                <Eye className="text-[#0797a5]" size={24} aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-[#07304d]">Vision</h2>
              <p className="mt-4 leading-8 text-[#365b70]">
                To become a trusted digital partner for businesses that want modern software, stronger search visibility, and operational systems that can scale.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn variant="right">
            <div className="card-hover h-full rounded-lg border border-teal-500/20 bg-white/65 p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-400/10">
                <Target className="text-[#c25231]" size={24} aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-[#07304d]">Mission</h2>
              <p className="mt-4 leading-8 text-[#365b70]">
                To design, develop, and maintain premium digital products that help businesses attract customers, automate workflows, and present themselves with confidence.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <SectionHeading
              eyebrow="Values"
              title="How we approach every project."
              description="We care about the strategic foundation, the visual quality, the technical structure, and the practical handoff."
            />
          </AnimateIn>
          <AnimateInStagger
            wrapperClassName="mt-10 grid gap-5 md:grid-cols-3"
            stepDelay={80}
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card-hover rounded-lg border border-teal-500/20 bg-white/65 p-7">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${value.bg}`}>
                    <Icon size={22} className={value.color} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-[#07304d]">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#587487]">{value.text}</p>
                </div>
              );
            })}
          </AnimateInStagger>
        </div>
      </section>

      {/* Approach */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimateIn variant="left">
            <SectionHeading
              eyebrow="Our approach"
              title="Strategy, design, code, content, and growth signals work together."
              description="A premium website is not just visual polish. It needs information architecture, performance, SEO, schema, content operations, and secure lead handling."
            />
          </AnimateIn>
          <AnimateIn variant="right">
            <div className="grid gap-4">
              {[
                "We identify the business goal before choosing the design pattern or feature set.",
                "We structure services, blogs, FAQs, and internal links for visitors and search systems.",
                "We build reusable components and clean data models so the site can grow.",
                "We document deployment, SSL/TLS readiness, Search Console setup, image SEO, and VPS migration.",
              ].map((item) => (
                <p key={item} className="card-hover flex gap-3 rounded-lg border border-teal-500/20 bg-white/65 p-4 text-sm leading-7 text-[#365b70]">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#6968b8]" size={17} aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
