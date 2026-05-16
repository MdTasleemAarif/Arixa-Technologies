import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { AnimateIn, AnimateInStagger } from "@/components/animate-in";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { pricingPlans } from "@/data/site-data";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "View starting pricing packages for Arixa Technologies website, CMS, SEO, e-commerce, custom software, and digital solution projects.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Pricing", url: "/pricing" },
        ])}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />
          <div className="mt-10">
            <AnimateIn>
              <SectionHeading
                eyebrow="Pricing"
                title="Starting points for premium digital projects."
                description="Pricing depends on scope, content, integrations, CMS needs, and project complexity. Use these as clear planning ranges."
                align="center"
              />
            </AnimateIn>
          </div>
          <AnimateInStagger
            wrapperClassName="mt-10 grid gap-5 lg:grid-cols-4"
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
                      : "border-teal-500/20 bg-white/65 hover:border-teal-300/30 hover:bg-teal-500/5"
                  }`}
                >
                  {isPopular && (
                    <span className="mb-3 inline-flex self-start items-center gap-1 rounded-full bg-gradient-to-r from-teal-500 via-orange-400 to-cyan-400 px-3 py-0.5 text-xs font-bold text-[#07304d]">
                      <Star size={10} aria-hidden="true" /> Most Popular
                    </span>
                  )}
                  <h2 className="text-2xl font-semibold text-[#07304d]">{plan.name}</h2>
                  <p className="mt-2 text-xl font-bold gradient-text">{plan.price}</p>
                  <p className="mt-4 min-h-20 text-sm leading-7 text-[#587487]">{plan.description}</p>
                  <ul className="mt-6 grid flex-1 gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm leading-6 text-[#365b70]">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#6968b8]" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex h-11 items-center justify-center rounded-lg text-sm font-semibold transition ${
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
      <CtaSection
        title="Need an accurate quote?"
        description="Share your goals, required pages, app features, integrations, CMS needs, and timeline. We will recommend the right scope."
      />
    </>
  );
}
