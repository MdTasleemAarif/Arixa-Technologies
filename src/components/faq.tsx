import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/data/site-data";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-teal-500/20 bg-white/65 divide-y divide-white/[0.07]">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left text-base font-semibold text-[#07304d] transition hover:bg-white/70">
            {item.question}
            <ChevronDown
              size={18}
              className="shrink-0 text-[#c25231] transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="overflow-hidden">
            <p className="px-5 pb-5 pt-1 text-sm leading-7 text-[#365b70]">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
