"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../../components/works/project-card";
import CustomCursor from "../../components/works/custom-cursor";
import AlignmentCTA from "@/components/home/alignment-cta";
import { projects } from "../../lib/projects-data";

const featuredProjectSlugs = new Set([
  "spreadshop",
  "mogulbay",
  "lets-grub",
  "feroce",
  "voyager-supplements",
]);
const featuredProjects = projects.filter((project) =>
  featuredProjectSlugs.has(project.slug),
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

  const visibleProjects = featuredProjects.filter((project) =>
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
    <div className="relative bg-[#fffcf7]">
      <CustomCursor variant={cursorVariant} text={cursorText} />

      <div className="min-h-screen px-8 pt-36">
        {/* Hero Section */}

        {/* Projects Grid */}
        <section className="px-6 md:px-12 lg:px-24 pb-24">
          <div className="mx-auto mb-12 flex max-w-[1500px] flex-col items-center gap-5 md:mb-16">
            <p
              className="text-[12px] font-[600] uppercase tracking-[0.12em] text-black/55 md:text-[13px]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Filter by service
            </p>

            <div
              role="group"
              aria-label="Filter projects by service"
              className="flex w-full flex-wrap justify-center gap-2.5 md:gap-3"
            >
              {workFilters.map((filter) => {
                const isActive = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleFilterChange(filter.id)}
                    className={`inline-flex min-h-12 items-center justify-center rounded-[10px] border-2 border-black px-5 py-2.5 text-[12px] font-[700] uppercase tracking-[0.1em] shadow-[4px_4px_0_0_#000] transition-all duration-200 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:min-h-14 md:px-6 md:py-3 md:text-[13px] ${
                      isActive
                        ? "bg-[var(--accent-yellow)] text-black"
                        : "bg-white text-black hover:bg-[#f1f1f1]"
                    }`}
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            layout
            className="flex min-h-[460px] flex-wrap content-start justify-center gap-8"
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
    </div>
  );
}
