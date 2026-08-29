const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1_000;
const RATE_LIMIT_MAX_SUBMISSIONS = 5;
const submissionsByIp = new Map();

export function getClientIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export function isContactSubmissionRateLimited(ip) {
  const now = Date.now();
  const recentSubmissions = (submissionsByIp.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentSubmissions.length >= RATE_LIMIT_MAX_SUBMISSIONS) {
    submissionsByIp.set(ip, recentSubmissions);
    return true;
  }

  recentSubmissions.push(now);
  submissionsByIp.set(ip, recentSubmissions);
  return false;
}
