import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Selected Brand, Interface & Web Work",
  description:
    "Explore selected Nymbor case studies across brand identity, interface design, e-commerce, and production-ready web development.",
  path: "/works",
  eyebrow: "Selected client work",
  imageAlt: "Selected brand identity, interface design, and web development work by Nymbor",
});

export default function WorksLayout({ children }) {
  return children;
}
