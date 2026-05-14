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
        <div className="gradient-border relative overflow-hidden rounded-lg bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-[1px]">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#14091d] via-[#111024] to-[#090611] p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(139,92,246,0.18),transparent_34%),linear-gradient(72deg,transparent_44%,rgba(34,211,238,0.13),transparent_78%),linear-gradient(0deg,rgba(232,121,249,0.10),transparent_56%)]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
                  Start the conversation
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  {description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {highlights.map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-100">
                      <CheckCircle2 size={13} className="text-purple-200" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="btn-glow inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-[#15091f] focus:outline-none focus:ring-2 focus:ring-violet-300"
                >
                  Get Free Quote <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-purple-300/45 hover:bg-purple-400/10 focus:outline-none focus:ring-2 focus:ring-purple-300"
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
