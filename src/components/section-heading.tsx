import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  gradient?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  gradient = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 rounded-full border border-[#07304d]/10 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#8b4af5] shadow-[0_10px_28px_rgba(7,21,37,0.08)] backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-orange-300" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-[#071525] sm:text-4xl",
          gradient && "gradient-text",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[#49657a]">{description}</p>
      ) : null}
    </div>
  );
}
