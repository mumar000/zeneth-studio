import ServiceHero from "@/components/services/common/service-hero";
import ServiceTail from "@/components/services/common/service-tail";
import { servicesDetailData } from "@/lib/services-detail-data";
import WebDevelopmentSections from "./sections";

const service = servicesDetailData["web-development"];

export default function WebDevelopmentPage() {
  return (
    <main className="bg-[#f9f4ff]">
      <ServiceHero service={service} />
      <WebDevelopmentSections service={service} />
      <ServiceTail portfolioCta={service.portfolioCta} />
    </main>
  );
}
