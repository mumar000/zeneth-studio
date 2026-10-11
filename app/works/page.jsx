import WorksExperience from "@/components/works/works-experience";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import { getIndexableProjects } from "@/lib/projects-data";
import { absoluteUrl } from "@/lib/site-config";

const title = "Selected Work — Every Brand Has Its Own Story";
const description = "See the thinking behind Nymbor’s brand and website projects: Let’s Grub, Sapphire Pools, ARPM, Spreadshop and Mogul Bay. Explore the work and the decisions.";

export const metadata = createPageMetadata({ title, description, path: "/works", eyebrow: "Nymbor portfolio" });

export default function WorksPage() {
  return <>
    <JsonLd data={[
      webPageSchema({ name: title, description, path: "/works", type: "CollectionPage", mainEntity: {
        "@type": "ItemList",
        itemListElement: getIndexableProjects().map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: absoluteUrl(`/works/${project.slug}`),
        })),
      } }),
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Work", path: "/works" }]),
    ]} />
    <WorksExperience />
  </>;
}
