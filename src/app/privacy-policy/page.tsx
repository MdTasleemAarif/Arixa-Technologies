import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createPageMetadata({
    title: "Privacy Policy",
    description: "Privacy Policy for Arixa Technologies website visitors, leads, applicants, and CMS users.",
    path: "/privacy-policy",
  });
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy-policy" },
        ])}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />
          <div className="mt-10">
            <SectionHeading
              eyebrow="Legal"
              title="Privacy Policy"
              description={`This starter policy explains how ${siteConfig.name} handles website enquiries, career applications, newsletter submissions, and analytics placeholders.`}
            />
          </div>
          <div className="mt-10 space-y-8 rounded-md border border-teal-500/20 bg-white/70 p-6 text-sm leading-8 text-[#365b70]">
            <section>
              <h2 className="text-xl font-semibold text-[#07304d]">Information we collect</h2>
              <p className="mt-3">
                We may collect your name, email, phone number, company name, project details, budget range, career application details, resume file path, and newsletter email when you submit forms on this website.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[#07304d]">How we use information</h2>
              <p className="mt-3">
                We use submitted information to respond to enquiries, review applications, manage leads, improve services, and maintain website operations.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[#07304d]">Storage and security</h2>
              <p className="mt-3">
                The application is designed for Supabase PostgreSQL and Supabase Storage initially. Production deployments should use HTTPS, protected admin access, secure environment variables, RLS policies, and file validation.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[#07304d]">Contact</h2>
              <p className="mt-3">
                For privacy questions, contact {siteConfig.email}. Replace this starter policy with legal counsel-approved text before launch.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
