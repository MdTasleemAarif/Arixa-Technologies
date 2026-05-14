import { Upload } from "lucide-react";
import { submitCareerApplication } from "@/app/actions";

export function CareerApplicationForm({ jobSlug }: { jobSlug: string }) {
  return (
    <form
      action={submitCareerApplication}
      className="grid gap-4 rounded-lg border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6"
    >
      <input type="hidden" name="jobSlug" value={jobSlug} />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" name="phone" />
        <Field label="Portfolio URL" name="portfolioUrl" type="url" />
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Resume
        <input
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="rounded-lg border border-white/[0.08] bg-[#12091c] px-3 py-3 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-violet-500/18 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-violet-100 hover:file:bg-violet-500/28"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Why are you a fit?
        <textarea
          name="message"
          required
          rows={5}
          minLength={10}
          className="rounded-lg border border-white/[0.08] bg-[#12091c] px-3 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 focus:ring-1 focus:ring-violet-300/40"
        />
      </label>
      <button
        type="submit"
        className="btn-glow inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-[#15091f] transition focus:outline-none focus:ring-2 focus:ring-violet-300"
      >
        Apply Now <Upload size={18} aria-hidden="true" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="h-11 rounded-lg border border-white/[0.08] bg-[#12091c] px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 focus:ring-1 focus:ring-violet-300/40"
      />
    </label>
  );
}
