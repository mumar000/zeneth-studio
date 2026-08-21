import ArpmHero from "@/components/works/arpm/arpm-hero";

export const metadata = {
  title: "Associated Realty Property Management",
  description:
    "The third development team turned ARPM's stalled redesign into a modern, production-ready property experience.",
};

export default function ArpmCaseStudyPage() {
  return (
    <main className="overflow-x-clip bg-[#f6f4ef]">
      <ArpmHero />
    </main>
  );
}
