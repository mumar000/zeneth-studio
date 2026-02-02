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
          <span className="italic font-romie font-[400]">Brand</span>&nbsp;&
          <span className="font-[400]"> Visual Identity</span>
        </>
      ),
      description:
        "We help brands stand out and grow. By mixing smart strategy, thoughtful design, and clear messaging, we build identities that people actually remember and connect with.",
      chips: [
        "Naming",
        "Strategy & Positioning",
        "Voice & Tone",
        "Packaging Design",
        "Visual Identity",
        "Customer Experience",
        "Brand Messaging",
      ],
      images: ["/services1.webp", "/services2.webp", "/services3.webp"],
    },
    {
      title: (
        <>
          <span className="italic font-romie font-[400]">Product</span>&nbsp;&
          <span className="font-[400]"> Experience</span>
        </>
      ),
      description:
        "We shape digital products that feel effortless. From flows to UI to micro-details, every screen is designed to reduce friction and build trust.",
      chips: [
        "UX Audits",
        "Product Strategy",
        "User Flows",
        "UI Design",
        "Prototyping",
        "Design Systems",
        "Usability Testing",
      ],
      images: ["/services2.webp", "/services3.webp", "/services1.webp"],
    },
    {
      title: (
        <>
          <span className="italic font-romie font-[400]">Web</span>&nbsp;&
          <span className="font-[400]"> Presence</span>
        </>
      ),
      description:
        "We build web experiences that look premium and convert. Storytelling, performance, and clarity all working together.",
      chips: [
        "Web Strategy",
        "Landing Pages",
        "CMS Builds",
        "Motion Design",
        "SEO Foundations",
        "Analytics",
        "Conversion",
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
