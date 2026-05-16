export function ResourceTable({
  rows,
  fields,
}: {
  rows: Record<string, unknown>[];
  fields: string[];
}) {
  return (
    <div className="overflow-hidden rounded-md border border-teal-500/20 bg-white/65">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10 text-sm">
          <thead className="bg-white/70 text-left text-[#365b70]">
            <tr>
              {fields.map((field) => (
                <th key={field} className="px-4 py-3 font-semibold">
                  {field.replace(/_/g, " ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.length ? (
              rows.map((row, index) => (
                <tr key={String(row.id || row.slug || row.key || index)} className="text-[#365b70]">
                  {fields.map((field) => (
                    <td key={field} className="max-w-xs truncate px-4 py-3">
                      {formatValue(row[field])}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={fields.length} className="px-4 py-8 text-center text-[#6d8797]">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function formatValue(value: unknown) {
  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (value === null || typeof value === "undefined") {
    return "-";
  }

  return String(value);
}
