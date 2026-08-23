import ArpmHero from "@/components/works/arpm/arpm-hero";
import BriefBeneath from "@/components/works/arpm/brief-beneath";
import ClientReaction from "@/components/works/arpm/client-reaction";
import Closing from "@/components/works/arpm/closing";
import DataBridge from "@/components/works/arpm/data-bridge";
import DesignDirection from "@/components/works/arpm/design-direction";
import ExecutiveDirection from "@/components/works/arpm/executive-direction";
import GettingLive from "@/components/works/arpm/getting-live";
import Miracle from "@/components/works/arpm/miracle";
import Outcome from "@/components/works/arpm/outcome";
import OutcomeTestimonial from "@/components/works/arpm/outcome-testimonial";
import OperationalReality from "@/components/works/arpm/operational-reality";
import ProjectOverview from "@/components/works/arpm/project-overview";
import SearchProduct from "@/components/works/arpm/search-product";
import JsonLd from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  caseStudySchema,
  createPageMetadata,
} from "@/lib/seo";

const title = "ARPM Property Platform Case Study";
const description =
  "See how Nymbor redesigned and rebuilt Associated Realty Property Management's stalled platform into a responsive, production-ready property experience.";
const path = "/works/arpm";

export const metadata = createPageMetadata({
  title,
  description:
    "See how Nymbor redesigned and rebuilt Associated Realty Property Management's stalled platform into a responsive, production-ready property experience.",
  path,
  eyebrow: "Interface design & development case study",
  imageAlt: "ARPM property platform redesign and development case study by Nymbor",
});

export default function ArpmCaseStudyPage() {
  return (
    <main id="main-content" className="overflow-x-clip bg-[#f6f4ef]">
      <JsonLd
        data={[
          caseStudySchema({
            title: "Associated Realty Property Management",
            description,
            path,
            image: "/works/arpm/hero/hero-card-2x.png",
            services: ["Interface Design", "Web Development"],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/works" },
            { name: "ARPM", path },
          ]),
        ]}
      />
      <ArpmHero />
      <ProjectOverview />
      <ExecutiveDirection />
      <BriefBeneath />
      <OperationalReality />
      <DesignDirection />
      <ClientReaction />
      <DataBridge />
      <SearchProduct />
      <Miracle />
      <GettingLive />
      <Outcome />
      <OutcomeTestimonial />
      <Closing />
    </main>
  );
}
