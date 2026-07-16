import ServiceHero from "@/components/services/common/service-hero";
import ServiceTail from "@/components/services/common/service-tail";
import { servicesDetailData } from "@/lib/services-detail-data";
import { ScreenShowcase, DiagnosisSection, DecisionEngineSection, RebuildComparisonSection, LiveWorkSection, SystemTimelineSection } from "./sections";

const service = servicesDetailData["interface-design"];

export default function InterfaceDesignPage() {
  return (
    <main className="bg-[#f6f0fb]">
      <ServiceHero service={service} />
      <ScreenShowcase images={service.screenShowcase} />
      <DiagnosisSection section={service.interfaceDiagnosis} />
      <DecisionEngineSection section={service.decisionEngine} />
      <RebuildComparisonSection section={service.rebuildComparison} />
      <LiveWorkSection section={service.liveWork} />
      <SystemTimelineSection section={service.systemTimeline} />
      <ServiceTail
        portfolioCta={{
          eyebrow: "Looking for something more custom?",
          title: "Got a screen that looks fine but does not move people?",
          description:
            "Send us your current active page URL, sketch mockup, or custom strategy goals. We will identify the friction points, structure the decision path, and design a pristine interface focused on action.",
          label: "Book a Call ->",
          href: "/contact",
        }}
      />
    </main>
  );
}
