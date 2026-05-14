import Link from "next/link";
import readingTime from "reading-time";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { blogCategories } from "@/data/site-data";
import { listBlogPosts } from "@/lib/supabase/data";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = blogCategories.find((item) => item.slug === slug);

  return createMetadata({
    title: `${category?.name || "Blog Category"} Articles`,
    description: `Read ${category?.name || "category"} articles from Arixa Technologies.`,
    path: `/blog/category/${slug}`,
  });
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = blogCategories.find((item) => item.slug === slug);
  const posts = await listBlogPosts({ category: slug });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: category?.name || "Category", url: `/blog/category/${slug}` },
        ])}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: category?.name || "Category", href: `/blog/category/${slug}` },
            ]}
          />
          <div className="mt-10">
            <SectionHeading
              eyebrow="Blog category"
              title={category?.name || "Category"}
              description="Category pages support topical SEO clusters and cleaner internal linking."
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-violet-300/30 hover:bg-white/[0.07]">
                <h2 className="text-xl font-semibold text-white">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{post.excerpt}</p>
                <p className="mt-5 text-xs text-slate-500">{formatDate(post.publishedAt)} / {readingTime(post.content).text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
