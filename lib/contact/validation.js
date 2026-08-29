const SERVICE_OPTIONS = new Set([
  "Brand Identity",
  "Interface Design",
  "Web Development",
  "Not sure yet",
]);

const PROJECT_TYPES = new Set([
  "New brand",
  "Rebrand",
  "New website",
  "Website redesign",
  "Ongoing support",
]);

const BUDGET_OPTIONS = new Set([
  "$1K–$2K",
  "$4K–$8K",
  "$10K–$20K",
  "Not sure yet",
]);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MINIMUM_FILL_TIME_MS = 1_500;
const MAXIMUM_FILL_TIME_MS = 24 * 60 * 60 * 1_000;

export function cleanContactText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export function isValidSubmissionTiming(value) {
  const startedAt = Number(value);
  const elapsed = Date.now() - startedAt;

  return (
    Number.isFinite(startedAt) &&
    elapsed >= MINIMUM_FILL_TIME_MS &&
    elapsed <= MAXIMUM_FILL_TIME_MS
  );
}

export function validateContactSubmission(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return null;
  }

  const submission = {
    name: cleanContactText(payload.name, 100),
    email: cleanContactText(payload.email, 200).toLowerCase(),
    phone: cleanContactText(payload.phone, 50),
    companyName: cleanContactText(payload.companyName, 150),
    services: Array.isArray(payload.services)
      ? [...new Set(payload.services)]
          .filter((service) => SERVICE_OPTIONS.has(service))
          .slice(0, SERVICE_OPTIONS.size)
      : [],
    projectType: cleanContactText(payload.projectType, 80),
    budget: cleanContactText(payload.budget, 40),
    projectDetails: cleanContactText(payload.projectDetails, 2_000),
  };

  const isInvalid =
    submission.name.length < 2 ||
    !EMAIL_PATTERN.test(submission.email) ||
    (submission.phone && submission.phone.replace(/\D/g, "").length < 7) ||
    submission.services.length === 0 ||
    (submission.projectType && !PROJECT_TYPES.has(submission.projectType)) ||
    (submission.budget && !BUDGET_OPTIONS.has(submission.budget)) ||
    submission.projectDetails.length < 10;

  return isInvalid ? null : submission;
}
