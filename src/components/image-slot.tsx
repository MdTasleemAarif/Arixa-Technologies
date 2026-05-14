"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ImageSlotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

export function ImageSlot({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
}: ImageSlotProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#08060f]",
        "shadow-[0_20px_80px_rgba(0,0,0,0.45)]",
        className,
      )}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(139,92,246,0.16),transparent_32%),linear-gradient(70deg,transparent_42%,rgba(34,211,238,0.12),transparent_76%),linear-gradient(180deg,rgba(232,121,249,0.08),transparent_58%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />

      <div className="absolute inset-x-8 top-8 grid grid-cols-3 gap-3 opacity-70">
        <span className="h-14 rounded-lg border border-violet-300/15 bg-violet-500/10" />
        <span className="h-14 rounded-lg border border-fuchsia-300/15 bg-fuchsia-400/10" />
        <span className="h-14 rounded-lg border border-cyan-300/15 bg-cyan-400/10" />
      </div>
      <div className="absolute bottom-8 left-8 right-8 space-y-3">
        <span className="block h-3.5 w-2/3 rounded-full bg-white/12" />
        <span className="block h-3.5 w-1/2 rounded-full bg-purple-300/18" />
        <span className="block h-20 rounded-lg border border-white/[0.07] bg-black/20 backdrop-blur" />
      </div>

      {/* Actual image */}
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 48vw, 92vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090611]/22" />
    </div>
  );
}
