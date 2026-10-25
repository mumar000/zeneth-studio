import AboutHero from "@/components/about/about-hero";
import ClientBase from "@/components/about/client-base";
import BookingCta from "@/components/services/brand-identity/booking-cta";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

const title = "About Muhammad Umair & the Studio";
const description = "Nymbor is a founder-led brand and website studio run by Muhammad Umair. Meet the founder, see where our clients are, and book a call.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/about",
  eyebrow: "Founder-led brand and website studio",
  imageAlt: "Muhammad Umair, founder of Nymbor",
});

export default function AboutPage() {
  return <>
    <JsonLd data={[
      webPageSchema({ name: title, description, path: "/about", type: "AboutPage", mainEntity: { "@id": `${siteConfig.url}/#organization` } }),
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About Nymbor", path: "/about" }]),
    ]} />
    <link rel="preconnect" href="https://assets.calendly.com" />
    <main id="main-content" className="overflow-x-clip bg-[#faf7ff] text-[#1a1a1a]">
      <AboutHero />
      <ClientBase />
      <BookingCta
        eyebrow="Meet the founder"
        heading="Let's talk"
        accent="about your project."
        description="Book a 30-minute call with Muhammad Umair. Tell us what you're building, and we'll map the next step together."
      />
    </main>
  </>;
}
