import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
          },
        ],
      ]}
      components={{
        h2: (props) => (
          <h2 className="mt-10 text-2xl font-semibold tracking-normal text-[#07304d]" {...props} />
        ),
        h3: (props) => (
          <h3 className="mt-8 text-xl font-semibold tracking-normal text-[#07304d]" {...props} />
        ),
        p: (props) => <p className="mt-5 leading-8 text-[#365b70]" {...props} />,
        ul: (props) => <ul className="mt-5 list-disc space-y-2 pl-6 text-[#365b70]" {...props} />,
        ol: (props) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-[#365b70]" {...props} />,
        a: (props) => <a className="text-[#087987] underline-offset-4 hover:underline" {...props} />,
        strong: (props) => <strong className="font-semibold text-[#07304d]" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
