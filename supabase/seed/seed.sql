insert into public.blog_categories (name, slug, description)
values
  ('Website Development', 'website-development', 'Business website strategy and implementation'),
  ('SEO', 'seo', 'Search, AEO, GEO, and technical optimization'),
  ('Web App Development', 'web-app-development', 'SaaS, dashboard, and portal engineering'),
  ('E-Commerce', 'e-commerce', 'Online store growth and conversion'),
  ('Custom Software', 'custom-software', 'Business operations software'),
  ('UI/UX Design', 'ui-ux-design', 'Conversion-focused interface design'),
  ('Mobile App Development', 'mobile-app-development', 'Mobile product strategy and development'),
  ('Strategy', 'strategy', 'Digital planning and partner selection')
on conflict (slug) do update set name = excluded.name, description = excluded.description;

insert into public.blog_tags (name, slug)
values
  ('Websites', 'websites'),
  ('Lead Generation', 'lead-generation'),
  ('Digital Presence', 'digital-presence'),
  ('Local SEO', 'local-seo'),
  ('Search', 'search'),
  ('Small Business', 'small-business'),
  ('Web Apps', 'web-apps'),
  ('Product Strategy', 'product-strategy'),
  ('E-Commerce', 'e-commerce'),
  ('Conversion', 'conversion'),
  ('Growth', 'growth'),
  ('Operations', 'operations'),
  ('CRM', 'crm'),
  ('Automation', 'automation'),
  ('UI UX', 'ui-ux'),
  ('Design', 'design'),
  ('Technical SEO', 'technical-seo'),
  ('Schema', 'schema'),
  ('Performance', 'performance'),
  ('AEO', 'aeo'),
  ('GEO', 'geo'),
  ('AI Search', 'ai-search'),
  ('Mobile Apps', 'mobile-apps'),
  ('Customer Experience', 'customer-experience'),
  ('Retention', 'retention'),
  ('Digital Partner', 'digital-partner'),
  ('Software Company', 'software-company'),
  ('Planning', 'planning')
on conflict (slug) do update set name = excluded.name;

