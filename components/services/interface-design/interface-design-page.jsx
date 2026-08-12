import ServiceHero from "@/components/services/common/service-hero";
import ServiceTail from "@/components/services/common/service-tail";
import { servicesDetailData } from "@/lib/services-detail-data";
import { ScreenShowcase, DiagnosisSection, DecisionEngineSection, RebuildComparisonSection, LiveWorkSection, SystemTimelineSection } from "./sections";

const service = servicesDetailData["interface-design"];

export default function InterfaceDesignPage() {
  return (
    <main className="bg-[#f6f0fb] max-md:[&>section:not(:first-child)]:!py-14 max-md:[&_article]:!min-h-0 max-md:[&_article]:!rounded-[14px] max-md:[&_article]:!px-5 max-md:[&_article]:!py-7 max-md:[&_article_h3]:!mt-5 max-md:[&_article_h3]:!text-[24px] max-md:[&_article_p]:!mt-4 max-md:[&_article_p]:!text-[14px] max-md:[&_article_p]:!leading-[1.5]">
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
