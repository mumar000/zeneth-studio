import nodemailer from "nodemailer";

export const runtime = "nodejs";

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
const BUDGET_OPTIONS = new Set(["$1K–$2K", "$4K–$8K", "$10K–$20K"]);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const DEFAULT_GMAIL_ADDRESS = "tomriddle2677@gmail.com";
const submissions = new Map();

function cleanText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getClientIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (submissions.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(ip, recent);
    return true;
  }

  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

function validatePayload(payload) {
  const data = {
    name: cleanText(payload.name, 100),
    email: cleanText(payload.email, 200).toLowerCase(),
    phone: cleanText(payload.phone, 50),
    companyName: cleanText(payload.companyName, 150),
    services: Array.isArray(payload.services)
      ? payload.services.filter((service) => SERVICE_OPTIONS.has(service)).slice(0, 4)
      : [],
    projectType: cleanText(payload.projectType, 80),
    budget: cleanText(payload.budget, 40),
    projectDetails: cleanText(payload.projectDetails, 2000),
  };

  const invalid =
    data.name.length < 2 ||
    !EMAIL_PATTERN.test(data.email) ||
    data.phone.replace(/\D/g, "").length < 7 ||
    data.companyName.length < 2 ||
    data.services.length === 0 ||
    !PROJECT_TYPES.has(data.projectType) ||
    !BUDGET_OPTIONS.has(data.budget) ||
    data.projectDetails.length < 20;

  return invalid ? null : data;
}

export async function POST(request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json(
      { message: "Unsupported request format." },
      { status: 415 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) {
    return Response.json({ message: "Request is too large." }, { status: 413 });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  // Honeypot submissions receive a neutral success response.
  if (cleanText(payload.website, 200)) {
    return Response.json({ ok: true });
  }

  const startedAt = Number(payload.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1500) {
    return Response.json(
      { message: "Please take a moment to review your details." },
      { status: 400 },
    );
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return Response.json(
      { message: "Too many attempts. Please wait a few minutes and try again." },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  const data = validatePayload(payload);
  if (!data) {
    return Response.json(
      { message: "Please review the form and complete every required field." },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER || DEFAULT_GMAIL_ADDRESS;
  const smtpPassword = process.env.SMTP_PASS;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;
  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_GMAIL_ADDRESS;

  if (!smtpPassword) {
    return Response.json(
      { message: "Email delivery is not configured yet." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === "true"
      : smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  const safe = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      Array.isArray(value) ? value.map(escapeHtml) : escapeHtml(value),
    ]),
  );

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `New Nymbor project enquiry — ${data.companyName}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Company: ${data.companyName}`,
        `Services: ${data.services.join(", ")}`,
        `Project type: ${data.projectType}`,
        `Budget: ${data.budget}`,
        "",
        "Project details:",
        data.projectDetails,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#171717;max-width:680px">
          <p style="color:#7221fc;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">New Nymbor project enquiry</p>
          <h1 style="font-size:28px;line-height:1.15">${safe.companyName}</h1>
          <table style="width:100%;border-collapse:collapse;margin:24px 0">
            <tr><td style="padding:9px 0;color:#777">Name</td><td style="padding:9px 0">${safe.name}</td></tr>
            <tr><td style="padding:9px 0;color:#777">Email</td><td style="padding:9px 0">${safe.email}</td></tr>
            <tr><td style="padding:9px 0;color:#777">Phone</td><td style="padding:9px 0">${safe.phone}</td></tr>
            <tr><td style="padding:9px 0;color:#777">Services</td><td style="padding:9px 0">${safe.services.join(", ")}</td></tr>
            <tr><td style="padding:9px 0;color:#777">Project type</td><td style="padding:9px 0">${safe.projectType}</td></tr>
            <tr><td style="padding:9px 0;color:#777">Budget</td><td style="padding:9px 0">${safe.budget}</td></tr>
          </table>
          <h2 style="font-size:18px">Project details</h2>
          <p style="white-space:pre-wrap">${safe.projectDetails}</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { message: "Email delivery failed. Please try again shortly." },
      { status: 502 },
    );
  }
}
