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
  "voyager-supplements",
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

      <div className="min-h-screen px-3 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <h1
          className="mx-auto max-w-[1500px] px-6 pb-12 text-center text-5xl font-[700] tracking-[-0.04em] text-[#1a1a1a] md:px-12 md:pb-16 md:text-7xl lg:px-24 lg:text-8xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Selected brand, interface, and web work
        </h1>

        {/* Projects Grid */}
        <section className="pb-24">
          <div className="mx-auto mb-10 flex max-w-[1680px] justify-start md:mb-14">
            <label className="block" htmlFor="work-filter">
              <span
                className="mb-2.5 block text-[11px] font-[600] uppercase tracking-[0.12em] text-black/55 md:text-[12px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Filter by service
              </span>

              <span className="relative block w-[min(72vw,270px)]">
                <select
                  id="work-filter"
                  value={activeFilter}
                  onChange={(event) => handleFilterChange(event.target.value)}
                  className="min-h-12 w-full cursor-pointer appearance-none rounded-[10px] border-2 border-black bg-white py-2.5 pl-4 pr-11 text-[12px] font-[700] uppercase tracking-[0.08em] shadow-[4px_4px_0_0_#000] outline-none transition-all duration-200 hover:bg-[#f1f1f1] focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:min-h-14 md:pl-5 md:text-[13px]"
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
                  className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-black md:size-5"
                  strokeWidth={2}
                />
              </span>
            </label>
          </div>

          <motion.div
            layout
            className="mx-auto grid min-h-[460px] max-w-[1680px] grid-cols-2 items-start justify-items-center gap-x-3 gap-y-6 sm:gap-x-7 sm:gap-y-9 md:gap-x-10 md:gap-y-12 xl:grid-cols-4 xl:gap-x-14 xl:gap-y-16 2xl:gap-x-20"
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
        <AlignmentCTA />
      </div>
    </main>
  );
}
