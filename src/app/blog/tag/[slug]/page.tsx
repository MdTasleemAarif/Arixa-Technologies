import Link from "next/link";
import readingTime from "reading-time";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { blogTags } from "@/data/site-data";
import { listBlogPosts } from "@/lib/supabase/data";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogTags.map((tag) => ({ slug: tag.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tag = blogTags.find((item) => item.slug === slug);

  return createMetadata({
    title: `${tag?.name || "Blog Tag"} Articles`,
    description: `Read ${tag?.name || "tag"} articles from Arixa Technologies.`,
    path: `/blog/tag/${slug}`,
  });
}

export default async function BlogTagPage({ params }: Props) {
  const { slug } = await params;
  const tag = blogTags.find((item) => item.slug === slug);
  const posts = await listBlogPosts({ tag: slug });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: tag?.name || "Tag", url: `/blog/tag/${slug}` },
        ])}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: tag?.name || "Tag", href: `/blog/tag/${slug}` },
            ]}
          />
          <div className="mt-10">
            <SectionHeading
              eyebrow="Blog tag"
              title={tag?.name || "Tag"}
              description="Tag pages help readers discover related articles across categories."
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-md border border-teal-500/20 bg-white/70 p-5 transition hover:border-teal-300/30 hover:bg-white/85">
                <h2 className="text-xl font-semibold text-[#07304d]">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#587487]">{post.excerpt}</p>
                <p className="mt-5 text-xs text-[#6d8797]">{formatDate(post.publishedAt)} / {readingTime(post.content).text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
