import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={`https://wa.me/${siteConfig.whatsapp}`}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/18 bg-[linear-gradient(135deg,#38d6d1,#8f7cff,#ff9a6b)] text-[#071525] shadow-[0_14px_42px_rgba(56,214,209,0.3)] transition hover:scale-110 hover:shadow-[0_18px_56px_rgba(143,124,255,0.35)] focus:outline-none focus:ring-2 focus:ring-[#67eee0] focus:ring-offset-2 focus:ring-offset-[#07111f]"
        aria-label="Chat with Arixa Technologies on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Pulse rings */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#67eee0] opacity-20" />
        <span className="absolute inline-flex h-[120%] w-[120%] animate-ping rounded-full bg-[#cabdff] opacity-10 [animation-delay:0.5s]" />
        <MessageCircle size={24} aria-hidden="true" />

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg border border-white/12 bg-[#07111f]/92 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </Link>
    </div>
  );
}
