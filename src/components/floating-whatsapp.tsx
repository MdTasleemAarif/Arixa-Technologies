import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={`https://wa.me/${siteConfig.whatsapp}`}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0797a5] text-white shadow-[0_8px_32px_rgba(7,151,165,0.35)] transition hover:scale-110 hover:shadow-[0_8px_48px_rgba(7,151,165,0.45)] focus:outline-none focus:ring-2 focus:ring-[#46c7c7] focus:ring-offset-2 focus:ring-offset-[#fff8ea]"
        aria-label="Chat with Arixa Technologies on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Pulse rings */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#46c7c7] opacity-20" />
        <span className="absolute inline-flex h-[120%] w-[120%] animate-ping rounded-full bg-[#46c7c7] opacity-10 [animation-delay:0.5s]" />
        <MessageCircle size={24} aria-hidden="true" />

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg border border-teal-500/20 bg-white px-3 py-1.5 text-xs font-medium text-[#07304d] opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </Link>
    </div>
  );
}
