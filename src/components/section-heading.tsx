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
        <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#c25231]">
          <span className="inline-block h-px w-4 bg-gradient-to-r from-teal-400 via-orange-300 to-cyan-300" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display mt-3 text-3xl font-semibold tracking-tight text-[#07304d] sm:text-4xl",
          gradient && "gradient-text",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[#587487]">{description}</p>
      ) : null}
    </div>
  );
}
