import ContactSection from "../sections/contact/contact";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";

const title = "Start a Project";
const description = "Tell Nymbor what you are building. Share your brand, interface, or website brief and receive a considered next step from the studio.";

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
