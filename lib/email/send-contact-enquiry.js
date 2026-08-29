import ContactEnquiryEmail from "@/emails/contact-enquiry-email";
import { Resend } from "resend";

const CONTACT_RECIPIENT = "contact@nymbor.com";
const DEFAULT_FROM_EMAIL = "Nymbor Website <contact@nymbor.com>";

export class ContactEmailConfigurationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ContactEmailConfigurationError";
  }
}

function getEmailConfiguration() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new ContactEmailConfigurationError("RESEND_API_KEY is missing.");
  }

  return {
    apiKey,
    from: process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL,
  };
}

function createPlainTextEmail(submission) {
  return [
    "New Nymbor project enquiry",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone || "Not provided"}`,
    `Company: ${submission.companyName || "Not provided"}`,
    `Services: ${submission.services.join(", ")}`,
    `Project type: ${submission.projectType || "Not provided"}`,
    `Budget: ${submission.budget || "Not provided"}`,
    "",
    "Project details",
    submission.projectDetails,
  ].join("\n");
}

export async function sendContactEnquiry(submission) {
  const { apiKey, from } = getEmailConfiguration();
  const resend = new Resend(apiKey);
  const subjectName = submission.companyName || submission.name;

  const { data, error } = await resend.emails.send({
    from,
    to: [CONTACT_RECIPIENT],
    replyTo: submission.email,
    subject: `New Nymbor project enquiry: ${subjectName}`,
    react: ContactEnquiryEmail({ submission }),
    text: createPlainTextEmail(submission),
  });

  if (error) {
    throw new Error(error.message || "Resend rejected the email request.");
  }

  if (!data?.id) {
    throw new Error("Resend did not return an email ID.");
  }

  return data.id;
}
