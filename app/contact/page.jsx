import ContactSection from "../sections/contact/contact";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";

const title = "Start a Project — Bring Us Your Next Big Move";
const description = "A new brand, a better website, or a build waiting to happen. Tell Nymbor what you have in mind, your budget and your timeline. We’ll help define the next step.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/contact",
  eyebrow: "Project enquiries",
  imageAlt: "Start a brand, interface, or website project with Nymbor",
});

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <JsonLd data={[
        webPageSchema({ name: title, description, path: "/contact", type: "ContactPage" }),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
      ]} />
      <ContactSection />
    </main>
  );
}
