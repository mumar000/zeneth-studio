"use client";

import { useState } from "react";
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

export default function WorksPage() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");

  const handleProjectHover = (text) => {
    setCursorVariant("project");
    setCursorText(text);
  };

  const handleProjectLeave = () => {
    setCursorVariant("default");
    setCursorText("");
  };

  return (
    <div className="relative bg-[#fffcf7]">
      <CustomCursor variant={cursorVariant} text={cursorText} />

      <div className="min-h-screen px-8 pt-36">
        {/* Hero Section */}

        {/* Projects Grid */}
        <section className="px-6 md:px-12 lg:px-24 pb-24">
          <div className="flex flex-wrap justify-center gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={index < 3}
                onHover={() => handleProjectHover(project.cursorText)}
                onLeave={handleProjectLeave}
              />
            ))}
          </div>
        </section>
        <AlignmentCTA />
      </div>
    </div>
  );
}
