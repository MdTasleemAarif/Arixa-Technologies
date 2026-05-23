export type AdminField = {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "textarea"
    | "select"
    | "lines"
    | "faqs"
    | "boolean"
    | "number"
    | "date"
    | "file";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  help?: string;
};

export type AdminResource = {
  label: string;
  table: string;
  description: string;
  fields: AdminField[];
  readonly?: boolean;
  orderBy?: string;
  listFields: string[];
};

const statusOptions = ["draft", "published", "archived"];

export const adminResources = {
  blog: {
    label: "Blog Posts",
    table: "blog_posts",
    description: "Create SEO-ready markdown articles with metadata, tags, FAQs, and publishing status.",
    orderBy: "published_at",
    listFields: ["title", "slug", "status", "category", "published_at"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true },
      { name: "excerpt", label: "Excerpt", type: "textarea", required: true },
      { name: "content_markdown", label: "Markdown content", type: "textarea", required: true },
      { name: "category", label: "Category", type: "text", required: true },
      { name: "tags", label: "Tags", type: "lines", help: "One tag per line or comma-separated." },
      { name: "author_name", label: "Author", type: "text" },
      { name: "featured_image", label: "Featured image path", type: "text" },
      { name: "featured_image_alt", label: "Featured image alt text", type: "text" },
      { name: "status", label: "Status", type: "select", options: statusOptions },
      { name: "published_at", label: "Publish date", type: "date" },
      { name: "meta_title", label: "Meta title", type: "text" },
      { name: "meta_description", label: "Meta description", type: "textarea" },
      { name: "canonical_url", label: "Canonical URL", type: "text" },
      { name: "og_image", label: "OG image path", type: "text" },
      { name: "noindex", label: "Noindex", type: "boolean" },
      {
        name: "faqs",
        label: "FAQs",
        type: "faqs",
        help: "One FAQ per line: Question | Answer",
      },
    ],
  },
  "blog-categories": {
    label: "Blog Categories",
    table: "blog_categories",
    description: "Manage blog topic clusters.",
    listFields: ["name", "slug", "description"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea" },
    ],
  },
  "blog-tags": {
    label: "Blog Tags",
    table: "blog_tags",
    description: "Manage article tags.",
    listFields: ["name", "slug", "description"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea" },
    ],
  },
  services: {
    label: "Services",
    table: "services",
    description: "Manage service pages, SEO sections, benefits, process, and FAQs.",
    listFields: ["title", "slug", "status", "sort_order"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true },
      { name: "eyebrow", label: "Eyebrow", type: "text" },
      { name: "summary", label: "Summary", type: "textarea", required: true },
      { name: "description", label: "Description", type: "textarea", required: true },
      { name: "image", label: "Image path", type: "text" },
      { name: "image_alt", label: "Image alt text", type: "text" },
      { name: "keywords", label: "Keywords", type: "lines" },
      { name: "benefits", label: "Benefits", type: "lines" },
      { name: "features", label: "Features", type: "lines" },
      { name: "process", label: "Process steps", type: "lines" },
      { name: "faqs", label: "FAQs", type: "faqs" },
      { name: "sort_order", label: "Sort order", type: "number" },
      { name: "status", label: "Status", type: "select", options: statusOptions },
    ],
  },
  testimonials: {
    label: "Testimonials",
    table: "testimonials",
    description: "Manage client trust quotes.",
    listFields: ["name", "role", "status"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "role", label: "Role", type: "text" },
      { name: "quote", label: "Quote", type: "textarea", required: true },
      { name: "status", label: "Status", type: "select", options: statusOptions },
    ],
  },
  faqs: {
    label: "FAQs",
    table: "faqs",
    description: "Manage reusable page FAQs.",
    listFields: ["question", "page_path", "status"],
    fields: [
      { name: "question", label: "Question", type: "text", required: true },
      { name: "answer", label: "Answer", type: "textarea", required: true },
      { name: "page_path", label: "Page path", type: "text", placeholder: "/services" },
      { name: "category", label: "Category", type: "text" },
      { name: "status", label: "Status", type: "select", options: statusOptions },
    ],
  },
  careers: {
    label: "Careers",
    table: "careers",
    description: "Manage job listings.",
    listFields: ["title", "slug", "location", "type", "status"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true },
      { name: "location", label: "Location", type: "text" },
      { name: "type", label: "Type", type: "text" },
      { name: "summary", label: "Summary", type: "textarea" },
      { name: "responsibilities", label: "Responsibilities", type: "lines" },
      { name: "status", label: "Status", type: "select", options: statusOptions },
    ],
  },
  leads: {
    label: "Contact Leads",
    table: "leads",
    description: "View contact form submissions.",
    readonly: true,
    listFields: ["name", "email", "service", "status", "created_at"],
    fields: [],
  },
  "career-applications": {
    label: "Career Applications",
    table: "career_applications",
    description: "View job applications and resume paths.",
    readonly: true,
    listFields: ["name", "email", "career_slug", "status", "created_at"],
    fields: [],
  },
  media: {
    label: "Media Assets",
    table: "media_assets",
    description: "Upload and document image assets with SEO metadata.",
    listFields: ["title", "file_path", "alt_text", "created_at"],
    fields: [
      { name: "file", label: "Image file", type: "file", help: "WebP, PNG, JPG, or SVG up to 5 MB." },
      { name: "title", label: "Title", type: "text", required: true },
      { name: "file_path", label: "Existing file path", type: "text" },
      { name: "alt_text", label: "Alt text", type: "textarea", required: true },
      { name: "caption", label: "Caption", type: "textarea" },
    ],
  },
  "seo-overrides": {
    label: "SEO Overrides",
    table: "seo_overrides",
    description: "Manage custom page metadata and indexing controls.",
    listFields: ["path", "meta_title", "noindex", "updated_at"],
    fields: [
      { name: "path", label: "Path", type: "text", required: true },
      { name: "meta_title", label: "Meta title", type: "text" },
      { name: "meta_description", label: "Meta description", type: "textarea" },
      { name: "canonical_url", label: "Canonical URL", type: "text" },
      { name: "og_title", label: "OG title", type: "text" },
      { name: "og_description", label: "OG description", type: "textarea" },
      { name: "og_image", label: "OG image", type: "text" },
      { name: "noindex", label: "Noindex", type: "boolean" },
    ],
  },
  "site-settings": {
    label: "Site Settings",
    table: "site_settings",
    description: "Manage editable business settings.",
    listFields: ["key", "value", "updated_at"],
    fields: [
      { name: "key", label: "Key", type: "text", required: true },
      { name: "value", label: "Value", type: "textarea", required: true },
      { name: "group_name", label: "Group", type: "text" },
    ],
  },
} satisfies Record<string, AdminResource>;

export type AdminResourceKey = keyof typeof adminResources;

export const adminNav = Object.entries(adminResources).map(([href, resource]) => ({
  href: `/admin/${href}`,
  label: resource.label,
}));
