import BeyondMockup from "@/components/works/sapphire/beyond-mockup";
import ClientProof from "@/components/works/sapphire/client-proof";
import FirstImpression from "@/components/works/sapphire/first-impression";
import LaunchHandoff from "@/components/works/sapphire/launch-handoff";
import SapphireHero from "@/components/works/sapphire/sapphire-hero";
import TheReality from "@/components/works/sapphire/the-reality";
import TheOutcome from "@/components/works/sapphire/the-outcome";
import TheSystem from "@/components/works/sapphire/the-system";
import TheWorld from "@/components/works/sapphire/the-world";
import JsonLd from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  caseStudySchema,
  createPageMetadata,
} from "@/lib/seo";

const title = "Sapphire Pools Brand & Website Case Study";
const description =
  "See how Nymbor built Sapphire Pools' quiet-luxury identity and lead-focused WordPress website before the new business had project photography.";
const path = "/works/sapphire";

export const metadata = createPageMetadata({
  title,
  description:
    "See how Nymbor built Sapphire Pools' quiet-luxury identity and lead-focused WordPress website before the new business had project photography.",
  path,
  eyebrow: "Brand, web design & development case study",
  imageAlt: "Sapphire Pools brand identity and website case study by Nymbor",
});

export default function SapphireCaseStudyPage() {
  return (
    <main id="main-content" className="overflow-x-clip bg-[#0c0c0c]">
      <JsonLd
        data={[
          caseStudySchema({
            title: "Sapphire Pools",
            description,
            path,
            image: "/works/sapphire/hero/project-card.webp",
            services: ["Brand Identity", "Web Design", "WordPress Development"],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/works" },
            { name: "Sapphire Pools", path },
          ]),
        ]}
      />
      <SapphireHero />
      <TheReality />
      <TheWorld />
      <FirstImpression />
      <TheSystem />
      <BeyondMockup />
      <LaunchHandoff />
      <ClientProof />
      <TheOutcome />
    </main>
  );
}
