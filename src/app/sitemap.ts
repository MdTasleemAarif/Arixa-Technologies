import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { siteAssets } from "@/config/site-assets";
import { listBlogPosts, listServices } from "@/lib/supabase/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();
  const services = await listServices();
  const posts = await listBlogPosts();

  const staticRouteImages: Record<string, string[]> = {
    "": [`${base}${siteAssets.homeHero.src}`, `${base}${siteAssets.homeServices.src}`],
    "/about": [`${base}${siteAssets.about.src}`],
    "/contact": [`${base}${siteAssets.contact.src}`],
  };

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/blog",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.75,
    images: staticRouteImages[path],
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
    images: [`${base}${service.image}`],
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [`${base}${post.featuredImage}`],
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
