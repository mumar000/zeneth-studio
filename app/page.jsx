"use client";

import Hero from "@/components/home/hero";
import GifSection from "@/components/home/gif-section";
import ProblemSolution from "@/components/home/problem-solution";
import FocusSection from "@/components/home/focus-section";
import BrandIdentitySection from "@/components/home/brand-identity";
import { IntroProjectsSection } from "./sections/intro";
import JourneySection from "./sections/discover/journey-section";
import Loader from "./components/loader";
import { useState } from "react";
import ServicesSection from "./sections/services/services-section";
import TestimonialSlider from "./sections/testimonial/testimonial";
import FaqSection from "./sections/faqs/faqs-section";
import ContactSection from "./sections/contact/contact";
import { ProjectsSection } from "./sections/projects";
import HowWeWork from "@/components/home/how-we-works";
import AlignmentCTA from "@/components/home/alignment-cta";
import MultiStepContactForm from "@/components/contact/multi-step-form";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const brandIdentitySections = [
    {
      title: (
        <>
          <span className="italic font-romie font-[400]">Strategic</span>&nbsp;
          <span className="font-[400]">Visual DNA.</span>
        </>
      ),
      description:
        'Don\'t wrap your product in a generic shell. We architect cohesive brand systems designed to command authority and eliminate market hesitation. We don\'t just "design"; we define your competitive edge.',
      chips: [
        "Identity Architecture",
        "Positioning Strategy",
        "Visual Systems",
        "Brand Guidelines",
        "Verbal Identity",
        "Packaging",
      ],
      images: ["/services1.webp", "/services2.webp", "/services3.webp"],
    },
    {
      title: (
        <>
          <span className="italic font-romie font-[400]">High-Fidelity</span>
          &nbsp;
          <span className="font-[400]">Interface Design.</span>
        </>
      ),
      description:
        "Your interface is your brand's handshake. We engineer digital experiences that remove friction and turn passive users into active advocates. Every pixel is a calculated move toward trust.",
      chips: [
        "UI Architecture",
        "UX Strategy",
        "SaaS Product Design",
        "Interaction Design",
        "Prototyping",
        "Design Systems",
      ],
      images: ["/services2.webp", "/services3.webp", "/services1.webp"],
    },
    {
      title: (
        <>
          <span className="italic font-romie font-[400]">Premium</span>&nbsp;
          <span className="font-[400]">CMS Architecture.</span>
        </>
      ),
      description:
        "We build the live manifestation of your authority. High-performance, lightning-fast web experiences developed for scale without the technical debt or bloated agency overhead.",
      chips: [
        "Webflow Development",
        "Shopify Architecture",
        "High-Converting Landing Pages",
        "Motion Design",
        "SEO Foundations",
        "CMS Build",
      ],
      images: ["/services3.webp", "/services1.webp", "/services2.webp"],
    },
  ];

  return (
    <>
      <div className="relative">
        <Hero />
        <GifSection />
        <ProblemSolution />
        <ProjectsSection />
        <FocusSection />
        {brandIdentitySections.map((section, index) => (
          <BrandIdentitySection
            key={index}
            title={section.title}
            description={section.description}
            chips={section.chips}
            images={section.images}
            transitionVariant={
              index === 1 ? "second" : index === 2 ? "third" : "first"
            }
          />
        ))}
        <HowWeWork />
        <AlignmentCTA />
        {/* <HeroSection startAnimation={!isLoading} />
        <IntroProjectsSection />
        <JourneySection />
        <ServicesSection />
        <FaqSection />
        
        <TestimonialSlider />
        <ContactSection /> */}
      </div>
    </>
  );
}
