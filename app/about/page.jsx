import AboutExperience from "@/components/about/about-experience";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

const title = "About the Studio";
const description = "Meet Nymbor, an independent creative studio connecting strategy, brand identity, interface design, and web development from first idea to launch.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/about",
  eyebrow: "About the studio",
  imageAlt: "About Nymbor, an independent creative studio",
});

export default function AboutPage() {
  return <>
    <JsonLd data={[
      webPageSchema({ name: title, description, path: "/about", type: "AboutPage", mainEntity: { "@id": `${siteConfig.url}/#organization` } }),
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About Nymbor", path: "/about" }]),
    ]} />
    <AboutExperience />
  </>;
}
