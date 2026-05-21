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
      <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white/10 shadow-[0_14px_36px_rgba(56,214,209,0.18)]">
        <Image
          src={logoAsset.src}
          alt={logoAsset.alt}
          width={36}
          height={36}
          unoptimized
          className="h-full w-full rounded-lg object-contain"
          onError={(e) => {
            // Fallback to CSS logo if image fails
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = "none";
            const parent = el.parentElement;
            if (parent) {
              parent.classList.add("bg-gradient-to-br", "from-cyan-300", "via-violet-400", "to-orange-300");
              parent.innerHTML = '<span class="text-base font-black text-[#071525]">A</span>';
            }
          }}
        />
      </span>
      <span className="brand-wordmark text-[1rem] sm:text-[1.12rem]" aria-hidden="true">
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
    <header className="site-header sticky top-0 z-40 border-b border-white/10 bg-[#07111f]/88 shadow-[0_18px_54px_rgba(3,8,18,0.22)] backdrop-blur-2xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-orange-300/55" />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <ArixaLogo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/65 lg:flex" aria-label="Main navigation">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={isActive ? "true" : undefined}
                className={`nav-link transition-colors hover:text-white ${isActive ? "text-white" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-glow hidden h-10 items-center justify-center rounded-lg px-5 text-sm font-bold text-[#071525] sm:inline-flex"
          >
            Start Project
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/8 text-white transition hover:bg-white/15 lg:hidden"
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
        <div className="border-t border-white/10 bg-[#07111f]/96 backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center rounded-lg px-3 py-3 text-sm font-semibold transition hover:bg-white/10 ${isActive ? "bg-white/12 text-white" : "text-white/68"}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 border-t border-white/10 pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-glow flex h-11 items-center justify-center rounded-lg text-sm font-bold text-[#071525]"
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
