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
    <form action={action} className="grid gap-4 rounded-lg border border-teal-500/20 bg-white/65 p-5">
      <h2 className="text-lg font-semibold text-[#07304d]">Create {resource.label}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {resource.fields.map((field) => {
          const commonClass =
            "rounded-lg border border-teal-500/20 bg-[#fff4e1] px-3 py-2 text-sm text-[#07304d] outline-none transition placeholder:text-[#6d8797] focus:border-teal-300/60 focus:ring-1 focus:ring-teal-300/40";

          return (
            <label
              key={field.name}
              className={field.type === "textarea" || field.type === "lines" || field.type === "faqs" ? "grid gap-2 text-sm font-medium text-[#173f5f] md:col-span-2" : "grid gap-2 text-sm font-medium text-[#173f5f]"}
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
                <input name={field.name} type="checkbox" className="h-5 w-5 rounded border-teal-500/20 bg-white accent-[#0797a5]" />
              ) : field.type === "file" ? (
                <input
                  name={field.name}
                  type="file"
                  accept="image/webp,image/png,image/jpeg,image/svg+xml"
                  className="rounded-lg border border-teal-500/20 bg-[#fff4e1] px-3 py-2 text-sm text-[#365b70] file:mr-4 file:rounded-lg file:border-0 file:bg-teal-500/18 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-[#087987] hover:file:bg-teal-500/28"
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
              {field.help ? <span className="text-xs font-normal text-[#6d8797]">{field.help}</span> : null}
            </label>
          );
        })}
      </div>
      <button type="submit" className="btn-glow h-11 rounded-lg px-5 text-sm font-semibold text-[#07304d] transition focus:outline-none focus:ring-2 focus:ring-teal-300">
        Save
      </button>
    </form>
  );
}
