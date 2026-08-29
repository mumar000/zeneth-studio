import ContactSection from "../sections/contact/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Start a Project",
  description:
    "Tell Nymbor what you are building. Share your brand, interface, or website brief and receive a considered next step from the studio.",
  path: "/contact",
  eyebrow: "Project enquiries",
  imageAlt: "Start a brand, interface, or website project with Nymbor",
});

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <ContactSection />
    </main>
  );
}
