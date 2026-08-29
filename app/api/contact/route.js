import {
  getClientIp,
  isContactSubmissionRateLimited,
} from "@/lib/contact/rate-limit";
import {
  cleanContactText,
  isValidSubmissionTiming,
  validateContactSubmission,
} from "@/lib/contact/validation";
import {
  ContactEmailConfigurationError,
  sendContactEnquiry,
} from "@/lib/email/send-contact-enquiry";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 20_000;

function jsonError(message, status, headers) {
  return Response.json({ message }, { status, headers });
}

export async function POST(request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return jsonError("Unsupported request format.", 415);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return jsonError("Request is too large.", 413);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonError("Invalid request.", 400);
  }

  // Quietly accept honeypot submissions so bots receive no useful signal.
  if (cleanContactText(payload?.website, 200)) {
    return Response.json({ ok: true });
  }

  if (!isValidSubmissionTiming(payload?.startedAt)) {
    return jsonError("Please take a moment to review your details.", 400);
  }

  const clientIp = getClientIp(request);
  if (isContactSubmissionRateLimited(clientIp)) {
    return jsonError(
      "Too many attempts. Please wait a few minutes and try again.",
      429,
      { "Retry-After": "600" },
    );
  }

  const submission = validateContactSubmission(payload);
  if (!submission) {
    return jsonError(
      "Please review the form and complete every required field.",
      400,
    );
  }

  try {
    const emailId = await sendContactEnquiry(submission);
    return Response.json({ ok: true, id: emailId });
  } catch (error) {
    if (error instanceof ContactEmailConfigurationError) {
      console.error("Contact email is not configured:", error.message);
      return jsonError("Email delivery is not configured yet.", 503);
    }

    console.error("Contact email delivery failed:", error);
    return jsonError(
      "Email delivery failed. Please try again shortly.",
      502,
    );
  }
}
