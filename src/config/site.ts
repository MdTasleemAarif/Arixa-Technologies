import { absoluteUrl } from "@/lib/utils";

export const siteConfig = {
  name: "Arixa Technologies",
  shortName: "Arixa",
  description:
    "Arixa Technologies builds premium websites, apps, SEO systems, e-commerce platforms, custom software, and AI automation for growth-focused businesses worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.arixatechnologies.in",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "arixatechnologies@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 74169 98886",
  phoneSecondary: process.env.NEXT_PUBLIC_CONTACT_PHONE_SECONDARY || "+91 74169 98887",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917416998886",
  address: "Arixa Technologies, Visakhapatnam, Andhra Pradesh, India",
  city: "Visakhapatnam",
  region: "Andhra Pradesh",
  country: "India",
  postalCode: "",
  serviceArea: [
    "Global",
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "United Arab Emirates",
    "Remote and international clients",
  ],
  geo: {
    latitude: 17.6868,
    longitude: 83.2185,
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=Visakhapatnam%2C%20Andhra%20Pradesh%2C%20India&output=embed",
  hours: "Monday to Saturday, 10:00 AM - 7:00 PM IST",
  social: {
    linkedin: "",
    instagram: "https://www.instagram.com/arixa_technologies",
    x: "",
    facebook: "https://www.facebook.com/share/1DxQFrmWNk/",
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
    "global software company",
    "international website development",
    "remote software development team",
    "software development company India",
    "global SEO services",
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
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
