import {
  Mail,
  MessageCircle,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import { SiInstagram } from "react-icons/si";
import { siteConfig } from "@/config/site";
import { gmailComposeUrl } from "@/lib/contact-links";

type ContactItem = {
  label: string;
  href: string;
  icon: LucideIcon | IconType;
  external?: boolean;
  style: string;
};

export function FloatingContactDock() {
  const phoneHref = siteConfig.phone.replace(/[^\d+]/g, "");
  const items: ContactItem[] = [
    {
      label: "WhatsApp",
      href: `https://wa.me/${siteConfig.whatsapp}`,
      icon: MessageCircle,
      external: true,
      style:
        "bg-[linear-gradient(135deg,#38d6d1,#67eee0)] text-[#071525] shadow-[0_14px_36px_rgba(56,214,209,0.28)]",
    },
    {
      label: "Call",
      href: `tel:${phoneHref}`,
      icon: PhoneCall,
      style:
        "bg-[linear-gradient(135deg,#cabdff,#8f7cff)] text-[#071525] shadow-[0_14px_36px_rgba(143,124,255,0.24)]",
    },
    {
      label: "Instagram",
      href: siteConfig.social.instagram,
      icon: SiInstagram,
      external: true,
      style:
        "bg-[linear-gradient(135deg,#ff9a6b,#e4a7ff)] text-[#071525] shadow-[0_14px_36px_rgba(255,133,109,0.22)]",
    },
    {
      label: "Email",
      href: gmailComposeUrl({ to: siteConfig.email }),
      icon: Mail,
      external: true,
      style:
        "bg-[linear-gradient(135deg,#f6c95b,#67eee0)] text-[#071525] shadow-[0_14px_36px_rgba(246,201,91,0.22)]",
    },
  ];

  return (
    <nav
      aria-label="Quick contact"
      className="fixed bottom-5 right-4 z-50 rounded-full border border-white/14 bg-[#07111f]/76 p-2 shadow-[0_18px_64px_rgba(3,8,18,0.35)] backdrop-blur-2xl sm:bottom-6 sm:right-6"
    >
      <div className="flex flex-col gap-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-label={`${item.label} Arixa Technologies`}
              className={`group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/18 transition hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#67eee0] focus:ring-offset-2 focus:ring-offset-[#07111f] sm:h-13 sm:w-13 ${item.style}`}
            >
              {item.label === "WhatsApp" ? (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#67eee0] opacity-16" />
              ) : null}
              <Icon size={21} aria-hidden="true" className="relative" />
              <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] whitespace-nowrap rounded-lg border border-white/12 bg-[#07111f]/94 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-xl transition group-hover:opacity-100 group-focus-visible:opacity-100">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
