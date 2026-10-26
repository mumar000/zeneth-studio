import BookingCta from "@/components/services/brand-identity/booking-cta";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

const title = "Book a Call";
const description = "Book a 30-minute call with Nymbor. Tell us what you're building, your brand, interface or website, and we'll map the next step together.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/contact",
  eyebrow: "Book a call",
  imageAlt: "Book a call with Nymbor about your brand, interface, or website",
});

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#faf7ff]">
      <JsonLd data={[
        webPageSchema({ name: title, description, path: "/contact", type: "ContactPage" }),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
      ]} />
      <link rel="preconnect" href="https://assets.calendly.com" />
      <BookingCta
        headingAs="h1"
        eyebrow="Contact"
        heading="Have a project in mind?"
        accent="Let's talk."
        description="Pick a time for a 30-minute call. Tell us what you're building, and we'll map the next step together."
        className="pb-16 pt-28 md:pb-24 md:pt-32"
      >
        <p className="mt-6 text-center text-[15px] text-white/80 md:mt-8">
          Prefer email?{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-[700] text-white underline decoration-white/40 decoration-2 underline-offset-[3px] transition-colors hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e142c]"
          >
            {siteConfig.email}
          </a>
        </p>
      </BookingCta>
    </main>
  );
}
