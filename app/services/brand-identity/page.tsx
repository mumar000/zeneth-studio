import JsonLd from "@/components/seo/json-ld";
import AiAssistant from "@/components/services/brand-identity/ai-assistant";
import BrandWork from "@/components/services/brand-identity/brand-work";
import BookingCta from "@/components/services/brand-identity/booking-cta";
import Clients from "@/components/services/brand-identity/clients";
import FaqSection from "@/components/services/brand-identity/faq-section";
import Hero from "@/components/services/brand-identity/hero";
import Package from "@/components/services/brand-identity/package";
import Process from "@/components/services/brand-identity/process";
import Testimonials from "@/components/services/brand-identity/testimonials";
import Reveal from "@/components/reveal";
import { servicesDetailData } from "@/lib/services-detail-data";
import { serviceSeoData } from "@/lib/service-seo-data";
import { absoluteUrl } from "@/lib/site-config";
import {
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

const path = "/services/brand-identity";
const service = servicesDetailData["brand-identity"];
const seo = serviceSeoData["brand-identity"];

export const metadata = createPageMetadata({
  title: seo.title,
  description: seo.description,
  path,
  eyebrow: "Nymbor services",
  imageAlt: `${seo.title} services by Nymbor`,
});

export default function BrandIdentityPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: seo.title,
            description: seo.description,
            path,
            mainEntity: { "@id": `${absoluteUrl(path)}#service` },
          }),
          serviceSchema({
            name: service.label,
            description: seo.description,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.label, path },
          ]),
          faqPageSchema(seo.faqs, path),
        ]}
      />
      <main
        id="main-content"
        className="overflow-x-clip bg-[#faf7ff] text-[#1a1a1a]"
      >
        <Hero />
        <Clients />
        <BrandWork />
        <Reveal style={{}}>
          <AiAssistant />
        </Reveal>
        <Package />
        <Testimonials />
        <Process />
        <FaqSection />
        <BookingCta />
      </main>
    </>
  );
}
