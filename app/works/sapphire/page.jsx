import BeyondMockup from "@/components/works/sapphire/beyond-mockup";
import ClientProof from "@/components/works/sapphire/client-proof";
import FirstImpression from "@/components/works/sapphire/first-impression";
import LaunchHandoff from "@/components/works/sapphire/launch-handoff";
import SapphireHero from "@/components/works/sapphire/sapphire-hero";
import TheReality from "@/components/works/sapphire/the-reality";
import TheOutcome from "@/components/works/sapphire/the-outcome";
import TheSystem from "@/components/works/sapphire/the-system";
import TheWorld from "@/components/works/sapphire/the-world";

export const metadata = {
  title: "Sapphire Pools",
  description:
    "A quiet-luxury identity and lead-focused website created for a new pool company before its project portfolio existed.",
};

export default function SapphireCaseStudyPage() {
  return (
    <main className="overflow-x-clip bg-[#0c0c0c]">
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
