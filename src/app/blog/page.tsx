import Link from "next/link";
import { Search } from "lucide-react";
import readingTime from "reading-time";
import { AnimateIn, AnimateInStagger } from "@/components/animate-in";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { ImageSlot } from "@/components/image-slot";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { blogCategories, blogTags } from "@/data/site-data";
import { listBlogPosts } from "@/lib/supabase/data";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export async function generateMetadata() {
  return createPageMetadata({
    title: "Blog",
    description:
      "Read Arixa Technologies insights on website development, SEO, AEO, GEO, e-commerce, custom software, mobile apps, UI/UX, automation, and digital growth for global businesses.",
    path: "/blog",
  });
}

type Props = {
  searchParams: Promise<{ query?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const { query } = await searchParams;
  const posts = await listBlogPosts({ query });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <AnimateIn>
              <div>
                <SectionHeading
                  eyebrow="Blog"
                  title="SEO, software, design, and automation insights."
                  description="Publish real articles from the CMS later. These starter posts demonstrate the structure for ranking-focused content."
                />
                {/* Search */}
                <form className="mt-8 flex max-w-xl gap-2" action="/blog">
                  <label className="sr-only" htmlFor="blog-search">Search blog</label>
                  <div className="relative flex-1">
                    <Search className="pointer-events-none absolute left-3 top-3 text-[#6d8797]" size={18} aria-hidden="true" />
                    <input
                      id="blog-search"
                      name="query"
                      defaultValue={query}
                      placeholder="Search articles..."
                      className="h-11 w-full rounded-lg border border-teal-500/20 bg-white/75 pl-10 pr-3 text-sm text-[#07304d] outline-none transition placeholder:text-[#6d8797] focus:border-teal-300/60 focus:ring-1 focus:ring-teal-300/40"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-glow h-11 rounded-lg px-5 text-sm font-semibold text-[#07304d] focus:outline-none focus:ring-2 focus:ring-teal-300"
                  >
                    Search
                  </button>
                </form>
              </div>
            </AnimateIn>

            {/* Sidebar */}
            <AnimateIn variant="right">
              <aside className="rounded-lg border border-teal-500/20 bg-white/65 p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#173f5f]">
                  Categories
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {blogCategories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/blog/category/${category.slug}`}
                      className="rounded-full border border-teal-500/20 px-3 py-1.5 text-xs font-medium text-[#365b70] transition hover:border-teal-300/40 hover:bg-teal-500/10 hover:text-[#087987]"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
                <h2 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#173f5f]">
                  Tags
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {blogTags.slice(0, 12).map((tag) => (
                    <Link
                      key={tag.slug}
                      href={`/blog/tag/${tag.slug}`}
                      className="rounded-full border border-teal-500/20 px-3 py-1.5 text-xs font-medium text-[#587487] transition hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-[#087987]"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </aside>
            </AnimateIn>
          </div>

          {/* Posts grid */}
          <AnimateInStagger
            wrapperClassName="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            stepDelay={60}
          >
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-hover group flex flex-col rounded-lg border border-teal-500/20 bg-white/65 p-4"
              >
                <ImageSlot src={post.featuredImage} alt={post.featuredImageAlt} width={1200} height={675} className="shadow-none" />
                <div className="mt-4 flex-1">
                  <span className="inline-flex rounded-full border border-teal-300/20 bg-teal-500/12 px-2.5 py-0.5 text-xs font-semibold text-[#087987]">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold text-[#07304d] transition-colors group-hover:text-[#c25231]">{post.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#587487]">{post.excerpt}</p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-teal-500/15 pt-4 text-xs text-[#6d8797]">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>{readingTime(post.content).text}</span>
                </div>
              </Link>
            ))}
          </AnimateInStagger>
        </div>
      </section>
      <CtaSection
        title="Need a blog and SEO system like this?"
        description="Arixa can build your content architecture, admin publishing workflow, metadata, schema, sitemap, RSS, and internal linking model."
      />
    </>
  );
}
