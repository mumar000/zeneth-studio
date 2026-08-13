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

export const metadata = {
  title: "Spreadshop",
  description:
    "A ground-up redesign of Spreadshop's creator storefront experience by Nymbor.",
};

export default function SpreadshopCaseStudyPage() {
  return (
    <main className="overflow-x-clip bg-white">
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
    </main>
  );
}
