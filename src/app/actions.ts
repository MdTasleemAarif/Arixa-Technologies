"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { siteConfig } from "@/config/site";
import { contactSchema, careerApplicationSchema, newsletterSchema } from "@/lib/validators";
import {
  createSupabaseAdminClient,
  createSupabaseServerClient,
} from "@/lib/supabase/server";

function optionalString(value: FormDataEntryValue | null) {
  const text = String(value || "").trim();
  return text.length ? text : undefined;
}

async function sendLeadEmail(subject: string, payload: Record<string, unknown>) {
  if (!process.env.RESEND_API_KEY || !process.env.LEAD_NOTIFICATION_EMAIL) {
    return;
  }

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.LEAD_EMAIL_FROM || `Arixa Website <noreply@${new URL(siteConfig.url).hostname}>`,
      to: [process.env.LEAD_NOTIFICATION_EMAIL],
      subject,
      text: Object.entries(payload)
        .map(([key, value]) => `${key}: ${String(value || "")}`)
        .join("\n"),
    }),
  });
}

export async function submitContact(formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: optionalString(formData.get("name")),
    email: optionalString(formData.get("email")),
    phone: optionalString(formData.get("phone")),
    company: optionalString(formData.get("company")),
    service: optionalString(formData.get("service")),
    budget: optionalString(formData.get("budget")),
    message: optionalString(formData.get("message")),
    website: optionalString(formData.get("website")) || "",
  });

  if (!parsed.success) {
    redirect("/contact?error=validation");
  }

  if (parsed.data.website) {
    redirect("/thank-you");
  }

  const supabase = await createSupabaseServerClient();

  if (supabase) {
    await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      company: parsed.data.company,
      service: parsed.data.service,
      budget: parsed.data.budget,
      message: parsed.data.message,
      source: "website_contact_form",
      status: "new",
    });
  }

  await sendLeadEmail("New Arixa Technologies website lead", parsed.data);
  revalidatePath("/admin/leads");
  redirect("/thank-you?type=contact");
}

export async function submitNewsletter(formData: FormData) {
  const parsed = newsletterSchema.safeParse({
    email: optionalString(formData.get("email")),
  });

  if (!parsed.success) {
    redirect("/blog?newsletter=invalid");
  }

  const supabase = await createSupabaseServerClient();

  if (supabase) {
    await supabase.from("newsletters").insert({
      email: parsed.data.email,
      source: "website_footer",
    });
  }

  redirect("/thank-you?type=newsletter");
}

export async function submitCareerApplication(formData: FormData) {
  const parsed = careerApplicationSchema.safeParse({
    jobSlug: optionalString(formData.get("jobSlug")),
    name: optionalString(formData.get("name")),
    email: optionalString(formData.get("email")),
    phone: optionalString(formData.get("phone")),
    portfolioUrl: optionalString(formData.get("portfolioUrl")) || "",
    message: optionalString(formData.get("message")),
    website: optionalString(formData.get("website")) || "",
  });

  if (!parsed.success) {
    redirect(`/careers/${String(formData.get("jobSlug") || "")}?error=validation`);
  }

  if (parsed.data.website) {
    redirect("/thank-you");
  }

  let resumeUrl: string | undefined;
  const resume = formData.get("resume");

  if (resume && typeof resume === "object" && "size" in resume) {
    const file = resume as File;
    const isAllowed =
      file.size > 0 &&
      file.size <= 5 * 1024 * 1024 &&
      [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type);

    const admin = createSupabaseAdminClient();
    if (isAllowed && admin) {
      const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
      const path = `${parsed.data.jobSlug}/${Date.now()}-${safeName}`;
      const { data } = await admin.storage
        .from("career-resumes")
        .upload(path, file, {
          contentType: file.type,
          upsert: false,
        });

      if (data?.path) {
        resumeUrl = data.path;
      }
    }
  }

  const supabase = await createSupabaseServerClient();

  if (supabase) {
    await supabase.from("career_applications").insert({
      career_slug: parsed.data.jobSlug,
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      portfolio_url: parsed.data.portfolioUrl || null,
      message: parsed.data.message,
      resume_url: resumeUrl,
      status: "new",
    });
  }

  await sendLeadEmail("New Arixa Technologies career application", parsed.data);
  revalidatePath("/admin/career-applications");
  redirect("/thank-you?type=career");
}
