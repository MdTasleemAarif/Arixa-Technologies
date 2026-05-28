import { blogImage, siteAssets } from "@/config/site-assets";

export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  benefits: string[];
  features: string[];
  process: string[];
  faqs: FaqItem[];
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  featuredImage: string;
  featuredImageAlt: string;
  content: string;
  faqs: FaqItem[];
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    eyebrow: "Premium business websites",
    summary:
      "Conversion-focused websites built with clean UX, fast performance, strong SEO foundations, and scalable Next.js architecture.",
    description:
      "Arixa Technologies designs and develops premium websites for businesses that need credibility, speed, search visibility, and measurable lead generation.",
    image: siteAssets.serviceWebsite.src,
    imageAlt: siteAssets.serviceWebsite.alt,
    keywords: ["business website development", "Next.js website", "SEO website"],
    benefits: [
      "Premium first impression for prospects",
      "SEO-ready pages and clean technical structure",
      "Mobile-first layouts with fast Core Web Vitals",
      "Lead generation paths across every major section",
    ],
    features: [
      "Custom Next.js website architecture",
      "Responsive UI design",
      "On-page SEO and schema setup",
      "CMS-ready page sections",
      "Analytics and conversion event placeholders",
    ],
    process: [
      "Discovery and business positioning",
      "Sitemap, wireframes, and content direction",
      "UI design and production development",
      "SEO, testing, launch, and support",
    ],
    faqs: [
      {
        question: "How long does a business website take?",
        answer:
          "A focused business website usually takes two to six weeks depending on page count, content readiness, integrations, and approval speed.",
      },
      {
        question: "Will the website be SEO-ready?",
        answer:
          "Yes. We structure metadata, headings, schema, internal links, image alt text, sitemap, robots, and performance basics from the start.",
      },
    ],
  },
  {
    slug: "web-app-development",
    title: "Web App Development",
    eyebrow: "Scalable product engineering",
    summary:
      "Secure SaaS platforms, dashboards, portals, and internal tools with reliable data models and clean user workflows.",
    description:
      "We build web applications that support real operations, including authentication, database design, admin workflows, reporting, and integrations.",
    image: siteAssets.serviceSoftware.src,
    imageAlt: siteAssets.serviceSoftware.alt,
    keywords: ["web app development", "SaaS development", "admin dashboard"],
    benefits: [
      "Digitize complex workflows",
      "Give teams secure access to business data",
      "Create scalable foundations for product growth",
      "Reduce repetitive manual work",
    ],
    features: [
      "Role-based dashboards",
      "PostgreSQL data modeling",
      "Supabase or self-hostable backend options",
      "API integrations",
      "Audit-friendly admin actions",
    ],
    process: [
      "Workflow mapping",
      "Data model and permission planning",
      "Iterative app development",
      "QA, deployment, and monitoring setup",
    ],
    faqs: [
      {
        question: "Can you build an admin panel?",
        answer:
          "Yes. We build custom admin panels for content, operations, user management, reports, and business settings.",
      },
      {
        question: "Can the app be moved to a VPS later?",
        answer:
          "Yes. We keep the app portable with standard Next.js, PostgreSQL, environment variables, and deployment documentation.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    eyebrow: "Native-feeling mobile experiences",
    summary:
      "Business mobile apps with polished UX, secure backend integration, push-ready architecture, and scalable product flows.",
    description:
      "Arixa Technologies creates mobile app experiences for customer engagement, bookings, commerce, field teams, and business automation.",
    image: siteAssets.serviceMobile.src,
    imageAlt: siteAssets.serviceMobile.alt,
    keywords: ["mobile app development", "business app", "app UI"],
    benefits: [
      "Reach customers on their primary device",
      "Improve retention with direct product access",
      "Support bookings, orders, accounts, and notifications",
      "Connect the app to your web and admin systems",
    ],
    features: [
      "UX flows and app interface design",
      "API and database integration",
      "Authentication and account flows",
      "Admin-managed app content",
      "Store launch guidance",
    ],
    process: [
      "Product scope and user journey planning",
      "Prototype and interface design",
      "Backend and app implementation",
      "Testing, release preparation, and iterations",
    ],
    faqs: [
      {
        question: "Do you design the app UI too?",
        answer:
          "Yes. We design the mobile user experience before development so screens, flows, and states are clear.",
      },
      {
        question: "Can the app connect to my website database?",
        answer:
          "Yes. We can connect mobile apps to shared APIs, Supabase, PostgreSQL, or a custom backend.",
      },
    ],
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    eyebrow: "Search visibility systems",
    summary:
      "On-page SEO, technical SEO, content architecture, image SEO, AEO, and GEO foundations for long-term organic growth.",
    description:
      "We help businesses improve crawlability, content clarity, keyword targeting, structured data, page speed, and conversion-focused search pages.",
    image: siteAssets.serviceSeo.src,
    imageAlt: siteAssets.serviceSeo.alt,
    keywords: ["SEO services", "technical SEO", "AEO", "GEO"],
    benefits: [
      "Improve organic discovery",
      "Make pages easier for search engines and AI systems to understand",
      "Fix technical crawl and metadata issues",
      "Turn content into a durable lead channel",
    ],
    features: [
      "Technical SEO audit",
      "On-page content optimization",
      "Schema markup",
      "Image SEO guidance",
      "Search Console and analytics setup guidance",
    ],
    process: [
      "Audit and opportunity mapping",
      "Keyword and entity planning",
      "Technical fixes and content implementation",
      "Measurement and content roadmap",
    ],
    faqs: [
      {
        question: "Do you handle technical SEO?",
        answer:
          "Yes. We cover metadata, sitemap, robots, canonical URLs, structured data, speed, indexability, and page architecture.",
      },
      {
        question: "What are AEO and GEO?",
        answer:
          "AEO helps answer engines extract direct answers. GEO helps generative AI systems understand the brand, services, and expertise clearly.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    eyebrow: "Stores built for revenue",
    summary:
      "Premium online stores with product browsing, checkout flows, performance, SEO, inventory-ready structure, and admin control.",
    description:
      "We build digital commerce experiences that make products easier to discover, evaluate, purchase, and manage.",
    image: siteAssets.serviceEcommerce.src,
    imageAlt: siteAssets.serviceEcommerce.alt,
    keywords: ["e-commerce development", "online store", "checkout UX"],
    benefits: [
      "Professional product presentation",
      "Optimized shopping and checkout journey",
      "Search-friendly product pages",
      "Admin-ready catalog and content control",
    ],
    features: [
      "Product catalog architecture",
      "Cart and checkout planning",
      "Payment gateway integration guidance",
      "Order management workflows",
      "Product SEO structure",
    ],
    process: [
      "Catalog and buyer journey planning",
      "Storefront UX design",
      "Commerce implementation",
      "Payment, testing, and launch support",
    ],
    faqs: [
      {
        question: "Can you build a custom e-commerce store?",
        answer:
          "Yes. We can build custom storefronts and connect payment, product, order, and admin workflows based on your needs.",
      },
      {
        question: "Will products be SEO optimized?",
        answer:
          "Yes. We structure product metadata, slugs, categories, image alt text, and internal linking for better discovery.",
      },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    eyebrow: "Business systems that fit",
    summary:
      "Tailored software for billing, CRM, operations, reporting, admin panels, and business-specific workflows.",
    description:
      "Arixa Technologies builds custom software for businesses that need tools aligned with their actual process rather than generic templates.",
    image: siteAssets.serviceSoftware.src,
    imageAlt: siteAssets.serviceSoftware.alt,
    keywords: ["custom software", "billing software", "CRM development"],
    benefits: [
      "Replace spreadsheets and manual tracking",
      "Centralize key business operations",
      "Create role-based access for teams",
      "Improve reporting and decision speed",
    ],
    features: [
      "Billing and e-billing systems",
      "CRM and admin panels",
      "Reports and dashboards",
      "Workflow automation",
      "Data migration support",
    ],
    process: [
      "Operations discovery",
      "Feature and data model planning",
      "Module-based implementation",
      "Training, deployment, and support",
    ],
    faqs: [
      {
        question: "Can software match our business process?",
        answer:
          "Yes. We map your workflow first, then build modules that match how your team actually works.",
      },
      {
        question: "Can you build billing software?",
        answer:
          "Yes. We can build billing, e-billing, invoice, customer, payment tracking, and reporting systems.",
      },
    ],
  },
  {
    slug: "branding-design",
    title: "Branding / Design",
    eyebrow: "Visual systems with purpose",
    summary:
      "Brand identity, UI/UX design, graphics, social creatives, and interface systems that make your business look credible.",
    description:
      "We create polished visual systems for companies that need a more premium, consistent, and conversion-ready brand presence.",
    image: siteAssets.homeServices.src,
    imageAlt: siteAssets.homeServices.alt,
    keywords: ["branding design", "UI UX design", "graphic design"],
    benefits: [
      "Improve trust with a consistent visual identity",
      "Make interfaces easier to understand",
      "Create design assets for web, social, and campaigns",
      "Align brand style with business positioning",
    ],
    features: [
      "Brand direction",
      "UI/UX wireframes and high-fidelity screens",
      "Landing page design",
      "Social media creatives",
      "Design system components",
    ],
    process: [
      "Brand and audience discovery",
      "Moodboard and interface direction",
      "Design production",
      "Handoff and iteration",
    ],
    faqs: [
      {
        question: "Do you design before development?",
        answer:
          "For most premium projects, yes. Design direction helps reduce rework and improves the quality of the final product.",
      },
      {
        question: "Can you create social media graphics?",
        answer:
          "Yes. We can create brand-consistent graphics for campaigns, announcements, and recurring posts.",
      },
    ],
  },
  {
    slug: "ai-automation-digital-solutions",
    title: "AI Automation / Digital Solutions",
    eyebrow: "Automate repetitive work",
    summary:
      "AI-assisted workflows, lead automation, support automation, reporting systems, and digital operations that save time.",
    description:
      "We plan and build automation systems that connect business tools, reduce manual tasks, and improve response speed.",
    image: siteAssets.serviceSoftware.src,
    imageAlt: siteAssets.serviceSoftware.alt,
    keywords: ["AI automation", "business automation", "digital solutions"],
    benefits: [
      "Reduce repetitive manual work",
      "Improve speed of lead handling and support",
      "Create structured reporting flows",
      "Connect existing tools through practical workflows",
    ],
    features: [
      "Lead routing automation",
      "CRM and form automation",
      "AI-assisted support flows",
      "Workflow dashboards",
      "Integration planning",
    ],
    process: [
      "Automation opportunity audit",
      "Workflow and data mapping",
      "Integration and testing",
      "Monitoring and improvement",
    ],
    faqs: [
      {
        question: "Where should a business start with automation?",
        answer:
          "Start with repetitive tasks that happen often, have clear rules, and directly affect lead response, reporting, or customer experience.",
      },
      {
        question: "Can automation connect to our CRM?",
        answer:
          "Yes. We can connect forms, CRM records, notifications, dashboards, and follow-up workflows where APIs are available.",
      },
    ],
  },
];

export const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Founder, Growth Retail Brand",
    quote:
      "Arixa helped us turn a basic idea into a professional digital presence with a clear service structure and lead path.",
  },
  {
    name: "Nisha Verma",
    role: "Operations Head, Service Company",
    quote:
      "The team understood our workflow quickly and created an admin-first plan that made the software feel practical.",
  },
  {
    name: "Arjun Mehta",
    role: "Director, Local Business Group",
    quote:
      "The website direction felt premium, fast, and built for actual enquiries instead of just looking good.",
  },
];

export const siteFaqs: FaqItem[] = [
  {
    question: "What does Arixa Technologies do?",
    answer:
      "Arixa Technologies builds websites, web apps, mobile apps, SEO systems, e-commerce platforms, custom software, branding assets, and AI automation for businesses.",
  },
  {
    question: "Can you build a custom CMS?",
    answer:
      "Yes. This website includes a custom CMS/admin panel pattern for blogs, services, leads, careers, media, SEO settings, and site settings.",
  },
  {
    question: "Do you support SEO from launch?",
    answer:
      "Yes. We include metadata, sitemap, robots, schema, semantic headings, internal links, image SEO guidance, and performance-minded implementation.",
  },
  {
    question: "Does Arixa Technologies work with global clients?",
    answer:
      "Yes. Arixa Technologies serves businesses worldwide through remote-first delivery for websites, apps, SEO, custom software, e-commerce, and automation projects.",
  },
  {
    question: "How does Arixa support global SEO visibility?",
    answer:
      "We structure service pages, metadata, schema, FAQs, technical SEO, image SEO, content clusters, and GEO-friendly summaries so search engines and AI systems understand the business clearly.",
  },
  {
    question: "Can the website move from Vercel to Hostinger VPS later?",
    answer:
      "Yes. The app uses standard Next.js, PostgreSQL, environment variables, and documented production commands so a future VPS migration is practical.",
  },
];

export const careers = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    location: "Remote / Hybrid",
    type: "Full-time",
    summary:
      "Build responsive Next.js interfaces, reusable components, and polished product experiences for client projects.",
    responsibilities: [
      "Develop production-ready UI with Next.js and Tailwind CSS",
      "Collaborate on design systems and frontend architecture",
      "Optimize accessibility, responsiveness, and performance",
    ],
  },
  {
    slug: "seo-content-strategist",
    title: "SEO Content Strategist",
    location: "Remote",
    type: "Contract",
    summary:
      "Plan service pages, blog briefs, SEO content updates, and answer-first content for software and business clients.",
    responsibilities: [
      "Research keywords and entities",
      "Prepare content outlines and internal linking plans",
      "Review metadata, headings, and FAQ opportunities",
    ],
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    location: "Remote / Hybrid",
    type: "Project-based",
    summary:
      "Design premium web, app, dashboard, and landing page interfaces with strong usability and conversion thinking.",
    responsibilities: [
      "Create wireframes and high-fidelity screens",
      "Design responsive states and component systems",
      "Work with developers on handoff and polish",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "why-every-business-needs-a-website",
    title: "Why Every Business Needs a Website in 2026",
    excerpt:
      "A website gives your business credibility, discoverability, and a direct lead channel that social platforms alone cannot replace.",
    category: "Website Development",
    tags: ["Websites", "Lead Generation", "Digital Presence"],
    author: "Arixa Editorial Team",
    publishedAt: "2026-01-08",
    updatedAt: "2026-04-20",
    featuredImage: blogImage(
      "why-every-business-needs-a-website",
      "Why Every Business Needs a Website in 2026",
    ).src,
    featuredImageAlt: blogImage(
      "why-every-business-needs-a-website",
      "Why Every Business Needs a Website in 2026",
    ).alt,
    content: `
## The direct answer

Every serious business needs a website because customers use search, referrals, ads, and social links to verify trust before they enquire or buy.

## Credibility and control

Your website is the digital property you control. It carries your offer, proof, process, contact details, service pages, and brand story without depending on a social platform feed.

## Search and lead generation

When your pages are structured around real services and customer questions, Google and AI search systems can understand what you offer. That gives your business a durable way to attract qualified leads.

## What a good website should include

A strong website needs fast loading, mobile-first design, clear CTAs, semantic headings, useful FAQs, image alt text, schema markup, and a CMS for future content.
`,
    faqs: [
      {
        question: "Can social media replace a website?",
        answer:
          "No. Social media helps visibility, but a website gives you ownership, SEO value, structured content, and a more reliable conversion path.",
      },
      {
        question: "What is the most important website page?",
        answer:
          "The homepage matters, but service pages often convert best because they match specific buyer intent.",
      },
    ],
  },
  {
    slug: "benefits-of-seo-for-local-businesses",
    title: "Benefits of SEO for Local Businesses",
    excerpt:
      "Local SEO helps nearby customers discover, compare, and contact your business at the moment they are searching.",
    category: "SEO",
    tags: ["Local SEO", "Search", "Small Business"],
    author: "Arixa Editorial Team",
    publishedAt: "2026-01-18",
    updatedAt: "2026-04-18",
    featuredImage: blogImage(
      "benefits-of-seo-for-local-businesses",
      "Benefits of SEO for Local Businesses",
    ).src,
    featuredImageAlt: blogImage(
      "benefits-of-seo-for-local-businesses",
      "Benefits of SEO for Local Businesses",
    ).alt,
    content: `
## The direct answer

SEO helps local businesses appear when nearby customers search for services, reviews, directions, and trusted providers.

## Why local intent matters

Local searches often have strong buying intent. A user searching for a service near them is usually closer to making a decision than a casual social media viewer.

## What local SEO needs

Local SEO needs optimized service pages, Google Business Profile signals, citations, reviews, fast pages, location clarity, schema, and helpful FAQs.

## How content supports local growth

Blogs and service pages can answer specific questions customers ask before contacting you, which improves trust and long-tail discovery.
`,
    faqs: [
      {
        question: "How long does local SEO take?",
        answer:
          "Many improvements can be implemented quickly, but rankings usually need consistent effort over several months.",
      },
      {
        question: "Does a website help Google Business Profile?",
        answer:
          "Yes. A strong website supports entity trust, service clarity, local relevance, and conversion after profile visits.",
      },
    ],
  },
  {
    slug: "website-vs-web-app",
    title: "Website vs Web App: What Should Your Business Build?",
    excerpt:
      "A website explains and sells. A web app lets users log in, manage data, complete workflows, and interact with business systems.",
    category: "Web App Development",
    tags: ["Web Apps", "Websites", "Product Strategy"],
    author: "Arixa Editorial Team",
    publishedAt: "2026-02-02",
    updatedAt: "2026-04-16",
    featuredImage: blogImage("website-vs-web-app", "Website vs Web App").src,
    featuredImageAlt: blogImage("website-vs-web-app", "Website vs Web App").alt,
    content: `
## The direct answer

Build a website when your main goal is visibility, trust, content, and leads. Build a web app when users need accounts, data, workflows, dashboards, or transactions.

## When a website is enough

A marketing website is right for service companies, landing pages, blogs, and businesses that need a premium public presence.

## When a web app is better

A web app is better for CRM tools, billing software, customer portals, dashboards, internal operations, and products with authenticated users.

## Hybrid projects

Many businesses need both: a public website for acquisition and a private web app or admin panel for operations.
`,
    faqs: [
      {
        question: "Can one Next.js project include both?",
        answer:
          "Yes. Next.js can power a public website, blog, admin panel, and authenticated app routes in one codebase.",
      },
      {
        question: "Is a web app more expensive than a website?",
        answer:
          "Usually yes, because it needs data modeling, authentication, workflows, edge cases, and deeper testing.",
      },
    ],
  },
  {
    slug: "ecommerce-growth-strategies",
    title: "E-Commerce Growth Strategies for Modern Stores",
    excerpt:
      "Growth comes from better product discovery, faster pages, clearer checkout, stronger content, and measured conversion improvements.",
    category: "E-Commerce",
    tags: ["E-Commerce", "Conversion", "Growth"],
    author: "Arixa Editorial Team",
    publishedAt: "2026-02-12",
    updatedAt: "2026-04-10",
    featuredImage: blogImage(
      "ecommerce-growth-strategies",
      "E-Commerce Growth Strategies",
    ).src,
    featuredImageAlt: blogImage(
      "ecommerce-growth-strategies",
      "E-Commerce Growth Strategies",
    ).alt,
    content: `
## The direct answer

Modern e-commerce growth depends on making products easier to find, compare, trust, and buy with minimal friction.

## Improve product discovery

Clear categories, search-friendly product pages, internal links, filters, and helpful images help customers find the right product faster.

## Strengthen checkout

Checkout should be fast, clear, mobile-friendly, and trustworthy. Hidden costs and confusing steps reduce completed purchases.

## Use content and SEO

Guides, FAQs, comparison content, and product education can capture search intent before the buyer is ready to purchase.
`,
    faqs: [
      {
        question: "What is the biggest e-commerce UX mistake?",
        answer:
          "A confusing checkout flow is one of the biggest mistakes because it loses buyers at the final step.",
      },
      {
        question: "Do product images affect SEO?",
        answer:
          "Yes. File names, alt text, compression, dimensions, and contextual placement all support image SEO and performance.",
      },
    ],
  },
  {
    slug: "how-custom-software-improves-business-operations",
    title: "How Custom Software Improves Business Operations",
    excerpt:
      "Custom software can centralize records, automate repetitive work, reduce errors, and give teams better visibility.",
    category: "Custom Software",
    tags: ["Operations", "CRM", "Automation"],
    author: "Arixa Editorial Team",
    publishedAt: "2026-02-24",
    updatedAt: "2026-04-12",
    featuredImage: blogImage(
      "how-custom-software-improves-business-operations",
      "How Custom Software Improves Business Operations",
    ).src,
    featuredImageAlt: blogImage(
      "how-custom-software-improves-business-operations",
      "How Custom Software Improves Business Operations",
    ).alt,
    content: `
## The direct answer

Custom software improves operations by turning repeated manual processes into structured workflows with reliable data and clearer ownership.

## Centralized records

Instead of scattered spreadsheets, teams can manage leads, customers, invoices, service requests, files, and reports in one system.

## Better visibility

Dashboards and reports help owners understand what is pending, delayed, completed, or generating revenue.

## Scalable workflows

Custom software can grow with the business because modules and permissions can be planned around real operating needs.
`,
    faqs: [
      {
        question: "When should a business choose custom software?",
        answer:
          "Choose custom software when generic tools force too many workarounds or when operational visibility is becoming a bottleneck.",
      },
      {
        question: "Can custom software include billing?",
        answer:
          "Yes. Billing, invoices, payment tracking, customer records, and reporting are common custom software modules.",
      },
    ],
  },
  {
    slug: "best-ui-ux-practices-for-conversions",
    title: "Best UI/UX Practices for Higher Website Conversions",
    excerpt:
      "Better conversions come from clarity, trust, speed, visual hierarchy, focused CTAs, and reducing decision friction.",
    category: "UI/UX Design",
    tags: ["UI UX", "Conversion", "Design"],
    author: "Arixa Editorial Team",
    publishedAt: "2026-03-04",
    updatedAt: "2026-04-05",
    featuredImage: blogImage(
      "best-ui-ux-practices-for-conversions",
      "Best UI/UX Practices for Higher Website Conversions",
    ).src,
    featuredImageAlt: blogImage(
      "best-ui-ux-practices-for-conversions",
      "Best UI/UX Practices for Higher Website Conversions",
    ).alt,
    content: `
## The direct answer

Conversion-focused UI/UX makes the next step obvious, reduces uncertainty, and gives visitors enough proof to act confidently.

## Use strong hierarchy

Headlines, supporting copy, proof, and CTAs should be ordered so visitors understand the offer quickly.

## Remove friction

Forms should ask only for useful information, pages should load fast, and navigation should make high-intent pages easy to reach.

## Add trust signals

Testimonials, clear service details, contact details, process sections, and FAQs help visitors evaluate the business before enquiring.
`,
    faqs: [
      {
        question: "What is a conversion-focused CTA?",
        answer:
          "A conversion-focused CTA clearly matches visitor intent, such as request a quote, book a consultation, or start your project.",
      },
      {
        question: "Does design affect SEO?",
        answer:
          "Yes. Design affects engagement, readability, accessibility, internal linking, performance, and content clarity.",
      },
    ],
  },
  {
    slug: "technical-seo-essentials",
    title: "Technical SEO Essentials for Business Websites",
    excerpt:
      "Technical SEO makes sure search engines can crawl, index, understand, and rank your important pages correctly.",
    category: "SEO",
    tags: ["Technical SEO", "Schema", "Performance"],
    author: "Arixa Editorial Team",
    publishedAt: "2026-03-14",
    updatedAt: "2026-04-02",
    featuredImage: blogImage(
      "technical-seo-essentials",
      "Technical SEO Essentials",
    ).src,
    featuredImageAlt: blogImage(
      "technical-seo-essentials",
      "Technical SEO Essentials",
    ).alt,
    content: `
## The direct answer

Technical SEO covers crawlability, indexability, page speed, canonical URLs, structured data, metadata, sitemap, robots, and clean site architecture.

## Crawl and index control

Robots.txt, sitemap.xml, canonical URLs, redirects, and status codes help search engines discover the right pages and avoid duplicates.

## Structured data

Schema markup gives search engines explicit context about your organization, services, FAQs, breadcrumbs, and blog articles.

## Performance and accessibility

Fast pages, stable layouts, responsive images, readable content, and semantic HTML improve user experience and search quality signals.
`,
    faqs: [
      {
        question: "Is sitemap.xml required?",
        answer:
          "A sitemap is strongly recommended because it helps search engines discover important pages and updates.",
      },
      {
        question: "What is canonical URL?",
        answer:
          "A canonical URL tells search engines which version of a page should be treated as the primary version.",
      },
    ],
  },
  {
    slug: "aeo-and-geo-for-modern-search",
    title: "AEO and GEO for Modern Search",
    excerpt:
      "Answer Engine Optimization and Generative Engine Optimization help search and AI systems understand and cite your content.",
    category: "SEO",
    tags: ["AEO", "GEO", "AI Search"],
    author: "Arixa Editorial Team",
    publishedAt: "2026-03-22",
    updatedAt: "2026-04-04",
    featuredImage: blogImage(
      "aeo-and-geo-for-modern-search",
      "AEO and GEO for Modern Search",
    ).src,
    featuredImageAlt: blogImage(
      "aeo-and-geo-for-modern-search",
      "AEO and GEO for Modern Search",
    ).alt,
    content: `
## The direct answer

AEO helps your content answer specific questions clearly. GEO helps generative AI systems understand your brand, services, facts, relationships, and expertise.

## Why answer-first content works

Short direct answers under clear headings make it easier for search systems and users to extract value quickly.

## Entity consistency

Your company name, services, location signals, author details, contact information, and structured data should stay consistent across the site.

## Machine-readable support

Schema, llms.txt, clean internal links, FAQs, and descriptive service pages improve how machines interpret your website.
`,
    faqs: [
      {
        question: "Does AEO replace SEO?",
        answer:
          "No. AEO extends SEO by making answers clearer, but technical SEO, content quality, and authority still matter.",
      },
      {
        question: "What is llms.txt?",
        answer:
          "llms.txt is a machine-readable file that summarizes important site content and links for AI systems.",
      },
    ],
  },
  {
    slug: "mobile-app-benefits-for-businesses",
    title: "Mobile App Benefits for Businesses",
    excerpt:
      "A mobile app can improve retention, convenience, repeat engagement, and direct customer access when the use case is strong.",
    category: "Mobile App Development",
    tags: ["Mobile Apps", "Customer Experience", "Retention"],
    author: "Arixa Editorial Team",
    publishedAt: "2026-04-01",
    updatedAt: "2026-04-15",
    featuredImage: blogImage(
      "mobile-app-benefits-for-businesses",
      "Mobile App Benefits for Businesses",
    ).src,
    featuredImageAlt: blogImage(
      "mobile-app-benefits-for-businesses",
      "Mobile App Benefits for Businesses",
    ).alt,
    content: `
## The direct answer

A mobile app benefits a business when customers need repeat access, account features, bookings, orders, service tracking, or personalized updates.

## Better customer convenience

Apps can reduce friction for repeat actions such as booking, reordering, viewing status, or managing account details.

## Stronger retention

When the app provides ongoing utility, it can increase repeat usage and direct engagement outside search or social feeds.

## Connected operations

A business app works best when connected to an admin panel, CRM, analytics, and support workflows.
`,
    faqs: [
      {
        question: "Does every business need a mobile app?",
        answer:
          "No. A mobile app is best when users have recurring tasks or account needs. Many businesses should build a strong website first.",
      },
      {
        question: "Can a mobile app use the same backend as a website?",
        answer:
          "Yes. A shared backend can power the website, admin panel, and mobile app.",
      },
    ],
  },
  {
    slug: "choosing-the-right-digital-partner",
    title: "Choosing the Right Digital Partner for Your Business",
    excerpt:
      "The right partner understands business goals, technical architecture, SEO, UX, maintenance, and long-term scalability.",
    category: "Strategy",
    tags: ["Digital Partner", "Software Company", "Planning"],
    author: "Arixa Editorial Team",
    publishedAt: "2026-04-12",
    updatedAt: "2026-04-22",
    featuredImage: blogImage(
      "choosing-the-right-digital-partner",
      "Choosing the Right Digital Partner",
    ).src,
    featuredImageAlt: blogImage(
      "choosing-the-right-digital-partner",
      "Choosing the Right Digital Partner",
    ).alt,
    content: `
## The direct answer

Choose a digital partner who can connect strategy, design, engineering, SEO, content structure, deployment, and post-launch support.

## Look beyond visuals

A premium website must look good, but it also needs speed, metadata, schema, clear CTAs, accessibility, and maintainable code.

## Ask about ownership

You should know where the code lives, how the database works, how content is managed, and how the project can migrate later.

## Plan for growth

Good partners build foundations that can support blogs, landing pages, integrations, admin features, and future app modules.
`,
    faqs: [
      {
        question: "What should I ask before hiring a software company?",
        answer:
          "Ask about process, timeline, ownership, SEO setup, CMS, hosting, database, maintenance, security, and future scalability.",
      },
      {
        question: "Why does portability matter?",
        answer:
          "Portability helps you move hosting, change providers, or scale infrastructure without being trapped in a closed platform.",
      },
    ],
  },
];

export const blogCategories = Array.from(
  new Set(blogPosts.map((post) => post.category)),
).map((name) => ({
  name,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
}));

export const blogTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map(
  (name) => ({
    name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
  }),
);
