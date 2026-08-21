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

export const metadata = {
  title: "Let's Grub",
  description:
    "A social dining identity designed to bring people together through food.",
};

export default function LetsGrubCaseStudyPage() {
  return (
    <main className="overflow-x-clip bg-[#f7f7f7]">
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
      <ThankYou />
    </main>
  );
}
