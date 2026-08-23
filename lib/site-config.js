export const siteConfig = {
  name: "Nymbor",
  url: "https://nymbor.com",
  locale: "en_US",
  email: "contact@nymbor.com",
  defaultTitle: "Nymbor | Brand Identity, Web Design & Development",
  defaultDescription:
    "Nymbor is an independent creative studio for brand identity, interface design, and web development, helping ambitious businesses launch with clarity.",
  logo: "/nymbor-final-files/logo-mark/nymbor-logo-profile-picture-black-bg.png",
  themeColor: "#7221FC",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function isIndexableEnvironment() {
  if (process.env.VERCEL_ENV) {
    return process.env.VERCEL_ENV === "production";
  }

  return process.env.NODE_ENV === "production";
}
