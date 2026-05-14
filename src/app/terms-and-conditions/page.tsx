import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description: "Terms and Conditions for using the Arixa Technologies website.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Terms and Conditions", url: "/terms-and-conditions" },
        ])}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={[{ label: "Terms", href: "/terms-and-conditions" }]} />
          <div className="mt-10">
            <SectionHeading
              eyebrow="Legal"
              title="Terms and Conditions"
              description={`These starter terms describe general use of the ${siteConfig.name} website and should be reviewed before production launch.`}
            />
          </div>
          <div className="mt-10 space-y-8 rounded-md border border-white/10 bg-white/[0.04] p-6 text-sm leading-8 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-white">Website use</h2>
              <p className="mt-3">
                This website provides information about Arixa Technologies services, content, pricing ranges, career opportunities, and contact methods.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Project discussions</h2>
              <p className="mt-3">
                Form submissions and pricing ranges do not create a binding contract. Final scope, timeline, payment terms, and deliverables should be confirmed in a written proposal or agreement.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Content</h2>
              <p className="mt-3">
                Starter portfolio, testimonials, and blog entries are placeholders until replaced with real business content from the CMS.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Contact</h2>
              <p className="mt-3">
                Questions about these terms can be sent to {siteConfig.email}. Replace this starter page with counsel-approved legal text before launch.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
