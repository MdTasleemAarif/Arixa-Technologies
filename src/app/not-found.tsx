import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Page Not Found",
  description: "The requested Arixa Technologies page could not be found.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="bg-gradient-to-r from-teal-300 via-orange-200 to-cyan-200 bg-clip-text text-8xl font-black tracking-tight text-transparent sm:text-9xl">
          404
        </p>
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-48 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(7,151,165,0.12),rgba(244,127,95,0.08),rgba(70,199,199,0.12),transparent)]" />

        <h1 className="mt-4 text-3xl font-semibold text-[#07304d] sm:text-4xl">
          This page is not available.
        </h1>
        <p className="mt-4 text-base leading-8 text-[#587487]">
          The page may have moved, the URL may be incorrect, or the content may not exist in the CMS yet.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="btn-glow inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-[#07304d] focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            <Home size={16} aria-hidden="true" /> Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-teal-500/30 px-6 text-sm font-semibold text-[#07304d] transition hover:bg-white/85 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <ArrowLeft size={16} aria-hidden="true" /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
