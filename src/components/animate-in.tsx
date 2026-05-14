"use client";

import { useEffect, useRef } from "react";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
  threshold?: number;
};

export function AnimateIn({
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.12,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  const variantClass = {
    up: "reveal",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  }[variant];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`${variantClass} ${className}`}>
      {children}
    </div>
  );
}

type StaggerProps = {
  children: React.ReactNode[];
  className?: string;
  wrapperClassName?: string;
  baseDelay?: number;
  stepDelay?: number;
  variant?: "up" | "scale";
  threshold?: number;
};

export function AnimateInStagger({
  children,
  className = "",
  wrapperClassName = "",
  baseDelay = 0,
  stepDelay = 70,
  variant = "up",
  threshold = 0.08,
}: StaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const variantClass = variant === "scale" ? "reveal-scale" : "reveal";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>(".stagger-item");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add("visible");
            }, baseDelay + i * stepDelay);
          });
          observer.unobserve(container);
        }
      },
      { threshold },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [baseDelay, stepDelay, threshold]);

  return (
    <div ref={containerRef} className={wrapperClassName}>
      {children.map((child, i) => (
        <div key={i} className={`stagger-item ${variantClass} ${className}`}>
          {child}
        </div>
      ))}
    </div>
  );
}
