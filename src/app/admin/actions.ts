"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminResources, type AdminField, type AdminResource, type AdminResourceKey } from "@/config/admin-resources";
import { linesToArray } from "@/lib/utils";
import {
  createSupabaseAdminClient,
  createSupabaseServerClient,
  requireAdmin,
} from "@/lib/supabase/server";

function getResource(key: string) {
  return adminResources[key as AdminResourceKey] as AdminResource | undefined;
}

function parseFaqs(value: FormDataEntryValue | null) {
  return String(value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [question, ...answerParts] = line.split("|");
      return {
        question: question?.trim(),
        answer: answerParts.join("|").trim(),
      };
    })
    .filter((item) => item.question && item.answer);
}

function parseField(field: AdminField, formData: FormData) {
  const value = formData.get(field.name);

  if (field.type === "boolean") {
    return formData.get(field.name) === "on";
  }

  if (field.type === "lines") {
    return linesToArray(value);
  }

  if (field.type === "faqs") {
    return parseFaqs(value);
  }

  if (field.type === "number") {
    const numberValue = Number(value || 0);
    return Number.isFinite(numberValue) ? numberValue : 0;
  }

  if (field.type === "date") {
    const date = String(value || "").trim();
    return date ? new Date(date).toISOString() : null;
  }

  if (field.type === "file") {
    return undefined;
  }

  const text = String(value || "").trim();
  return text.length ? text : null;
}

export async function signInAdmin(formData: FormData) {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    redirect("/admin?setup=required");
  }

  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect("/admin/login?error=invalid");
  }

  redirect("/admin");
}

export async function signOutAdmin() {
  const supabase = await createSupabaseServerClient();
  await supabase?.auth.signOut();
  redirect("/admin/login");
}

export async function createAdminRecord(resourceKey: string, formData: FormData) {
  await requireAdmin();
  const resource = getResource(resourceKey);

  if (!resource || resource.readonly) {
    redirect(`/admin/${resourceKey}?error=readonly`);
  }

  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    redirect(`/admin/${resourceKey}?setup=required`);
  }

  const record: Record<string, unknown> = {};

  for (const field of resource.fields) {
    const parsed = parseField(field, formData);
    if (typeof parsed !== "undefined") {
      record[field.name] = parsed;
    }
  }

  if ("status" in record && !record.status) {
    record.status = "draft";
  }

  if (resourceKey === "media") {
    const file = formData.get("file");
    const admin = createSupabaseAdminClient();

    if (file && typeof file === "object" && "size" in file && admin) {
      const mediaFile = file as File;
      const allowedTypes = ["image/webp", "image/png", "image/jpeg", "image/svg+xml"];

      if (mediaFile.size > 0 && mediaFile.size <= 5 * 1024 * 1024 && allowedTypes.includes(mediaFile.type)) {
        const safeName = mediaFile.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
        const path = `uploads/${Date.now()}-${safeName}`;
        const { data } = await admin.storage.from("site-media").upload(path, mediaFile, {
          contentType: mediaFile.type,
          upsert: false,
        });

        if (data?.path) {
          record.file_path = data.path;
          record.storage_bucket = "site-media";
          record.mime_type = mediaFile.type;
          record.size_bytes = mediaFile.size;
        }
      }
    }
  }

  const { error } = await supabase.from(resource.table).insert(record);

  if (error) {
    redirect(`/admin/${resourceKey}?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath(`/admin/${resourceKey}`);
  revalidatePath("/");
  redirect(`/admin/${resourceKey}?created=1`);
}

export async function updateRecordStatus(resourceKey: string, id: string, status: string) {
  await requireAdmin();
  const resource = getResource(resourceKey);
  const supabase = await createSupabaseServerClient();

  if (!resource || !supabase) {
    redirect(`/admin/${resourceKey}`);
  }

  await supabase.from(resource.table).update({ status }).eq("id", id);
  revalidatePath(`/admin/${resourceKey}`);
}
