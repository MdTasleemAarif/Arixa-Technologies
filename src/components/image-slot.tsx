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
  caption?: string;
};

export function ImageSlot({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  caption,
}: ImageSlotProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure>
      <div
        className={cn(
          "media-frame group relative overflow-hidden rounded-lg border border-white/16",
          "shadow-[0_24px_72px_rgba(7,21,37,0.2)]",
          className,
        )}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:32px_32px] opacity-35" />

        <div className="absolute inset-x-8 top-8 grid grid-cols-3 gap-3 opacity-70">
          <span className="h-14 rounded-lg border border-cyan-200/15 bg-cyan-300/10" />
          <span className="h-14 rounded-lg border border-violet-200/15 bg-violet-300/10" />
          <span className="h-14 rounded-lg border border-orange-200/15 bg-orange-300/10" />
        </div>
        <div className="absolute bottom-8 left-8 right-8 space-y-3">
          <span className="block h-3.5 w-2/3 rounded-full bg-cyan-200/14" />
          <span className="block h-3.5 w-1/2 rounded-full bg-violet-200/16" />
          <span className="block h-20 rounded-lg border border-white/12 bg-white/10 backdrop-blur" />
        </div>

        {/* Actual image */}
        {!failed ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 48vw, 92vw"
            className="object-cover transition duration-700 group-hover:scale-[1.035]"
            onError={() => setFailed(true)}
          />
        ) : null}

        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/12" />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-xs leading-5 text-[#6d8797]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
