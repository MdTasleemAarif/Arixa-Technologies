import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { adminNav } from "@/config/admin-resources";
import { signOutAdmin } from "@/app/admin/actions";

export function AdminShell({
  children,
  title,
  description,
  localPreview = false,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
  localPreview?: boolean;
}) {
  return (
    <div className="min-h-screen bg-[#070812] text-white">
      <header className="border-b border-white/10 bg-[#0c0e18]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/admin" className="inline-flex items-center gap-2 font-semibold">
            <ShieldCheck size={20} aria-hidden="true" />
            Arixa CMS
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-slate-300 transition hover:text-white">
              View site
            </Link>
            <form action={signOutAdmin}>
              <button className="rounded-md border border-white/15 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>
      {localPreview ? (
        <div className="border-b border-fuchsia-200/20 bg-fuchsia-300/10 px-4 py-3 text-center text-sm text-fuchsia-100">
          Supabase environment variables are not configured. The admin UI is visible for local preview, but writes require Supabase credentials.
        </div>
      ) : null}
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="h-max rounded-md border border-white/10 bg-white/[0.04] p-3">
          <nav className="grid gap-1">
            <Link href="/admin" className="rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10">
              Dashboard
            </Link>
            {adminNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main>
          <div className="mb-6">
            <h1 className="text-3xl font-semibold tracking-normal">{title}</h1>
            {description ? <p className="mt-2 text-sm leading-7 text-slate-400">{description}</p> : null}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
