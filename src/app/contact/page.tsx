import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { ImageSlot } from "@/components/image-slot";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import { siteAssets } from "@/config/site-assets";
import { breadcrumbSchema, createMetadata, organizationSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Arixa Technologies for website development, web app development, SEO services, e-commerce, custom software, branding, and AI automation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
        ]}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
          <div className="mt-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left col */}
            <AnimateIn variant="left">
              <div>
                <SectionHeading
                  eyebrow="Contact"
                  title="Tell us what you want to build."
                  description="Share your project goal, service need, budget range, and timeline. Your enquiry is saved to the database when Supabase is configured."
                />
                <div className="mt-8 grid gap-3">
                  <Info icon={Mail} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} color="text-violet-300 bg-violet-500/10" />
                  <Info icon={Phone} label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone}`} color="text-fuchsia-200 bg-fuchsia-400/10" />
                  <Info icon={MessageCircle} label="WhatsApp" value="Message Arixa Technologies" href={`https://wa.me/${siteConfig.whatsapp}`} color="text-purple-400 bg-purple-500/10" />
                  <Info icon={MapPin} label="Address" value={siteConfig.address} color="text-cyan-400 bg-cyan-500/10" />
                  <Info icon={Clock} label="Business Hours" value={siteConfig.hours} color="text-indigo-300 bg-indigo-500/10" />
                </div>
                <div className="mt-8">
                  <ImageSlot src={siteAssets.contact.src} alt={siteAssets.contact.alt} width={siteAssets.contact.width} height={siteAssets.contact.height} />
                </div>
              </div>
            </AnimateIn>

            <AnimateIn variant="right">
              <div>
                <ContactForm />
                <div className="mt-6 rounded-lg border border-white/[0.08] bg-white/[0.03] p-5">
                  <h2 className="text-base font-semibold text-white">Find us</h2>
                  <div className="mt-4 flex h-52 items-center justify-center rounded-lg border border-white/[0.07] bg-[linear-gradient(135deg,rgba(139,92,246,0.1),rgba(232,121,249,0.07),rgba(34,211,238,0.1))] text-sm text-slate-400">
                    <span className="flex max-w-xs flex-col items-center gap-3 text-center">
                      <MapPin className="text-cyan-200" size={26} aria-hidden="true" />
                      Office location
                      <span className="text-xs text-slate-500">{siteConfig.address}</span>
                    </span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  href,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  color: string;
}) {
  const [iconColor, iconBg] = color.split(" ");
  const content = (
    <span className="card-hover flex gap-4 rounded-lg border border-white/[0.08] bg-white/[0.03] p-4">
      <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon className={iconColor} size={18} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</span>
        <span className="mt-1 block text-sm font-medium text-slate-200">{value}</span>
      </span>
    </span>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
