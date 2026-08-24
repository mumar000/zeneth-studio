"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ProjectCard from "../../components/works/project-card";
import CustomCursor from "../../components/works/custom-cursor";
import AlignmentCTA from "@/components/home/alignment-cta";
import { getPublicProjects } from "../../lib/projects-data";

const portfolioProjectSlugs = new Set([
  "spreadshop",
  "sapphire",
  "arpm",
  "mogulbay",
  "lets-grub",
  "feroce",
  // "voyager-supplements",
]);

const portfolioProjects = getPublicProjects().filter((project) =>
  portfolioProjectSlugs.has(project.slug),
);

const workFilters = [
  { id: "all", label: "All Work" },
  { id: "brand-identity", label: "Brand Identity" },
  { id: "interface-design", label: "Interface Design" },
  { id: "web-development", label: "Web Development" },
];

const serviceTags = {
  "brand-identity": new Set([
    "Brand Identity",
    "Branding",
    "Art Direction",
    "Packaging",
    "Campaign Design",
  ]),
  "interface-design": new Set([
    "Product Design",
    "User Research",
    "Digital Product",
  ]),
  "web-development": new Set(["Full Stack Development", "Web Design"]),
};

function belongsToService(project, service) {
  if (service === "all") return true;
  return project.tags.some((tag) => serviceTags[service].has(tag));
}

export default function WorksPage() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = portfolioProjects.filter((project) =>
    belongsToService(project, activeFilter),
  );

  const handleProjectHover = (text) => {
    setCursorVariant("project");
    setCursorText(text);
  };

  const handleProjectLeave = () => {
    setCursorVariant("default");
    setCursorText("");
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    handleProjectLeave();
  };

  return (
    <main id="main-content" className="relative bg-[#fffcf7]">
      <CustomCursor variant={cursorVariant} text={cursorText} />

      <div className="min-h-screen px-3 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-30">
        <h1
          className="mx-auto max-w-[1120px] px-3 pb-9 text-center text-[clamp(38px,5.2vw,72px)] font-[650] leading-[0.98] tracking-[-0.045em] text-[#1a1a1a] sm:px-6 md:pb-11"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Selected brand, interface, and web work
        </h1>

        {/* Projects Grid */}
        <section className="pb-14 md:pb-18">
          <div className="mx-auto mb-8 flex max-w-[1680px] justify-start md:mb-10">
            <label className="block" htmlFor="work-filter">
              <span
                className="mb-2 block text-[10px] font-[600] uppercase tracking-[0.12em] text-black/50 md:text-[11px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Filter by service
              </span>

              <span className="relative block w-[min(72vw,240px)]">
                <select
                  id="work-filter"
                  value={activeFilter}
                  onChange={(event) => handleFilterChange(event.target.value)}
                  className="min-h-10 w-full cursor-pointer appearance-none rounded-lg border-2 border-black bg-white py-2 pl-3.5 pr-10 text-[11px] font-[700] uppercase tracking-[0.08em] shadow-[3px_3px_0_0_#000] outline-none transition-all duration-200 hover:bg-[#f1f1f1] focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:min-h-11 md:pl-4 md:text-[12px]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {workFilters.map((filter) => (
                    <option key={filter.id} value={filter.id}>
                      {filter.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-black"
                  strokeWidth={2}
                />
              </span>
            </label>
          </div>

          <motion.div
            layout
            className="mx-auto grid min-h-[360px] max-w-[1680px] grid-cols-2 items-start justify-items-center gap-x-3 gap-y-6 sm:gap-x-7 sm:gap-y-9 md:min-h-[420px] md:gap-x-10 md:gap-y-12 xl:grid-cols-4 xl:gap-x-14 xl:gap-y-16 2xl:gap-x-20"
          >
            <AnimatePresence mode="sync">
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  priority={activeFilter === "all" && index < 3}
                  onHover={() => handleProjectHover(project.cursorText)}
                  onLeave={handleProjectLeave}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
        <AlignmentCTA compact />
      </div>
    </main>
  );
}
