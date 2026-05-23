import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, Share2 } from "lucide-react";
import readingTime from "reading-time";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Faq } from "@/components/faq";
import { ImageSlot } from "@/components/image-slot";
import { JsonLd } from "@/components/json-ld";
import { MarkdownContent } from "@/components/markdown-content";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts as staticBlogPosts } from "@/data/site-data";
import { gmailComposeUrl } from "@/lib/contact-links";
import { getBlogPost, listBlogPosts } from "@/lib/supabase/data";
import { absoluteUrl, formatDate, slugify } from "@/lib/utils";
import { breadcrumbSchema, createMetadata, faqSchema } from "@/lib/seo";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return staticBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  return createMetadata({
    title: post?.title || "Blog Article",
    description: post?.excerpt || siteConfig.description,
    path: `/blog/${slug}`,
    image: post?.featuredImage,
    type: "article",
    publishedTime: post?.publishedAt,
    modifiedTime: post?.updatedAt,
  });
}

function extractHeadings(markdown: string) {
  return markdown
    .split(/\r?\n/)
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace(/^##\s+/, "").trim())
    .filter(Boolean)
    .map((title) => ({ title, id: slugify(title) }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const related = (await listBlogPosts())
    .filter((item) => item.slug !== post.slug && (item.category === post.category || item.tags.some((tag) => post.tags.includes(tag))))
    .slice(0, 3);
  const headings = extractHeadings(post.content);
  const url = absoluteUrl(`/blog/${post.slug}`);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.featuredImage),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: url,
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]),
          faqSchema(post.faqs),
        ]}
      />
      <article className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />
          <header className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <Link href={`/blog/category/${slugify(post.category)}`} className="text-sm font-semibold text-[#087987]">
                {post.category}
              </Link>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-normal text-[#07304d] sm:text-6xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#365b70]">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#587487]">
                <span>{post.author}</span>
                <span>{formatDate(post.publishedAt)}</span>
                <span>Updated {formatDate(post.updatedAt)}</span>
                <span>{readingTime(post.content).text}</span>
              </div>
            </div>
            <ImageSlot src={post.featuredImage} alt={post.featuredImageAlt} width={1200} height={675} priority />
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr_220px]">
            <aside className="h-max rounded-md border border-teal-500/20 bg-white/70 p-5 lg:sticky lg:top-24">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#173f5f]">
                Contents
              </h2>
              <nav className="mt-4 grid gap-2">
                {headings.map((heading) => (
                  <a key={heading.id} href={`#${heading.id}`} className="text-sm leading-6 text-[#587487] transition hover:text-[#07304d]">
                    {heading.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="min-w-0">
              <MarkdownContent content={post.content} />
              {post.faqs.length ? (
                <section className="mt-12">
                  <SectionHeading eyebrow="Article FAQ" title="Common questions" />
                  <div className="mt-6">
                    <Faq items={post.faqs} />
                  </div>
                </section>
              ) : null}
            </div>

            <aside className="h-max rounded-md border border-teal-500/20 bg-white/70 p-5 lg:sticky lg:top-24">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#173f5f]">
                Share
              </h2>
              <div className="mt-4 grid gap-2">
                <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} className="inline-flex items-center gap-2 text-sm text-[#365b70] hover:text-[#07304d]">
                  <Share2 size={16} aria-hidden="true" /> LinkedIn
                </Link>
                <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`} className="inline-flex items-center gap-2 text-sm text-[#365b70] hover:text-[#07304d]">
                  <Share2 size={16} aria-hidden="true" /> X
                </Link>
                <Link
                  href={gmailComposeUrl({ subject: post.title, body: url })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#365b70] hover:text-[#07304d]"
                >
                  <Mail size={16} aria-hidden="true" /> Email
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Related posts" title="Keep reading" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-md border border-teal-500/20 bg-white/70 p-5 transition hover:border-teal-300/30 hover:bg-white/85">
                <p className="text-sm font-semibold text-[#087987]">{item.category}</p>
                <h2 className="mt-3 text-xl font-semibold text-[#07304d]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#587487]">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
