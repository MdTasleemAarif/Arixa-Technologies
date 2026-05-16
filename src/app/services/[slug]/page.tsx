import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Faq } from "@/components/faq";
import { ImageSlot } from "@/components/image-slot";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import { services as staticServices } from "@/data/site-data";
import { getService, listServices } from "@/lib/supabase/data";
import { absoluteUrl } from "@/lib/utils";
import { breadcrumbSchema, createMetadata, faqSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return staticServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return createMetadata({
      title: "Service",
      description: siteConfig.description,
      path: `/services/${slug}`,
    });
  }

  return createMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);
  const allServices = await listServices();

  if (!service) {
    notFound();
  }

  const related = allServices.filter((item) => item.slug !== service.slug).slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    serviceType: service.title,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
  };

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd,
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: service.title, url: `/services/${service.slug}` },
          ]),
          faqSchema(service.faqs),
        ]}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
          />
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087987]">
                {service.eyebrow}
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-normal text-[#07304d] sm:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#365b70]">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-glow inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold text-[#07304d] transition hover:scale-[1.01]"
                >
                  Request Service Quote <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-teal-500/30 px-5 text-sm font-semibold text-[#07304d] transition hover:bg-white/75"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <ImageSlot
              src={service.image}
              alt={service.imageAlt}
              width={1200}
              height={900}
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeading
              eyebrow="Benefits"
              title="What this service helps you improve."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {service.benefits.map((benefit) => (
              <p key={benefit} className="flex gap-3 rounded-md border border-teal-500/20 bg-white/70 p-4 text-sm leading-7 text-[#365b70]">
                <CheckCircle2 className="mt-1 shrink-0 text-[#087987]" size={18} aria-hidden="true" />
                {benefit}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Features"
            title="A practical delivery scope."
            description="The exact scope is finalized after discovery, but these are the common foundations we plan for this service."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {service.features.map((feature) => (
              <div key={feature} className="rounded-md border border-teal-500/20 bg-white/70 p-5">
                <h2 className="text-lg font-semibold text-[#07304d]">{feature}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="How we deliver the work."
            description="A clear workflow keeps the project moving and makes decisions easier."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step} className="rounded-md border border-teal-500/20 bg-white/70 p-5">
                <p className="text-sm font-semibold text-[#c25231]">0{index + 1}</p>
                <h2 className="mt-3 text-lg font-semibold text-[#07304d]">{step}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title={`${service.title} FAQs`} />
          <Faq items={service.faqs} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Related services"
            title="Build a stronger digital system by combining services."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="rounded-md border border-teal-500/20 bg-white/70 p-5 transition hover:border-teal-300/30 hover:bg-white/85">
                <h2 className="text-xl font-semibold text-[#07304d]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#587487]">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title={`Need ${service.title.toLowerCase()} that feels premium and works hard?`} />
    </>
  );
}
