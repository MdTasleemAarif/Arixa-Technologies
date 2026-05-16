import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CareerApplicationForm } from "@/components/career-application-form";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { careers as staticCareers } from "@/data/site-data";
import { getCareer } from "@/lib/supabase/data";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return staticCareers.map((career) => ({ slug: career.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const career = await getCareer(slug);

  return createMetadata({
    title: career?.title || "Career Role",
    description: career?.summary || "Career opportunity at Arixa Technologies.",
    path: `/careers/${slug}`,
  });
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const career = await getCareer(slug);

  if (!career) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
          { name: career.title, url: `/careers/${career.slug}` },
        ])}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Careers", href: "/careers" },
              { label: career.title, href: `/careers/${career.slug}` },
            ]}
          />
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087987]">
                {career.location} / {career.type}
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-normal text-[#07304d] sm:text-6xl">
                {career.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#365b70]">{career.summary}</p>
              <div className="mt-10">
                <SectionHeading eyebrow="Responsibilities" title="What you will work on" />
                <div className="mt-6 grid gap-4">
                  {career.responsibilities.map((item) => (
                    <p key={item} className="flex gap-3 rounded-md border border-teal-500/20 bg-white/70 p-4 text-sm leading-7 text-[#365b70]">
                      <CheckCircle2 className="mt-1 shrink-0 text-[#6968b8]" size={18} aria-hidden="true" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-[#07304d]">Apply for this role</h2>
              <CareerApplicationForm jobSlug={career.slug} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
