import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { services, blogPosts } from "@/data/site-data";

export function GET() {
  const lines = [
    `# ${siteConfig.name}`,
    "",
    "> Premium software and digital solutions company offering websites, web apps, mobile apps, SEO, e-commerce, custom software, branding, digital marketing, and AI automation.",
    "",
    "## Key URLs",
    `- Home: ${siteConfig.url}/`,
    `- About: ${siteConfig.url}/about`,
    `- Services: ${siteConfig.url}/services`,
    `- Blog: ${siteConfig.url}/blog`,
    `- Contact: ${siteConfig.url}/contact`,
    "",
    "## Services",
    ...services.map((service) => `- ${service.title}: ${siteConfig.url}/services/${service.slug} - ${service.summary}`),
    "",
    "## Starter Articles",
    ...blogPosts.map((post) => `- ${post.title}: ${siteConfig.url}/blog/${post.slug} - ${post.excerpt}`),
    "",
    "## Contact",
    `- Email: ${siteConfig.email}`,
    `- Phone: ${siteConfig.phone}`,
    `- Alternate phone: ${siteConfig.phoneSecondary}`,
  ];

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
