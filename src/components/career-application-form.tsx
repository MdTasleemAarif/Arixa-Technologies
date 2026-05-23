import { Upload } from "lucide-react";
import { submitCareerApplication } from "@/app/actions";

export function CareerApplicationForm({ jobSlug }: { jobSlug: string }) {
  return (
    <form
      action={submitCareerApplication}
      className="grid gap-4 rounded-lg border border-teal-500/20 bg-white/65 p-5 sm:p-6"
    >
      <input type="hidden" name="jobSlug" value={jobSlug} />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" name="phone" />
      </div>
      <label className="grid gap-2 text-sm font-medium text-[#173f5f]">
        Resume
        <input
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="rounded-lg border border-teal-500/20 bg-[#fff4e1] px-3 py-3 text-sm text-[#365b70] file:mr-4 file:rounded-lg file:border-0 file:bg-teal-500/18 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-[#087987] hover:file:bg-teal-500/28"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[#173f5f]">
        Why are you a fit?
        <textarea
          name="message"
          required
          rows={5}
          minLength={10}
          className="rounded-lg border border-teal-500/20 bg-[#fff4e1] px-3 py-3 text-sm text-[#07304d] outline-none transition placeholder:text-[#6d8797] focus:border-teal-300/60 focus:ring-1 focus:ring-teal-300/40"
        />
      </label>
      <button
        type="submit"
        className="btn-glow inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-[#07304d] transition focus:outline-none focus:ring-2 focus:ring-teal-300"
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
    <label className="grid gap-2 text-sm font-medium text-[#173f5f]">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="h-11 rounded-lg border border-teal-500/20 bg-[#fff4e1] px-3 text-sm text-[#07304d] outline-none transition placeholder:text-[#6d8797] focus:border-teal-300/60 focus:ring-1 focus:ring-teal-300/40"
      />
    </label>
  );
}
