"use client";

import { useState } from "react";
import ProjectCard from "../../components/works/project-card";
import CustomCursor from "../../components/works/custom-cursor";
import AlignmentCTA from "@/components/home/alignment-cta";
import { projects } from "../../lib/projects-data";

const categories = [
  "All",
  "Brand & Visual Identity",
  "Web & Product Design",
  "Build & Execution",
];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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

        {/* Filter Tabs */}
        <section className="px-6 md:px-12 lg:px-24 mb-16">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-base font-[400] transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-white text-black border border-gray-300 hover:border-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 md:px-12 lg:px-24 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 space-y-15">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
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