insert into public.services (
  title, slug, eyebrow, summary, description, image, image_alt, keywords, benefits, features, process, faqs, sort_order, status
)
values
  (
    'Website Development',
    'website-development',
    'Premium business websites',
    'Conversion-focused websites built with clean UX, fast performance, strong SEO foundations, and scalable Next.js architecture.',
    'Arixa Technologies designs and develops premium websites for businesses that need credibility, speed, search visibility, and measurable lead generation.',
    '/images/services/website-development-premium-responsive-design.png',
    'Responsive website development interface for modern business websites',
    array['business website development','Next.js website','SEO website'],
    array['Premium first impression','SEO-ready pages','Mobile-first layouts','Lead generation paths'],
    array['Custom Next.js architecture','Responsive UI','On-page SEO','CMS-ready sections'],
    array['Discovery','Sitemap and wireframes','Development','SEO and launch'],
    '[{"question":"How long does a business website take?","answer":"A focused website usually takes two to six weeks."}]'::jsonb,
    1,
    'published'
  ),
  (
    'Web App Development',
    'web-app-development',
    'Scalable product engineering',
    'Secure SaaS platforms, dashboards, portals, and internal tools with reliable data models and clean workflows.',
    'We build web applications with authentication, database design, admin workflows, reporting, and integrations.',
    '/images/services/custom-software-automation-business-workflow.png',
    'Custom software and business automation workflow dashboard for enterprise solutions',
    array['web app development','SaaS development','admin dashboard'],
    array['Digitize workflows','Secure business data','Scalable product foundations'],
    array['Role-based dashboards','PostgreSQL models','API integrations'],
    array['Workflow mapping','Data planning','Development','QA and deployment'],
    '[]'::jsonb,
    2,
    'published'
  ),
  (
    'Mobile App Development',
    'mobile-app-development',
    'Native-feeling mobile experiences',
    'Business mobile apps with polished UX, secure backend integration, and scalable product flows.',
    'Arixa creates mobile app experiences for customer engagement, bookings, commerce, and business automation.',
    '/images/services/mobile-app-development-modern-ui-showcase.png',
    'Modern mobile app development showcase with premium smartphone user interface designs',
    array['mobile app development','business app'],
    array['Reach customers on mobile','Improve retention','Connect to admin systems'],
    array['UX flows','API integration','Authentication','Store launch guidance'],
    array['Scope','Prototype','Implementation','Release'],
    '[]'::jsonb,
    3,
    'published'
  ),
  (
    'SEO Services',
    'seo-services',
    'Search visibility systems',
    'On-page SEO, technical SEO, content architecture, image SEO, AEO, and GEO foundations for organic growth.',
    'We improve crawlability, content clarity, keyword targeting, structured data, page speed, and conversion-focused search pages.',
    '/images/services/seo-services-growth-analytics-visual.png',
    'SEO growth analytics dashboard representing on-page SEO, technical SEO, and performance optimization',
    array['SEO services','technical SEO','AEO','GEO'],
    array['Improve organic discovery','Fix crawl issues','Make pages AI-readable'],
    array['Technical audit','On-page optimization','Schema','Image SEO'],
    array['Audit','Planning','Implementation','Measurement'],
    '[]'::jsonb,
    4,
    'published'
  ),
  (
    'E-Commerce Development',
    'ecommerce-development',
    'Stores built for revenue',
    'Premium online stores with product browsing, checkout flows, performance, SEO, and admin control.',
    'We build digital commerce experiences that make products easier to discover, evaluate, purchase, and manage.',
    '/images/services/ecommerce-development-online-store-experience.png',
    'Premium e-commerce development showcase with online store user experience and checkout flow',
    array['e-commerce development','online store','checkout UX'],
    array['Professional product presentation','Optimized shopping journey','Search-friendly product pages'],
    array['Catalog architecture','Checkout planning','Payment guidance','Product SEO'],
    array['Catalog planning','UX design','Implementation','Testing'],
    '[]'::jsonb,
    5,
    'published'
  ),
  (
    'Custom Software Development',
    'custom-software-development',
    'Business systems that fit',
    'Tailored software for billing, CRM, operations, reporting, admin panels, and business-specific workflows.',
    'Arixa builds custom software aligned with actual business processes instead of generic templates.',
    '/images/services/custom-software-automation-business-workflow.png',
    'Custom software and business automation workflow dashboard for enterprise solutions',
    array['custom software','billing software','CRM development'],
    array['Replace spreadsheets','Centralize operations','Improve reporting'],
    array['Billing systems','CRM panels','Dashboards','Workflow automation'],
    array['Discovery','Model planning','Module development','Training'],
    '[]'::jsonb,
    6,
    'published'
  ),
  (
    'Branding / Design',
    'branding-design',
    'Visual systems with purpose',
    'Brand identity, UI/UX design, graphics, social creatives, and interface systems that build credibility.',
    'We create polished visual systems for companies that need a more premium and consistent brand presence.',
    '/images/home/arixa-services-digital-solutions-showcase.png',
    'Modern digital solutions showcase for website development, app development, SEO, and custom software services',
    array['branding design','UI UX design','graphic design'],
    array['Improve trust','Make interfaces clearer','Align brand style'],
    array['Brand direction','UI screens','Landing page design','Social creatives'],
    array['Discovery','Direction','Production','Handoff'],
    '[]'::jsonb,
    7,
    'published'
  ),
  (
    'AI Automation / Digital Solutions',
    'ai-automation-digital-solutions',
    'Automate repetitive work',
    'AI-assisted workflows, lead automation, support automation, reporting systems, and digital operations.',
    'We build automation systems that connect tools, reduce manual tasks, and improve response speed.',
    '/images/services/custom-software-automation-business-workflow.png',
    'Custom software and business automation workflow dashboard for enterprise solutions',
    array['AI automation','business automation','digital solutions'],
    array['Reduce manual work','Improve lead handling','Connect existing tools'],
    array['Lead automation','CRM automation','AI support flows','Workflow dashboards'],
    array['Audit','Workflow mapping','Integration','Monitoring'],
    '[]'::jsonb,
    8,
    'published'
  )
on conflict (slug) do update set
  title = excluded.title,
  summary = excluded.summary,
  description = excluded.description,
  status = excluded.status;

insert into public.testimonials (name, role, quote, status)
values
  ('Rohit Sharma', 'Founder, Growth Retail Brand', 'Arixa helped us turn a basic idea into a professional digital presence with a clear service structure and lead path.', 'published'),
  ('Nisha Verma', 'Operations Head, Service Company', 'The team understood our workflow quickly and created an admin-first plan that made the software feel practical.', 'published'),
  ('Arjun Mehta', 'Director, Local Business Group', 'The website direction felt premium, fast, and built for actual enquiries instead of just looking good.', 'published');

insert into public.faqs (question, answer, page_path, category, status)
values
  ('What does Arixa Technologies do?', 'Arixa Technologies builds websites, web apps, mobile apps, SEO systems, e-commerce platforms, custom software, branding assets, and AI automation for businesses.', '/', 'General', 'published'),
  ('Can you build a custom CMS?', 'Yes. The website includes a custom CMS/admin panel pattern for blogs, services, leads, careers, media, SEO settings, and site settings.', '/', 'CMS', 'published'),
  ('Do you support SEO from launch?', 'Yes. We include metadata, sitemap, robots, schema, semantic headings, internal links, image SEO guidance, and performance-minded implementation.', '/', 'SEO', 'published'),
  ('Can the website move from Vercel to Hostinger VPS later?', 'Yes. The app uses standard Next.js, PostgreSQL, environment variables, and documented production commands so a future VPS migration is practical.', '/', 'Hosting', 'published');

