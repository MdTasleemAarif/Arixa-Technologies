import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { ResourceForm } from "@/components/admin/resource-form";
import { ResourceTable } from "@/components/admin/resource-table";
import { adminResources, type AdminResourceKey } from "@/config/admin-resources";
import { listAdminRows } from "@/lib/admin-data";
import { requireAdmin } from "@/lib/supabase/server";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ resource: string }>;
};

export async function generateStaticParams() {
  return Object.keys(adminResources).map((resource) => ({ resource }));
}

export async function generateMetadata({ params }: Props) {
  const { resource: key } = await params;
  const resource = adminResources[key as AdminResourceKey];

  return createMetadata({
    title: resource?.label || "Admin Resource",
    description: resource?.description || "Arixa Technologies CMS resource.",
    path: `/admin/${key}`,
    noIndex: true,
  });
}

export default async function AdminResourcePage({ params }: Props) {
  const { resource: key } = await params;
  const resourceKey = key as AdminResourceKey;
  const resource = adminResources[resourceKey];

  if (!resource) {
    notFound();
  }

  const user = await requireAdmin();
  const rows = await listAdminRows(resourceKey);

  return (
    <AdminShell
      title={resource.label}
      description={resource.description}
      localPreview={user.isLocalPreview}
    >
      <div className="grid gap-8">
        <ResourceForm resourceKey={resourceKey} resource={resource} />
        <ResourceTable rows={rows} fields={resource.listFields} />
      </div>
    </AdminShell>
  );
}
