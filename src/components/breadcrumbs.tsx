import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
      <Link href="/" className="transition hover:text-white">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.href} className="inline-flex items-center gap-2">
          <ChevronRight size={14} aria-hidden="true" />
          <Link href={item.href} className="transition hover:text-white">
            {item.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
