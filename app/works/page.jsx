"use client";

import { useState } from "react";
import { Navbar } from "../components/common/navbar";
import ProjectCard from "../../components/works/project-card";
import CustomCursor from "../../components/works/custom-cursor";
import AlignmentCTA from "@/components/home/alignment-cta";

const projects = [
  {
    id: 1,
    title: "GoldBug",
    category: "Brand & Visual Identity",
    image: "/services1.webp",
    cursorText: "View Project",
  },
  {
    id: 2,
    title: "Feroce",
    category: "Web & Product Design",
    image: "/services2.webp",
    cursorText: "Explore",
  },
  {
    id: 3,
    title: "Lido Honey",
    category: "Package Design",
    image: "/services3.webp",
    cursorText: "See Details",
  },
  {
    id: 4,
    title: "Vido Design",
    category: "Brand & Visual Identity",
    image: "/services4.webp",
    cursorText: "Discover",
  },
  {
    id: 5,
    title: "TechStart",
    category: "Build & Execution",
    image: "/services1.webp",
    cursorText: "Learn More",
  },
  {
    id: 6,
    title: "Digital Wave",
    category: "Web & Product Design",
    image: "/services2.webp",
    cursorText: "View Work",
  },
  {
    id: 7,
    title: "Aura Studio",
    category: "Creative Direction",
    image: "/services3.webp",
    cursorText: "Explore",
  },
  {
    id: 8,
    title: "Velvet Co.",
    category: "Visual Identity",
    image: "/services4.webp",
    cursorText: "Open",
  },
  {
    id: 9,
    title: "Nova Labs",
    category: "UI/UX Strategy",
    image: "/services1.webp",
    cursorText: "View Case",
  },
  {
    id: 10,
    title: "Zenith",
    category: "Brand Architecture",
    image: "/services2.webp",
    cursorText: "Discover",
  },
  {
    id: 11,
    title: "Nexus",
    category: "Digital Experience",
    image: "/services3.webp",
    cursorText: "See More",
  },
  {
    id: 12,
    title: "Oasis",
    category: "E-commerce Design",
    image: "/services4.webp",
    cursorText: "View",
  },
];

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
                key={project.id}
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
