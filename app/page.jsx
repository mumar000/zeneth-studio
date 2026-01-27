"use client";

import Hero from "@/components/home/hero";
import GifSection from "@/components/home/gif-section";
import { IntroProjectsSection } from "./sections/intro";
import JourneySection from "./sections/discover/journey-section";
import Loader from "./components/loader";
import { useState } from "react";
import ServicesSection from "./sections/services/services-section";
import TestimonialSlider from "./sections/testimonial/testimonial";
import FaqSection from "./sections/faqs/faqs-section";
import ContactSection from "./sections/contact/contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />} */}
      <div className="relative">
        <Hero />
        <GifSection />
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
