export type SiteAsset = {
  key: string;
  src: string;
  folder: string;
  purpose: string;
  alt: string;
  width: number;
  height: number;
  prompt?: string;
};

export const logoAsset = {
  src: "/images/common/arixa-logo.png?v=2",
  file: "/public/images/common/arixa-logo.png",
  alt: "Arixa Technologies logo",
  width: 1448,
  height: 1086,
};

export const siteAssets = {
  homeHero: {
    key: "homeHero",
    src: "/images/home/arixa-technologies-hero-digital-innovation.png",
    folder: "/public/images/home/",
    purpose: "Home page hero visual",
    alt: "Premium digital innovation workspace representing Arixa Technologies web, app, and software solutions",
    width: 1400,
    height: 1100,
  },
  homeServices: {
    key: "homeServices",
    src: "/images/home/arixa-services-digital-solutions-showcase.png",
    folder: "/public/images/home/",
    purpose: "Home services and innovation section",
    alt: "Modern digital solutions showcase for website development, app development, SEO, and custom software services",
    width: 1200,
    height: 900,
  },
  about: {
    key: "about",
    src: "/images/about/about-arixa-technologies-creative-tech-workspace.png",
    folder: "/public/images/about/",
    purpose: "About page story image",
    alt: "Creative technology workspace representing the mission and vision of Arixa Technologies",
    width: 1200,
    height: 900,
  },
  serviceWebsite: {
    key: "serviceWebsite",
    src: "/images/services/website-development-premium-responsive-design.png",
    folder: "/public/images/services/",
    purpose: "Website development service page",
    alt: "Responsive website development interface for modern business websites",
    width: 1200,
    height: 900,
  },
  serviceMobile: {
    key: "serviceMobile",
    src: "/images/services/mobile-app-development-modern-ui-showcase.png",
    folder: "/public/images/services/",
    purpose: "Mobile app development service page",
    alt: "Modern mobile app development showcase with premium smartphone user interface designs",
    width: 1200,
    height: 900,
  },
  serviceSeo: {
    key: "serviceSeo",
    src: "/images/services/seo-services-growth-analytics-visual.png",
    folder: "/public/images/services/",
    purpose: "SEO services page",
    alt: "SEO growth analytics dashboard representing on-page SEO, technical SEO, and performance optimization",
    width: 1200,
    height: 900,
  },
  serviceEcommerce: {
    key: "serviceEcommerce",
    src: "/images/services/ecommerce-development-online-store-experience.png",
    folder: "/public/images/services/",
    purpose: "E-commerce development service page",
    alt: "Premium e-commerce development showcase with online store user experience and checkout flow",
    width: 1200,
    height: 900,
  },
  serviceSoftware: {
    key: "serviceSoftware",
    src: "/images/services/custom-software-automation-business-workflow.png",
    folder: "/public/images/services/",
    purpose: "Custom software and automation service page",
    alt: "Custom software and business automation workflow dashboard for enterprise solutions",
    width: 1200,
    height: 900,
  },
  portfolioCover: {
    key: "portfolioCover",
    src: "/images/portfolio/arixa-portfolio-project-showcase.png",
    folder: "/public/images/portfolio/",
    purpose: "Portfolio page cover and project placeholders",
    alt: "Portfolio showcase of premium digital projects by Arixa Technologies",
    width: 1200,
    height: 900,
  },
  contact: {
    key: "contact",
    src: "/images/contact/contact-arixa-technologies-client-support.png",
    folder: "/public/images/contact/",
    purpose: "Contact and CTA sections",
    alt: "Professional digital consultation and support visual for contacting Arixa Technologies",
    width: 1200,
    height: 900,
  },
  og: {
    key: "og",
    src: "/images/og/arixa-technologies-og-image.png",
    folder: "/public/images/og/",
    purpose: "Default Open Graph social sharing image",
    alt: "Arixa Technologies premium digital solutions brand image for social sharing",
    width: 1200,
    height: 630,
  },
} satisfies Record<string, SiteAsset>;

export const blogImage = (slug: string, title: string): SiteAsset => ({
  key: `blog-${slug}`,
  src: `/images/blog/${slug}.png`,
  folder: "/public/images/blog/",
  purpose: `Featured image for ${title}`,
  alt: `Featured image for ${title} on Arixa Technologies`,
  width: 1200,
  height: 675,
});

export const assetList = Object.values(siteAssets);
