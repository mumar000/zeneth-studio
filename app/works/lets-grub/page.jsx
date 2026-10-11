import BrandInUse from "@/components/works/lets-grub/brand-in-use";
import BrandPalette from "@/components/works/lets-grub/brand-palette";
import BrandTypography from "@/components/works/lets-grub/brand-typography";
import ChosenIdentity from "@/components/works/lets-grub/chosen-identity";
import FinalIdentity from "@/components/works/lets-grub/final-identity";
import GenieIntroduction from "@/components/works/lets-grub/genie-introduction";
import ImageryDirection from "@/components/works/lets-grub/imagery-direction";
import LetsGrubHero from "@/components/works/lets-grub/lets-grub-hero";
import LogoExploration from "@/components/works/lets-grub/logo-exploration";
import MascotGuidelines from "@/components/works/lets-grub/mascot-guidelines";
import RealBrief from "@/components/works/lets-grub/real-brief";
import TensionPanel from "@/components/works/lets-grub/tension-panel";
import ThankYou from "@/components/works/lets-grub/thank-you";
import RelatedServices from "@/components/works/related-services";
import JsonLd from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  caseStudySchema,
  createPageMetadata,
  webPageSchema,
} from "@/lib/seo";

const title = "Let’s Grub — A Brand That Brings People Together";
const description =
  "A social dining idea with a personality of its own. Explore the logo, genie mascot, typography and visual identity Nymbor created for Let’s Grub.";
const path = "/works/lets-grub";

export const metadata = createPageMetadata({
  title,
  description,
  path,
  eyebrow: "Brand identity case study",
  imageAlt: "Let’s Grub brand identity and mascot case study by Nymbor",
});

export default function LetsGrubCaseStudyPage() {
  return (
    <main id="main-content" className="overflow-x-clip bg-[#f7f7f7]">
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path }),
          caseStudySchema({
            title: "Let’s Grub",
            description,
            path,
            image: "/works/lets-grub/hero/hero-4x.png",
            services: ["Brand Identity", "Art Direction", "Digital Product"],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/works" },
            { name: "Let’s Grub", path },
          ]),
        ]}
      />
      <LetsGrubHero />
      <RealBrief />
      <TensionPanel />
      <LogoExploration />
      <ChosenIdentity />
      <FinalIdentity />
      <GenieIntroduction />
      <MascotGuidelines />
      <BrandTypography />
      <BrandPalette />
      <ImageryDirection />
      <BrandInUse />
      <RelatedServices services={["brand-identity", "interface-design"]} />
      <ThankYou />
    </main>
  );
}
