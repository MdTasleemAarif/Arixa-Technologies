import Link from "next/link";
import { CheckCircle2, Home, ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Thank You",
  description: "Thank you for contacting Arixa Technologies.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-lg bg-purple-500/10">
          <CheckCircle2 className="text-purple-400" size={40} aria-hidden="true" />
        </span>
        <h1 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
          Thank you. We received your submission.
        </h1>
        <p className="mt-4 leading-8 text-slate-400">
          Arixa Technologies will review the details and respond as soon as possible via email or WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="btn-glow inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-[#15091f] focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            <Home size={15} aria-hidden="true" /> Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/15 px-6 text-sm font-semibold text-white transition hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Explore Services <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
