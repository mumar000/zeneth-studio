export const siteConfig = {
  name: "Nymbor",
  alternateNames: ["Nymbor Creative", "Nymbor Creative Studio", "Bynymbor"],
  // Vercel currently redirects the apex domain to this canonical host.
  url: "https://www.nymbor.com",
  locale: "en_US",
  email: "contact@nymbor.com",
  defaultTitle: "Nymbor — Brands Worth Noticing. Websites Worth Using.",
  defaultDescription:
    "A brand that feels like you. A website that earns its place. Nymbor is a creative agency bringing brand identity, web design and development to teams worldwide.",
  socialDescription:
    "Make your brand impossible to mistake. Nymbor connects brand identity, UI/UX design and web development, from the first direction to the last launch check.",
  socialLinks: {
    instagram: "https://www.instagram.com/bynymbor/",
    linkedin: "https://www.linkedin.com/company/nymbor/",
  },
  logo: "/nymbor-final-files/logo-mark/nymbor-logo-profile-picture-black-bg.png",
  themeColor: "#7221FC",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function isIndexableEnvironment() {
  // Optional build-time opt-out for a non-Vercel staging deployment.
  if (process.env.SITE_INDEXABLE === "false") return false;

  if (process.env.VERCEL_ENV) {
    return process.env.VERCEL_ENV === "production";
  }

  return process.env.NODE_ENV === "production";
}
