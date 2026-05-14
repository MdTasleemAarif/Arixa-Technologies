import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { listBlogPosts, listPortfolioItems, listServices } from "@/lib/supabase/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();
  const services = await listServices();
  const posts = await listBlogPosts();
  const portfolio = await listPortfolioItems();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/pricing",
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

  const portfolioRoutes = portfolio.map((item) => ({
    url: `${base}/portfolio/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
    images: [`${base}${item.image}`],
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...portfolioRoutes];
}
