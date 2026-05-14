import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={`https://wa.me/${siteConfig.whatsapp}`}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-purple-500 text-white shadow-[0_8px_32px_rgba(16,185,129,0.45)] transition hover:scale-110 hover:shadow-[0_8px_48px_rgba(16,185,129,0.65)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#030712]"
        aria-label="Chat with Arixa Technologies on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Pulse rings */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-20" />
        <span className="absolute inline-flex h-[120%] w-[120%] animate-ping rounded-full bg-purple-400 opacity-10 [animation-delay:0.5s]" />
        <MessageCircle size={24} aria-hidden="true" />

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-[#0f172a] border border-white/10 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </Link>
    </div>
  );
}
