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

export const metadata = {
  title: "Associated Realty Property Management",
  description:
    "The third development team turned ARPM's stalled redesign into a modern, production-ready property experience.",
};

export default function ArpmCaseStudyPage() {
  return (
    <main className="overflow-x-clip bg-[#f6f4ef]">
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
