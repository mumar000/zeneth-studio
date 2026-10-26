import LegalPage from "@/components/legal/legal-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Website Terms", description: "The terms for using the Nymbor website, booking a call and making project enquiries about brand identity, interface design and web development.", path: "/terms" });

export default function TermsPage() {
  return <LegalPage title="Website Terms" intro="These terms describe use of Nymbor’s portfolio website and project enquiry form. The details of a paid engagement are agreed separately with the studio." sections={[
    { heading: "Project enquiries", body: "Sending a brief starts a conversation. It does not reserve studio availability or create a project agreement. Scope, deliverables, timing, fees and payment arrangements are confirmed separately before work begins. Budget selections on the form are enquiry ranges, not quotations." },
    { heading: "Portfolio and creative work", body: "The website presents Nymbor’s work alongside client brands, images and other materials. Ownership remains with the respective rights holders. Display on this website does not grant permission to copy, redistribute or use those materials commercially. Contact the studio with permission requests." },
    { heading: "Using the website", body: "Use the enquiry form for relevant, accurate project information. Do not submit spam, malicious content, credentials or information you are not entitled to share, or attempt to disrupt the website." },
    { heading: "Client feedback and external websites", body: "Testimonials describe individual client experiences. Project outcomes depend on each engagement. Links to client websites and social profiles are provided for context; those websites operate independently of Nymbor." },
    { heading: "Questions and corrections", body: "If you find an issue with the website or have a question about its content, contact contact@nymbor.com. For handling of enquiry information, see the Privacy Policy." },
  ]} />;
}
