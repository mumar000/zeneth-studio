import AboutExperience from "@/components/about/about-experience";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

const title = "About Muhammad Umair & the Studio";
const description = "Nymbor is a founder-led brand and website studio run by Muhammad Umair. Brand identity, interface design, and web development, from the first call to launch.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/about",
  eyebrow: "Founder-led brand and website studio",
  imageAlt: "Muhammad Umair, founder of Nymbor",
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
