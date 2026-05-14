import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { ImageSlot } from "@/components/image-slot";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { portfolioItems as staticPortfolioItems } from "@/data/site-data";
import { getPortfolioItem } from "@/lib/supabase/data";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return staticPortfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = await getPortfolioItem(slug);

  return createMetadata({
    title: item?.title || "Portfolio Project",
    description: item?.summary || "Arixa Technologies portfolio project.",
    path: `/portfolio/${slug}`,
    image: item?.image,
  });
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = await getPortfolioItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
          { name: item.title, url: `/portfolio/${item.slug}` },
        ])}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Portfolio", href: "/portfolio" },
              { label: item.title, href: `/portfolio/${item.slug}` },
            ]}
          />
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {item.category}
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-normal text-white sm:text-6xl">
                {item.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{item.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span key={tech} className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ImageSlot src={item.image} alt={item.imageAlt} width={1200} height={900} priority />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Problem", item.problem],
            ["Solution", item.solution],
            ["Result", item.result],
          ].map(([title, text]) => (
            <div key={title} className="rounded-md border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Next step"
            title="Want a project structure like this for your business?"
            description="Arixa can plan the offer, content structure, UX, CMS, data model, SEO, and deployment path around your goals."
          />
          <Link href="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 px-5 text-sm font-semibold text-[#15091f] transition hover:scale-[1.01]">
            Discuss Your Project <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
