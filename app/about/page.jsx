import AboutExperience from "@/components/about/about-experience";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Nymbor",
  description:
    "Meet Nymbor, an independent creative studio connecting strategy, brand identity, interface design, and web development from first idea to launch.",
  path: "/about",
  eyebrow: "About the studio",
  imageAlt: "About Nymbor, an independent creative studio",
});

export default function AboutPage() {
  return <AboutExperience />;
}
