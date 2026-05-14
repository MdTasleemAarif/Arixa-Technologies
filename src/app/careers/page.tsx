import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, MapPin, Clock } from "lucide-react";
import { AnimateIn, AnimateInStagger } from "@/components/animate-in";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { listCareers } from "@/lib/supabase/data";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Explore career opportunities at Arixa Technologies for frontend development, SEO content strategy, UI/UX design, and digital product work.",
  path: "/careers",
});

export default async function CareersPage() {
  const careers = await listCareers();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
        ])}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "Careers", href: "/careers" }]} />
          <div className="mt-10">
            <AnimateIn>
              <SectionHeading
                eyebrow="Careers"
                title="Build premium digital products with Arixa."
                description="These starter job listings are CMS-ready and can be managed from the admin panel. We look for problem-solvers who care about quality."
              />
            </AnimateIn>
          </div>
          <AnimateInStagger
            wrapperClassName="mt-10 grid gap-4"
            stepDelay={70}
          >
            {careers.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="card-hover group grid gap-5 rounded-lg border border-white/[0.08] bg-white/[0.03] p-5 md:grid-cols-[auto_1fr_auto] md:items-center"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10">
                  <BriefcaseBusiness size={22} className="text-violet-300" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-lg font-semibold text-white transition-colors group-hover:text-fuchsia-100">{job.title}</span>
                  <span className="mt-2 block text-sm leading-7 text-slate-400">{job.summary}</span>
                  <span className="mt-2 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <MapPin size={12} aria-hidden="true" /> {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <Clock size={12} aria-hidden="true" /> {job.type}
                    </span>
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 opacity-60 transition-all group-hover:gap-3 group-hover:opacity-100">
                  View role <ArrowRight size={16} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </AnimateInStagger>
        </div>
      </section>
      <CtaSection
        title="Want to collaborate with Arixa?"
        description="Use the role pages to apply, or contact us if you are a freelancer, partner, or specialist with relevant work."
      />
    </>
  );
}
