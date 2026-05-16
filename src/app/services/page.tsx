import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
            wrapperClassName="mt-10 grid gap-5 md:grid-cols-2"
            stepDelay={70}
          >
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card-hover group grid gap-5 rounded-lg border border-teal-500/20 bg-white/65 p-5 lg:grid-cols-[200px_1fr]"
              >
                <ImageSlot
                  src={service.image}
                  alt={service.imageAlt}
                  width={1200}
                  height={900}
                  className="shadow-none"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c25231]">{service.eyebrow}</p>
                  <h2 className="mt-2 text-xl font-semibold text-[#07304d] transition-colors group-hover:text-[#087987]">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#587487]">{service.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#087987] transition-all group-hover:gap-2.5">
                    View service <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </AnimateInStagger>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
