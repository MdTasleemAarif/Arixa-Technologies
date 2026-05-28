import "server-only";

import {
  blogPosts,
  careers,
  services,
  siteFaqs,
  testimonials,
  type BlogPost,
  type Service,
} from "@/data/site-data";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type QueryOptions = {
  query?: string;
  category?: string;
  tag?: string;
};

export type SeoOverride = {
  path: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex: boolean;
};

function normalizePath(path: string) {
  if (!path) {
    return "/";
  }

  try {
    const url = new URL(path);
    path = url.pathname;
  } catch {
    // Already a path.
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.length > 1 ? normalized.replace(/\/+$/, "") : normalized;
}

function normalizePost(row: Record<string, unknown>): BlogPost {
  return {
    slug: String(row.slug),
    title: String(row.title),
    excerpt: String(row.excerpt || ""),
    category: String(row.category || "Strategy"),
    tags: Array.isArray(row.tags) ? (row.tags as string[]) : [],
    author: String(row.author_name || "Arixa Editorial Team"),
    publishedAt: String(row.published_at || row.created_at),
    updatedAt: String(row.updated_at || row.published_at || row.created_at),
    featuredImage: String(row.featured_image || "/images/og/arixa-technologies-og-image.png"),
    featuredImageAlt: String(row.featured_image_alt || row.title),
    content: String(row.content_markdown || ""),
    faqs: Array.isArray(row.faqs)
      ? (row.faqs as BlogPost["faqs"])
      : [],
    metaTitle: row.meta_title ? String(row.meta_title) : undefined,
    metaDescription: row.meta_description ? String(row.meta_description) : undefined,
    canonicalUrl: row.canonical_url ? String(row.canonical_url) : undefined,
    ogImage: row.og_image ? String(row.og_image) : undefined,
    noindex: Boolean(row.noindex),
  };
}

function normalizeService(row: Record<string, unknown>): Service {
  return {
    slug: String(row.slug),
    title: String(row.title),
    eyebrow: String(row.eyebrow || "Digital solution"),
    summary: String(row.summary || row.description || ""),
    description: String(row.description || row.summary || ""),
    image: String(row.image || "/images/services/custom-software-automation-business-workflow.png"),
    imageAlt: String(row.image_alt || row.title),
    keywords: Array.isArray(row.keywords) ? (row.keywords as string[]) : [],
    benefits: Array.isArray(row.benefits) ? (row.benefits as string[]) : [],
    features: Array.isArray(row.features) ? (row.features as string[]) : [],
    process: Array.isArray(row.process) ? (row.process as string[]) : [],
    faqs: Array.isArray(row.faqs) ? (row.faqs as Service["faqs"]) : [],
    metaTitle: row.meta_title ? String(row.meta_title) : undefined,
    metaDescription: row.meta_description ? String(row.meta_description) : undefined,
    canonicalUrl: row.canonical_url ? String(row.canonical_url) : undefined,
    ogImage: row.og_image ? String(row.og_image) : undefined,
    noindex: Boolean(row.noindex),
  };
}

function filterPosts(posts: BlogPost[], options: QueryOptions = {}) {
  const query = options.query?.toLowerCase().trim();
  const category = options.category?.toLowerCase();
  const tag = options.tag?.toLowerCase();

  return posts.filter((post) => {
    const matchesQuery = query
      ? [post.title, post.excerpt, post.category, post.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(query)
      : true;
    const matchesCategory = category
      ? post.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") === category
      : true;
    const matchesTag = tag
      ? post.tags.some(
          (item) => item.toLowerCase().replace(/[^a-z0-9]+/g, "-") === tag,
        )
      : true;

    return matchesQuery && matchesCategory && matchesTag;
  });
}

export async function listServices() {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return services;
  }

  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("status", "published")
    .eq("noindex", false)
    .order("sort_order", { ascending: true });

  if (error || !data?.length) {
    return services;
  }

  return data.map((row) => normalizeService(row));
}

export async function getService(slug: string) {
  const supabase = await createSupabaseServerClient();

  if (supabase) {
    const { data } = await supabase
      .from("services")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    if (data) {
      return normalizeService(data);
    }
  }

  return services.find((service) => service.slug === slug);
}

export async function listBlogPosts(options: QueryOptions = {}) {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return filterPosts(blogPosts, options);
  }

  let query = supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .eq("noindex", false)
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false });

  if (options.query) {
    query = query.or(
      `title.ilike.%${options.query}%,excerpt.ilike.%${options.query}%,content_markdown.ilike.%${options.query}%`,
    );
  }

  const { data, error } = await query;

  if (error || !data?.length) {
    return filterPosts(blogPosts, options);
  }

  return filterPosts(data.map((row) => normalizePost(row)), options);
}

export async function getBlogPost(slug: string) {
  const supabase = await createSupabaseServerClient();

  if (supabase) {
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    if (data) {
      return normalizePost(data);
    }
  }

  return blogPosts.find((post) => post.slug === slug);
}

export async function getSeoOverride(path: string): Promise<SeoOverride | null> {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from("seo_overrides")
    .select("path, meta_title, meta_description, canonical_url, og_title, og_description, og_image, noindex")
    .eq("path", normalizePath(path))
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  return {
    path: String(data.path),
    metaTitle: data.meta_title ? String(data.meta_title) : undefined,
    metaDescription: data.meta_description ? String(data.meta_description) : undefined,
    canonicalUrl: data.canonical_url ? String(data.canonical_url) : undefined,
    ogTitle: data.og_title ? String(data.og_title) : undefined,
    ogDescription: data.og_description ? String(data.og_description) : undefined,
    ogImage: data.og_image ? String(data.og_image) : undefined,
    noindex: Boolean(data.noindex),
  };
}

export async function listTestimonials() {
  return testimonials;
}

export async function listFaqs() {
  return siteFaqs;
}

export async function listCareers() {
  return careers;
}

export async function getCareer(slug: string) {
  return careers.find((career) => career.slug === slug);
}
