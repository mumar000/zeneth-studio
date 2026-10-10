import LegalPage from "@/components/legal/legal-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Privacy Policy", description: "How Nymbor handles website enquiries and contact information.", path: "/privacy" });

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" intro="This notice explains how information submitted through the Nymbor website is handled. For questions about your information, contact the studio using the email below." sections={[
    { heading: "Information you provide", body: "Our project enquiry form collects your name, email address, selected services and project brief. You can also provide a phone number, company name and budget range. Please avoid including passwords, payment details or other sensitive information in your brief." },
    { heading: "How your enquiry is used", body: "Your submission is sent to the Nymbor contact inbox so the studio can review your project and respond. Submitting this form does not subscribe you to a mailing list. The form also checks submission timing and uses an IP-based request limit to reduce spam." },
    { heading: "Email delivery and service providers", body: <>Nymbor uses Resend to deliver form submissions to its inbox. Email and website infrastructure providers process information needed to deliver and operate these services. Resend describes its handling of information, including international processing, in its <a className="text-primary underline underline-offset-4" href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>.</> },
    { heading: "Storage and requests", body: "Enquiries are delivered by email and may remain in the studio’s email records and delivery provider’s records. To ask about information held about you, request a correction or request deletion, email contact@nymbor.com. Please identify the email address you used for your enquiry." },
    { heading: "Website media and external links", body: "Portfolio images and videos are served as website assets. Links to client websites and social profiles take you to services with their own privacy practices. Review their notices when you visit them." },
    { heading: "Updates", body: "This notice may change when the website’s information handling changes. The date at the top identifies the latest update." },
  ]} />;
}
