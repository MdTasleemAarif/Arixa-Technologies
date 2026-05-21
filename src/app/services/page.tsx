import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimateIn, AnimateInStagger } from "@/components/animate-in";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { ImageSlot } from "@/components/image-slot";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { listServices } from "@/lib/supabase/data";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Explore Arixa Technologies services including website development, web apps, mobile apps, SEO, e-commerce, custom software, design, and AI automation.",
  path: "/services",
});

export default async function ServicesPage() {
  const services = await listServices();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
          <div className="mt-10">
            <AnimateIn>
              <SectionHeading
                eyebrow="Services"
                title="Premium digital services for visibility, conversion, and operations."
                description="Choose a focused service or combine website, app, SEO, custom software, and automation work into a larger business platform."
              />
            </AnimateIn>
          </div>
          <AnimateInStagger
            wrapperClassName="mt-10 grid gap-5"
            stepDelay={70}
          >
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="premium-card card-hover group grid gap-5 rounded-lg p-5 lg:grid-cols-[280px_1fr_auto] lg:items-center"
              >
                <ImageSlot
                  src={service.image}
                  alt={service.imageAlt}
                  width={1200}
                  height={900}
                  className="shadow-none"
                />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#071525] text-xs font-bold text-[#67eee0] shadow-[0_12px_30px_rgba(7,21,37,0.2)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b4af5]">
                      {service.eyebrow}
                    </p>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-bold text-[#071525] transition-colors group-hover:text-[#075c70]">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#49657a]">
                    {service.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-start gap-2 rounded-full border border-[#071525]/10 bg-white/76 px-3 py-1.5 text-xs font-semibold text-[#28475d]"
                      >
                        <CheckCircle2 size={13} className="mt-px shrink-0 text-[#0b8ea6]" aria-hidden="true" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="premium-link justify-self-start text-sm font-bold transition-all group-hover:gap-3 lg:justify-self-end">
                  View service <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </AnimateInStagger>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
