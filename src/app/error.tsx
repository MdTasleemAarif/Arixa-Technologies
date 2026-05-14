"use client";

import Link from "next/link";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-lg bg-red-500/10">
          <AlertTriangle className="text-red-400" size={32} aria-hidden="true" />
        </span>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Error
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Something went wrong.
        </h1>
        <p className="mt-4 leading-8 text-slate-400">
          An unexpected error occurred. Try again or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={reset}
            className="btn-glow inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-[#15091f] focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            <RefreshCcw size={15} aria-hidden="true" /> Try Again
          </button>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/15 px-6 text-sm font-semibold text-white transition hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <Home size={15} aria-hidden="true" /> Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