insert into public.careers (title, slug, location, type, summary, responsibilities, status)
values
  ('Frontend Developer', 'frontend-developer', 'Remote / Hybrid', 'Full-time', 'Build responsive Next.js interfaces and polished product experiences.', array['Develop UI with Next.js and Tailwind CSS','Collaborate on component architecture','Optimize accessibility and performance'], 'published'),
  ('SEO Content Strategist', 'seo-content-strategist', 'Remote', 'Contract', 'Plan service pages, article briefs, and answer-first SEO content.', array['Research keywords and entities','Prepare content outlines','Review metadata and FAQs'], 'published'),
  ('UI/UX Designer', 'ui-ux-designer', 'Remote / Hybrid', 'Project-based', 'Design premium web, app, dashboard, and landing page interfaces.', array['Create wireframes and high-fidelity screens','Design responsive states','Support developer handoff'], 'published')
on conflict (slug) do update set summary = excluded.summary, status = excluded.status;

insert into public.blog_posts (
  title, slug, excerpt, content_markdown, category, tags, author_name, featured_image, featured_image_alt, status, published_at, faqs
)
values
  ('Why Every Business Needs a Website in 2026', 'why-every-business-needs-a-website', 'A website gives your business credibility, discoverability, and a direct lead channel.', $$## The direct answer
Every serious business needs a website because customers use search, referrals, ads, and social links to verify trust before they enquire or buy.

## What a good website includes
A strong website needs fast loading, mobile-first design, clear CTAs, useful FAQs, schema markup, and a CMS for future content.$$,'Website Development', array['Websites','Lead Generation','Digital Presence'], 'Arixa Editorial Team', '/images/blog/why-every-business-needs-a-website.png', 'Featured image for Why Every Business Needs a Website in 2026 on Arixa Technologies', 'published', '2026-01-08', '[]'::jsonb),
  ('Benefits of SEO for Local Businesses', 'benefits-of-seo-for-local-businesses', 'Local SEO helps nearby customers discover, compare, and contact your business.', $$## The direct answer
SEO helps local businesses appear when nearby customers search for services, reviews, directions, and trusted providers.

## What local SEO needs
Local SEO needs optimized service pages, profile signals, citations, reviews, schema, speed, and helpful FAQs.$$,'SEO', array['Local SEO','Search','Small Business'], 'Arixa Editorial Team', '/images/blog/benefits-of-seo-for-local-businesses.png', 'Featured image for Benefits of SEO for Local Businesses on Arixa Technologies', 'published', '2026-01-18', '[]'::jsonb),
  ('Website vs Web App: What Should Your Business Build?', 'website-vs-web-app', 'A website explains and sells. A web app lets users log in, manage data, and complete workflows.', $$## The direct answer
Build a website for visibility, trust, and leads. Build a web app when users need accounts, data, dashboards, or transactions.

## Hybrid projects
Many businesses need both a public website for acquisition and a private web app or admin panel for operations.$$,'Web App Development', array['Web Apps','Websites','Product Strategy'], 'Arixa Editorial Team', '/images/blog/website-vs-web-app.png', 'Featured image for Website vs Web App on Arixa Technologies', 'published', '2026-02-02', '[]'::jsonb),
  ('E-Commerce Growth Strategies for Modern Stores', 'ecommerce-growth-strategies', 'Growth comes from better product discovery, faster pages, clearer checkout, and measured improvements.', $$## The direct answer
Modern e-commerce growth depends on making products easier to find, compare, trust, and buy with minimal friction.

## Strengthen checkout
Checkout should be fast, clear, mobile-friendly, and trustworthy.$$,'E-Commerce', array['E-Commerce','Conversion','Growth'], 'Arixa Editorial Team', '/images/blog/ecommerce-growth-strategies.png', 'Featured image for E-Commerce Growth Strategies on Arixa Technologies', 'published', '2026-02-12', '[]'::jsonb),
  ('How Custom Software Improves Business Operations', 'how-custom-software-improves-business-operations', 'Custom software can centralize records, automate repetitive work, reduce errors, and improve visibility.', $$## The direct answer
Custom software improves operations by turning repeated manual processes into structured workflows with reliable data.

## Better visibility
Dashboards and reports help owners understand what is pending, delayed, completed, or generating revenue.$$,'Custom Software', array['Operations','CRM','Automation'], 'Arixa Editorial Team', '/images/blog/how-custom-software-improves-business-operations.png', 'Featured image for How Custom Software Improves Business Operations on Arixa Technologies', 'published', '2026-02-24', '[]'::jsonb),
  ('Best UI/UX Practices for Higher Website Conversions', 'best-ui-ux-practices-for-conversions', 'Better conversions come from clarity, trust, speed, hierarchy, focused CTAs, and reduced friction.', $$## The direct answer
Conversion-focused UI/UX makes the next step obvious, reduces uncertainty, and gives visitors enough proof to act confidently.

## Add trust signals
Testimonials, service detail, contact details, process sections, and FAQs help visitors evaluate the business.$$,'UI/UX Design', array['UI UX','Conversion','Design'], 'Arixa Editorial Team', '/images/blog/best-ui-ux-practices-for-conversions.png', 'Featured image for Best UI/UX Practices for Higher Website Conversions on Arixa Technologies', 'published', '2026-03-04', '[]'::jsonb),
  ('Technical SEO Essentials for Business Websites', 'technical-seo-essentials', 'Technical SEO makes sure search engines can crawl, index, understand, and rank important pages.', $$## The direct answer
Technical SEO covers crawlability, indexability, page speed, canonical URLs, structured data, metadata, sitemap, and robots.

## Structured data
Schema markup gives search engines explicit context about your organization, services, FAQs, breadcrumbs, and articles.$$,'SEO', array['Technical SEO','Schema','Performance'], 'Arixa Editorial Team', '/images/blog/technical-seo-essentials.png', 'Featured image for Technical SEO Essentials on Arixa Technologies', 'published', '2026-03-14', '[]'::jsonb),
  ('AEO and GEO for Modern Search', 'aeo-and-geo-for-modern-search', 'AEO and GEO help search and AI systems understand and cite your content.', $$## The direct answer
AEO helps your content answer specific questions clearly. GEO helps generative AI systems understand your brand, services, facts, and expertise.

## Machine-readable support
Schema, llms.txt, internal links, FAQs, and descriptive service pages improve machine understanding.$$,'SEO', array['AEO','GEO','AI Search'], 'Arixa Editorial Team', '/images/blog/aeo-and-geo-for-modern-search.png', 'Featured image for AEO and GEO for Modern Search on Arixa Technologies', 'published', '2026-03-22', '[]'::jsonb),
  ('Mobile App Benefits for Businesses', 'mobile-app-benefits-for-businesses', 'A mobile app can improve retention, convenience, repeat engagement, and direct customer access.', $$## The direct answer
A mobile app benefits a business when customers need repeat access, account features, bookings, orders, service tracking, or personalized updates.

## Connected operations
A business app works best when connected to an admin panel, CRM, analytics, and support workflows.$$,'Mobile App Development', array['Mobile Apps','Customer Experience','Retention'], 'Arixa Editorial Team', '/images/blog/mobile-app-benefits-for-businesses.png', 'Featured image for Mobile App Benefits for Businesses on Arixa Technologies', 'published', '2026-04-01', '[]'::jsonb),
  ('Choosing the Right Digital Partner for Your Business', 'choosing-the-right-digital-partner', 'The right partner understands business goals, architecture, SEO, UX, maintenance, and scalability.', $$## The direct answer
Choose a digital partner who can connect strategy, design, engineering, SEO, content structure, deployment, and support.

## Ask about ownership
You should know where the code lives, how the database works, how content is managed, and how the project can migrate later.$$,'Strategy', array['Digital Partner','Software Company','Planning'], 'Arixa Editorial Team', '/images/blog/choosing-the-right-digital-partner.png', 'Featured image for Choosing the Right Digital Partner on Arixa Technologies', 'published', '2026-04-12', '[]'::jsonb)
on conflict (slug) do update set
  title = excluded.title,
  excerpt = excluded.excerpt,
  content_markdown = excluded.content_markdown,
  status = excluded.status;

insert into public.site_settings (key, value, group_name)
values
  ('company_name', 'Arixa Technologies', 'company'),
  ('contact_email', 'arixatechnologies@gmail.com', 'contact'),
  ('contact_phone', '+91 74169 98886', 'contact'),
  ('contact_phone_secondary', '+91 74169 98887', 'contact'),
  ('whatsapp_number', '917416998886', 'contact'),
  ('instagram_url', 'https://www.instagram.com/arixa_technologies', 'social'),
  ('facebook_url', 'https://www.facebook.com/share/1DxQFrmWNk/', 'social')
on conflict (key) do update set value = excluded.value, group_name = excluded.group_name;
