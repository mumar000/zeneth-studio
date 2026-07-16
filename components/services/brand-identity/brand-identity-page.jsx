"use client";

import ServiceHero from "@/components/services/common/service-hero";
import ServiceTail from "@/components/services/common/service-tail";
import { servicesDetailData } from "@/lib/services-detail-data";
import { CapabilityTicker, ShowcaseStrip, MethodSection, DiagnosticSection, ProofSection, PipelineSection } from "./sections";

const service = servicesDetailData["brand-identity"];

export default function BrandIdentityPage() {
  return (
    <main className="bg-[#f6f0fb]">
      <ServiceHero service={service} />
      <CapabilityTicker items={service.ticker} />
      <ShowcaseStrip images={service.showcase} />
      <MethodSection service={service} />
      <DiagnosticSection service={service} />
      <ProofSection service={service} />
      <PipelineSection service={service} />
      <ServiceTail />
    </main>
  );
}
