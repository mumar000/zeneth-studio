import SpreadshopHero from "@/components/works/spreadshop/spreadshop-hero";
import ProjectIntroduction from "@/components/works/spreadshop/project-introduction";
import ProjectedMetrics from "@/components/works/spreadshop/projected-metrics";
import InterfacePair from "@/components/works/spreadshop/interface-pair";
import ProjectBrief from "@/components/works/spreadshop/project-brief";
import DesignProcess from "@/components/works/spreadshop/design-process";
import CompetitorIntroduction from "@/components/works/spreadshop/competitor-introduction";
import CompetitorComparison from "@/components/works/spreadshop/competitor-comparison";
import UserResearchIntroduction from "@/components/works/spreadshop/user-research-introduction";
import JourneyComparison from "@/components/works/spreadshop/journey-comparison";
import LaptopPresentation from "@/components/works/spreadshop/laptop-presentation";
import MobileInterfaceGallery from "@/components/works/spreadshop/mobile-interface-gallery";
import BeforeAfterIntroduction from "@/components/works/spreadshop/before-after-introduction";
import FocusedBeforeAfter from "@/components/works/spreadshop/focused-before-after";
import HomepageShowcase from "@/components/works/spreadshop/homepage-showcase";
import FinalVerdict from "@/components/works/spreadshop/final-verdict";
import SupportingPageGallery from "@/components/works/spreadshop/supporting-page-gallery";
import SpreadshopMotion from "@/components/works/spreadshop/spreadshop-motion";
import JsonLd from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  caseStudySchema,
  createPageMetadata,
} from "@/lib/seo";

const title = "Spreadshop E-commerce UX Case Study";
const description =
  "Explore Nymbor's research-led redesign of Spreadshop's creator storefront, from competitive analysis and user journeys to responsive e-commerce interfaces.";
const path = "/works/spreadshop";

export const metadata = createPageMetadata({
  title,
  description:
    "Explore Nymbor's research-led redesign of Spreadshop's creator storefront, from competitive analysis and user journeys to responsive e-commerce interfaces.",
  path,
  eyebrow: "E-commerce UX case study",
  imageAlt: "Spreadshop creator storefront UX redesign case study by Nymbor",
});

export default function SpreadshopCaseStudyPage() {
  return (
    <main id="main-content" className="overflow-x-clip bg-white">
      <JsonLd
        data={[
          caseStudySchema({
            title: "Spreadshop",
            description,
            path,
            image: "/works/spreadshop/hero.png",
            services: ["Product Design", "User Research", "Web Design", "E-commerce"],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/works" },
            { name: "Spreadshop", path },
          ]),
        ]}
      />
      <SpreadshopMotion>
        <SpreadshopHero />
        <ProjectIntroduction />
        <ProjectedMetrics />
        <InterfacePair />
        <ProjectBrief />
        <DesignProcess />
        <CompetitorIntroduction />
        <CompetitorComparison />
        <UserResearchIntroduction />
        <JourneyComparison />
        <LaptopPresentation />
        <MobileInterfaceGallery />
        <BeforeAfterIntroduction />
        <FocusedBeforeAfter />
        <HomepageShowcase />
        <FinalVerdict />
        <SupportingPageGallery />
      </SpreadshopMotion>
    </main>
  );
}
