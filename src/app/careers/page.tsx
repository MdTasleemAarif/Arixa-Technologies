import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, MapPin, Clock } from "lucide-react";
import { AnimateIn, AnimateInStagger } from "@/components/animate-in";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { listCareers } from "@/lib/supabase/data";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createPageMetadata({
    title: "Careers",
    description:
      "Explore career opportunities at Arixa Technologies for frontend development, SEO content strategy, UI/UX design, and digital product work for remote and global projects.",
    path: "/careers",
  });
}

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
                className="card-hover group grid gap-5 rounded-lg border border-teal-500/20 bg-white/65 p-5 md:grid-cols-[auto_1fr_auto] md:items-center"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
                  <BriefcaseBusiness size={22} className="text-[#0797a5]" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-lg font-semibold text-[#07304d] transition-colors group-hover:text-[#c25231]">{job.title}</span>
                  <span className="mt-2 block text-sm leading-7 text-[#587487]">{job.summary}</span>
                  <span className="mt-2 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1 text-xs text-[#6d8797]">
                      <MapPin size={12} aria-hidden="true" /> {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#6d8797]">
                      <Clock size={12} aria-hidden="true" /> {job.type}
                    </span>
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#087987] transition-all group-hover:gap-3">
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
