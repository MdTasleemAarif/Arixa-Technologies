import { absoluteUrl } from "@/lib/utils";

export const siteConfig = {
  name: "Arixa Technologies",
  shortName: "Arixa",
  description:
    "Arixa Technologies builds premium websites, apps, SEO systems, e-commerce platforms, custom software, and AI automation for growth-focused businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@arixatechnologies.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 90000 00000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919000000000",
  address: "Arixa Technologies, India",
  hours: "Monday to Saturday, 10:00 AM - 7:00 PM IST",
  social: {
    linkedin: "https://www.linkedin.com/company/arixa-technologies",
    instagram: "https://www.instagram.com/arixatechnologies",
    x: "https://x.com/arixatech",
    facebook: "https://www.facebook.com/arixatechnologies",
  },
  keywords: [
    "software company",
    "website development",
    "web app development",
    "mobile app development",
    "SEO services",
    "custom software development",
    "AI automation",
    "e-commerce development",
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

export const defaultOpenGraph = {
  title: `${siteConfig.name} - Premium Software & Digital Solutions`,
  description: siteConfig.description,
  url: siteConfig.url,
  siteName: siteConfig.name,
  images: [
    {
      url: absoluteUrl("/images/og/arixa-technologies-og-image.png"),
      width: 1200,
      height: 630,
      alt: "Arixa Technologies premium digital solutions brand image for social sharing",
    },
  ],
  locale: "en_US",
  type: "website",
};
