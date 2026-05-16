import Link from "next/link";
import { ArrowRight, FileText, Inbox, Layers3, Settings, Users } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { adminNav } from "@/config/admin-resources";
import { getAdminDashboardStats } from "@/lib/admin-data";
import { requireAdmin } from "@/lib/supabase/server";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Admin Dashboard",
  description: "Arixa Technologies CMS dashboard.",
  path: "/admin",
  noIndex: true,
});

export default async function AdminDashboardPage() {
  const user = await requireAdmin();
  const stats = await getAdminDashboardStats();

  const cards = [
    { label: "Blog posts", value: stats.posts, icon: FileText },
    { label: "Services", value: stats.services, icon: Layers3 },
    { label: "Portfolio", value: stats.portfolio, icon: Settings },
    { label: "Leads", value: stats.leads, icon: Inbox },
    { label: "Applications", value: stats.applications, icon: Users },
  ];

  return (
    <AdminShell
      title="Dashboard"
      description={`Signed in as ${user.email || "admin"}. Manage website content, leads, media, SEO settings, and publishing workflows.`}
      localPreview={stats.localPreview}
    >
      <div className="grid gap-4 md:grid-cols-5">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="rounded-md border border-teal-500/20 bg-white/70 p-5">
              <Icon size={20} className="text-[#087987]" aria-hidden="true" />
              <p className="mt-4 text-3xl font-semibold">{card.value}</p>
              <p className="mt-1 text-sm text-[#587487]">{card.label}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {adminNav.map((item) => (
          <Link key={item.href} href={item.href} className="group card-hover rounded-lg border border-teal-500/20 bg-white/65 p-5 transition hover:border-teal-300/30 hover:bg-white/85">
            <span className="flex items-center justify-between gap-4">
              <span className="text-lg font-semibold text-[#07304d]">{item.label}</span>
              <ArrowRight size={18} className="text-[#6d8797] transition group-hover:text-[#07304d]" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}

