"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { logoAsset } from "@/config/site-assets";
import { siteConfig } from "@/config/site";

function ArixaLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Arixa Technologies home">
      {/* Logo image */}
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg overflow-hidden shrink-0">
        <Image
          src={logoAsset.src}
          alt={logoAsset.alt}
          width={36}
          height={36}
          unoptimized
          className="object-contain rounded-lg"
          onError={(e) => {
            // Fallback to CSS logo if image fails
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = "none";
            const parent = el.parentElement;
            if (parent) {
              parent.classList.add("bg-gradient-to-br", "from-teal-500", "via-orange-400", "to-cyan-400");
              parent.innerHTML = '<span class="text-base font-black text-[#07304d]">A</span>';
            }
          }}
        />
      </span>
      <span className="brand-wordmark text-[0.95rem] sm:text-[1.05rem]" aria-hidden="true">
        <span className="brand-wordmark-main">Arixa</span>
        <span className="brand-wordmark-sub">Technologies</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-teal-500/20 bg-[#fff8ea]/88 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-orange-300/35" />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <ArixaLogo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#587487] lg:flex" aria-label="Main navigation">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={isActive ? "true" : undefined}
                className={`nav-link transition-colors hover:text-[#07304d] ${isActive ? "text-[#07304d]" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden h-10 items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 via-orange-400 to-cyan-400 px-5 text-sm font-semibold text-[#07304d] shadow-[0_0_22px_rgba(7,151,165,0.28)] transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(70,199,199,0.28)] sm:inline-flex"
          >
            Start Project
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-teal-500/20 text-[#07304d] transition hover:bg-white/75 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-teal-500/20 bg-[#fff8ea]/96 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-white/80 ${isActive ? "text-[#07304d] bg-white/70" : "text-[#365b70]"}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 border-t border-teal-500/20 pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 via-orange-400 to-cyan-400 text-sm font-semibold text-[#07304d]"
              >
                Start Your Project
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
