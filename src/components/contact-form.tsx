import { Send } from "lucide-react";
import { submitContact } from "@/app/actions";
import { services } from "@/data/site-data";

export function ContactForm() {
  return (
    <form action={submitContact} className="grid gap-5 rounded-lg border border-white/[0.08] bg-white/[0.03] p-6 sm:p-7">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Your full name" />
        <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" placeholder="+91 98765 43210" />
        <Field label="Company" name="company" placeholder="Company name" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField label="Service" name="service">
          <option value="" disabled>Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </SelectField>
        <SelectField label="Budget" name="budget">
          <option value="" disabled>Select a range</option>
          <option>Below Rs 50,000</option>
          <option>Rs 50,000 - Rs 1,50,000</option>
          <option>Rs 1,50,000 - Rs 5,00,000</option>
          <option>Rs 5,00,000+</option>
          <option>Need guidance</option>
        </SelectField>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Project details
        <textarea
          name="message"
          required
          rows={5}
          minLength={10}
          className="resize-none rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 focus:bg-white/[0.07] focus:ring-1 focus:ring-violet-300/40"
          placeholder="Tell us what you want to build, improve, or automate."
        />
      </label>
      <button
        type="submit"
        className="btn-glow inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-[#15091f] focus:outline-none focus:ring-2 focus:ring-violet-300"
      >
        Send Enquiry <Send size={17} aria-hidden="true" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      {required && <span className="sr-only"> (required)</span>}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60 focus:bg-white/[0.07] focus:ring-1 focus:ring-violet-300/40"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <select
        name={name}
        defaultValue=""
        className="h-11 rounded-lg border border-white/[0.08] bg-[#12091c] px-4 text-sm text-white outline-none transition focus:border-violet-300/60 focus:ring-1 focus:ring-violet-300/40"
      >
        {children}
      </select>
    </label>
  );
}
