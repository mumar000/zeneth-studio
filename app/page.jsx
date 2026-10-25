import Hero from "@/components/home/hero";
import { ProjectsSection } from "./sections/projects";
import GifSection from "@/components/home/gif-section";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import BookingCta from "@/components/services/brand-identity/booking-cta";
import JsonLd from "@/components/seo/json-ld";
import { createPageMetadata, webPageSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  socialDescription: siteConfig.socialDescription,
  path: "/",
  eyebrow: "Brand identity · Interface design · Web development",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main id="main-content" className="home-page">
      <JsonLd data={[
        webPageSchema({ name: siteConfig.defaultTitle, description: siteConfig.defaultDescription, path: "/" }),
      ]} />
      <link rel="preconnect" href="https://assets.calendly.com" />
      <div className="relative">
        <Hero />
        <GifSection />
        <ProjectsSection />
        <Services />
        <Testimonials />
        <BookingCta
          eyebrow="Next slot opening"
          heading="Work"
          accent="With Us"
          description="Book an intro call to walk through your project. We take a limited number of projects each month."
        />
      </div>
    </main>
  );
}
