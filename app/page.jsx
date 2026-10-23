import Hero from "@/components/home/hero";
import { ProjectsSection } from "./sections/projects";
import GifSection from "@/components/home/gif-section";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import BookCall from "@/components/home/book-call";
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
    <main id="main-content">
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
        <BookCall />
      </div>
    </main>
  );
}
