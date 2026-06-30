"use client";

import Hero from "@/components/home/hero";
import { ProjectsSection } from "./sections/projects";
import HappyBrands from "@/components/home/happy-brands";
import WebsiteGaps from "@/components/home/website-gaps";
import ServicesDetail from "@/components/home/services-detail";
import ClientProof from "@/components/home/client-proof";
import FaqSection from "@/components/home/faq-section";
import PortfolioCta from "@/components/home/portfolio-cta";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Hero />
        <ProjectsSection />
        <HappyBrands />
        <WebsiteGaps />
        <ServicesDetail />
        <ClientProof />
        <FaqSection />
        <PortfolioCta />
      </div>
    </>
  );
}
