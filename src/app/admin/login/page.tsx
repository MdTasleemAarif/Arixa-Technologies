import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import { signInAdmin } from "@/app/admin/actions";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Admin Login",
  description: "Secure Arixa Technologies CMS login.",
  path: "/admin/login",
  noIndex: true,
});

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-[#fff8ea] px-4 py-20 text-[#07304d] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-md border border-teal-500/20 bg-white/70 p-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-teal-500/10 text-[#087987]">
          <LockKeyhole size={22} aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-3xl font-semibold tracking-normal">Arixa CMS login</h1>
        <p className="mt-3 text-sm leading-7 text-[#587487]">
          Sign in with a Supabase user that has an admin or editor role in the profiles table.
        </p>
        <form action={signInAdmin} className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-medium text-[#173f5f]">
            Email
            <input
              name="email"
              type="email"
              required
              className="h-11 rounded-md border border-teal-500/20 bg-[#fff4e1] px-3 text-sm text-[#07304d] outline-none transition focus:border-teal-300/60"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-[#173f5f]">
            Password
            <input
              name="password"
              type="password"
              required
              className="h-11 rounded-md border border-teal-500/20 bg-[#fff4e1] px-3 text-sm text-[#07304d] outline-none transition focus:border-teal-300/60"
            />
          </label>
          <button className="h-11 rounded-md bg-gradient-to-r from-teal-500 via-orange-400 to-cyan-400 px-4 text-sm font-semibold text-[#07304d] transition hover:saturate-125">
            Sign in
          </button>
        </form>
        <Link href="/" className="mt-5 inline-block text-sm text-[#587487] transition hover:text-[#07304d]">
          Back to website
        </Link>
      </div>
    </main>
  );
}

