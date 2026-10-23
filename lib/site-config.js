export const siteConfig = {
  name: "Nymbor",
  alternateNames: ["Nymbor Studio", "Nymbor Creative", "Nymbor Creative Studio", "Bynymbor"],
  // Vercel currently redirects the apex domain to this canonical host.
  url: "https://www.nymbor.com",
  locale: "en_US",
  email: "contact@nymbor.com",
  calendarUrl: "https://calendly.com/umair-nymbor",
  founder: {
    name: "Muhammad Umair",
    jobTitle: "Founder",
    image: "/founder/muhammad-umair.webp",
    linkedin: "https://www.linkedin.com/in/muhammad-umair2677/",
  },
  defaultTitle: "Nymbor — Brand and website, built as one.",
  defaultDescription:
    "Nymbor is an independent creative studio for brand identity, interface design, and web development — helping founders and growing teams build clear, launch-ready digital experiences.",
  socialDescription:
    "Brand identity, interface design, and web development for founders and growing teams.",
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
