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
      <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/16 bg-white/10 shadow-[0_14px_36px_rgba(56,214,209,0.18)] ring-1 ring-white/10">
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
    <header className="site-header sticky top-0 z-40 px-3 py-3 sm:px-5 lg:px-6">
      <div className="site-header-shell mx-auto max-w-7xl overflow-hidden rounded-lg border border-white/14 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-[35%] hidden w-28 skew-x-[-24deg] bg-white/[0.06] lg:block" />

        <div className="relative flex min-h-16 items-center justify-between gap-3 px-3 sm:px-5">
          <ArixaLogo />

          {/* Desktop nav */}
          <nav
            className="site-nav-rail hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.07] p-1 text-sm font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] lg:flex"
            aria-label="Main navigation"
          >
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md px-3.5 py-2 transition ${
                    isActive
                      ? "bg-white text-[#071525] shadow-[0_12px_28px_rgba(0,0,0,0.22)]"
                      : "text-white/72 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="btn-glow hidden h-10 items-center justify-center rounded-lg px-5 text-sm font-bold text-[#071525] sm:inline-flex"
            >
              Start Project
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/14 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition hover:border-cyan-100/35 hover:bg-white/16 lg:hidden"
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
          <div className="site-header-menu relative mx-2 mb-2 rounded-lg border border-white/10 backdrop-blur-2xl lg:hidden">
            <nav className="px-2 py-2 sm:px-3">
              {siteConfig.nav.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center rounded-lg px-3 py-3 text-sm font-semibold transition hover:bg-white/10 ${
                      isActive ? "bg-white text-[#071525]" : "text-white/72"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-2 border-t border-white/10 px-1 pt-3">
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
      </div>
    </header>
  );
}
