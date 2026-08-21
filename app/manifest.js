export default function manifest() {
  return {
    name: "Nymbor",
    short_name: "Nymbor",
    description:
      "Nymbor builds distinctive brand identities, high-converting interfaces, and production-ready digital experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7221FC",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
