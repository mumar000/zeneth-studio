import ServiceHero from "@/components/services/common/service-hero";
import ServiceTail from "@/components/services/common/service-tail";
import { servicesDetailData } from "@/lib/services-detail-data";
import WebDevelopmentSections from "./sections";

const service = servicesDetailData["web-development"];

export default function WebDevelopmentPage() {
  return (
    <main className="service-page bg-[#f9f4ff] max-md:[&>section:not(:first-child)]:!py-14 max-md:[&_article]:!min-h-0 max-md:[&_article]:!rounded-[14px] max-md:[&_article]:!px-5 max-md:[&_article]:!py-7 max-md:[&_article_h3]:!mt-5 max-md:[&_article_h3]:!text-[24px] max-md:[&_article_p]:!mt-4 max-md:[&_article_p]:!text-[14px] max-md:[&_article_p]:!leading-[1.5]">
      <ServiceHero service={service} />
      <WebDevelopmentSections service={service} />
      <ServiceTail portfolioCta={service.portfolioCta} />
    </main>
  );
}
