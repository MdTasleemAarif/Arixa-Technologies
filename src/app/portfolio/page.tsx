import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn, AnimateInStagger } from "@/components/animate-in";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { ImageSlot } from "@/components/image-slot";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { listPortfolioItems } from "@/lib/supabase/data";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Portfolio",
  description:
    "Explore Arixa Technologies portfolio concepts for websites, web apps, e-commerce, mobile apps, SEO systems, and custom software.",
  path: "/portfolio",
});

export default async function PortfolioPage() {
  const items = await listPortfolioItems();
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ])}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }]} />
          <div className="mt-10">
            <AnimateIn>
              <SectionHeading
                eyebrow="Portfolio"
                title="Premium project showcases with business context."
                description="Use these starter case studies as placeholders, then replace them from the custom CMS as real client work becomes available."
              />
            </AnimateIn>
          </div>

          {/* Category filter pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="cursor-pointer rounded-full border border-teal-500/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-[#365b70] transition hover:border-teal-300/40 hover:bg-teal-500/10 hover:text-[#087987]"
              >
                {category}
              </span>
            ))}
          </div>

          <AnimateInStagger
            wrapperClassName="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            stepDelay={70}
          >
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="card-hover group flex flex-col rounded-lg border border-teal-500/20 bg-white/65 p-4"
              >
                <ImageSlot src={item.image} alt={item.imageAlt} width={1200} height={900} className="shadow-none" />
                <div className="mt-5 flex-1">
                  <span className="inline-flex rounded-full border border-indigo-300/20 bg-indigo-400/12 px-2.5 py-0.5 text-xs font-semibold text-[#5756a4]">
                    {item.category}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold text-[#07304d] transition-colors group-hover:text-[#c25231]">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#587487]">{item.summary}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#087987] transition-all group-hover:gap-2.5">
                  View case study <ArrowRight size={12} aria-hidden="true" />
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
