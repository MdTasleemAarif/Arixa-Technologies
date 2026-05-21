import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type CtaSectionProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function CtaSection({
  title = "Let's turn your idea into a premium website, app, or automation system.",
  description = "Share your goal, timeline, and budget. Arixa Technologies will map the right scope, design direction, SEO foundation, CMS workflow, and launch path.",
  className,
}: CtaSectionProps) {
  const highlights = ["Clear project plan", "Premium UI direction", "SEO and CMS ready"];

  return (
    <section className={cn("px-4 py-20 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="gradient-border relative overflow-hidden rounded-lg bg-white/8 p-[1px] shadow-[0_30px_90px_rgba(7,21,37,0.24)]">
          <div className="ink-section relative overflow-hidden rounded-lg p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.11),transparent)]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffb785]">
                  Start the conversation
                </p>
                <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[#d4e2f1]">
                  {description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {highlights.map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/88 backdrop-blur">
                      <CheckCircle2 size={13} className="text-[#67eee0]" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="btn-glow inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-bold text-[#071525] focus:outline-none focus:ring-2 focus:ring-cyan-300"
                >
                  Get Free Quote <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/18 bg-white/8 px-6 text-sm font-semibold text-white transition hover:border-violet-200/40 hover:bg-white/14 focus:outline-none focus:ring-2 focus:ring-violet-300"
                >
                  <MessageCircle size={18} aria-hidden="true" /> WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
