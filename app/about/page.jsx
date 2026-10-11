import AboutExperience from "@/components/about/about-experience";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

const title = "About the Agency — Small Team, Whole Picture";
const description = "Meet Nymbor, the independent creative agency that stays with the idea from identity to launch. Direct collaboration on branding, websites and digital products.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/about",
  eyebrow: "About the agency",
  imageAlt: "Nymbor, an independent creative and digital agency working worldwide",
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
