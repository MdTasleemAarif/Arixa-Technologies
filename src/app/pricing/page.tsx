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
                      : "border-white/[0.08] bg-white/[0.03] hover:border-violet-300/30 hover:bg-violet-500/5"
                  }`}
                >
                  {isPopular && (
                    <span className="mb-3 inline-flex self-start items-center gap-1 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 px-3 py-0.5 text-xs font-bold text-[#15091f]">
                      <Star size={10} aria-hidden="true" /> Most Popular
                    </span>
                  )}
                  <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
                  <p className="mt-2 text-xl font-bold gradient-text">{plan.price}</p>
                  <p className="mt-4 min-h-20 text-sm leading-7 text-slate-400">{plan.description}</p>
                  <ul className="mt-6 grid flex-1 gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm leading-6 text-slate-300">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-purple-300" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex h-11 items-center justify-center rounded-lg text-sm font-semibold transition ${
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
      <CtaSection
        title="Need an accurate quote?"
        description="Share your goals, required pages, app features, integrations, CMS needs, and timeline. We will recommend the right scope."
      />
    </>
  );
}
