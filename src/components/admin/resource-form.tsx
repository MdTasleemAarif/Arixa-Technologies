import { createAdminRecord } from "@/app/admin/actions";
import type { AdminResource } from "@/config/admin-resources";

export function ResourceForm({
  resourceKey,
  resource,
}: {
  resourceKey: string;
  resource: AdminResource;
}) {
  if (resource.readonly || !resource.fields.length) {
    return null;
  }

  const action = createAdminRecord.bind(null, resourceKey);

  return (
    <form action={action} className="grid gap-4 rounded-lg border border-white/[0.08] bg-white/[0.03] p-5">
      <h2 className="text-lg font-semibold text-white">Create {resource.label}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {resource.fields.map((field) => {
          const commonClass =
            "rounded-lg border border-white/[0.08] bg-[#12091c] px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 focus:ring-1 focus:ring-violet-300/40";

          return (
            <label
              key={field.name}
              className={field.type === "textarea" || field.type === "lines" || field.type === "faqs" ? "grid gap-2 text-sm font-medium text-slate-200 md:col-span-2" : "grid gap-2 text-sm font-medium text-slate-200"}
            >
              {field.label}
              {field.type === "textarea" || field.type === "lines" || field.type === "faqs" ? (
                <textarea
                  name={field.name}
                  required={field.required}
                  rows={field.type === "textarea" ? 6 : 4}
                  placeholder={field.placeholder}
                  className={commonClass}
                />
              ) : field.type === "select" ? (
                <select name={field.name} className={commonClass} defaultValue={field.options?.[0] || ""}>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "boolean" ? (
                <input name={field.name} type="checkbox" className="h-5 w-5 rounded border-white/10 bg-[#10121d]" />
              ) : field.type === "file" ? (
                <input
                  name={field.name}
                  type="file"
                  accept="image/webp,image/png,image/jpeg,image/svg+xml"
                  className="rounded-lg border border-white/[0.08] bg-[#12091c] px-3 py-2 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-violet-500/18 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-violet-100 hover:file:bg-violet-500/28"
                />
              ) : (
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  className={commonClass}
                />
              )}
              {field.help ? <span className="text-xs font-normal text-slate-500">{field.help}</span> : null}
            </label>
          );
        })}
      </div>
      <button type="submit" className="btn-glow h-11 rounded-lg px-5 text-sm font-semibold text-[#15091f] transition focus:outline-none focus:ring-2 focus:ring-violet-300">
        Save
      </button>
    </form>
  );
}
