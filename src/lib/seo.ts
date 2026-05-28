import type { Metadata } from "next";
import { defaultOpenGraph, siteConfig } from "@/config/site";
import { getSeoOverride, type SeoOverride } from "@/lib/supabase/data";
import { absoluteUrl } from "@/lib/utils";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/images/og/arixa-technologies-og-image.png",
  imageAlt,
  canonicalUrl,
  ogTitle,
  ogDescription,
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
}: SeoInput): Metadata {
  const url = absoluteUrl(canonicalUrl || path);
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;
  const graphTitle = ogTitle || fullTitle;
  const graphDescription = ogDescription || description;
  const graphImageAlt = imageAlt || title;

  return {
    title: fullTitle,
    description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      ...defaultOpenGraph,
      title: graphTitle,
      description: graphDescription,
      url,
      type,
      images: [
        {
          url: absoluteUrl(image),
          width: type === "article" ? 1200 : 1200,
          height: type === "article" ? 675 : 630,
          alt: graphImageAlt,
        },
      ],
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: graphTitle,
      description: graphDescription,
      images: [absoluteUrl(image)],
    },
  };
}

function applySeoOverride(input: SeoInput, override: SeoOverride | null): SeoInput {
  if (!override) {
    return input;
  }

  return {
    ...input,
    title: override.metaTitle || input.title,
    description: override.metaDescription || input.description,
    canonicalUrl: override.canonicalUrl || input.canonicalUrl,
    ogTitle: override.ogTitle || input.ogTitle,
    ogDescription: override.ogDescription || input.ogDescription,
    image: override.ogImage || input.image,
    noIndex: override.noindex || input.noIndex,
  };
}

export async function createPageMetadata(input: SeoInput): Promise<Metadata> {
  const override = await getSeoOverride(input.path || "/");
  return createMetadata(applySeoOverride(input, override));
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country,
    },
    areaServed: siteConfig.serviceArea,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    logo: absoluteUrl("/images/og/arixa-technologies-og-image.png"),
    knowsAbout: siteConfig.keywords,
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl("/images/og/arixa-technologies-og-image.png"),
    logo: absoluteUrl("/images/og/arixa-technologies-og-image.png"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: siteConfig.serviceArea.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$",
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
