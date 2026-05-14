import "server-only";

import { adminResources, type AdminResource, type AdminResourceKey } from "@/config/admin-resources";
import {
  blogPosts,
  careers,
  portfolioItems,
  pricingPlans,
  services,
  siteFaqs,
  testimonials,
} from "@/data/site-data";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function fallbackRows(resourceKey: string): Record<string, unknown>[] {
  switch (resourceKey) {
    case "blog":
      return blogPosts.map((post) => ({
        title: post.title,
        slug: post.slug,
        status: "published",
        category: post.category,
        published_at: post.publishedAt,
      }));
    case "services":
      return services.map((service, index) => ({
        title: service.title,
        slug: service.slug,
        status: "published",
        sort_order: index + 1,
      }));
    case "portfolio":
      return portfolioItems.map((item) => ({
        title: item.title,
        slug: item.slug,
        category: item.category,
        status: "published",
      }));
    case "testimonials":
      return testimonials.map((item) => ({
        name: item.name,
        role: item.role,
        status: "published",
      }));
    case "pricing-plans":
      return pricingPlans.map((plan, index) => ({
        name: plan.name,
        price: plan.price,
        sort_order: index + 1,
        status: "published",
      }));
    case "faqs":
      return siteFaqs.map((faq) => ({
        question: faq.question,
        page_path: "/",
        status: "published",
      }));
    case "careers":
      return careers.map((career) => ({
        title: career.title,
        slug: career.slug,
        location: career.location,
        type: career.type,
        status: "published",
      }));
    default:
      return [];
  }
}

export async function listAdminRows(resourceKey: AdminResourceKey) {
  const resource = adminResources[resourceKey] as AdminResource;
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return fallbackRows(resourceKey);
  }

  const orderBy = resource.orderBy || "created_at";
  const { data, error } = await supabase
    .from(resource.table)
    .select("*")
    .order(orderBy, { ascending: false });

  if (error || !data) {
    return fallbackRows(resourceKey);
  }

  return data as Record<string, unknown>[];
}

export async function getAdminDashboardStats() {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return {
      posts: blogPosts.length,
      services: services.length,
      portfolio: portfolioItems.length,
      leads: 0,
      applications: 0,
      localPreview: true,
    };
  }

  const [posts, serviceRows, portfolioRows, leads, applications] = await Promise.all([
    supabase.from("blog_posts").select("id", { count: "exact", head: true }),
    supabase.from("services").select("id", { count: "exact", head: true }),
    supabase.from("portfolio_items").select("id", { count: "exact", head: true }),
    supabase.from("leads").select("id", { count: "exact", head: true }),
    supabase.from("career_applications").select("id", { count: "exact", head: true }),
  ]);

  return {
    posts: posts.count || 0,
    services: serviceRows.count || 0,
    portfolio: portfolioRows.count || 0,
    leads: leads.count || 0,
    applications: applications.count || 0,
    localPreview: false,
  };
}
