"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, FolderGit2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { portfolioData } from "@/data/portfolio";
import { ProjectCategory } from "@/types/portfolio";

const categories: ProjectCategory[] = [
  "All",
  "Enterprise Systems",
  "Web Applications",
  "E-Commerce & Portals",
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const { projects } = portfolioData;

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Featured Work"
          title="Production Projects & Enterprise Solutions"
          subtitle="A selected portfolio of real-world enterprise platforms, e-commerce stores, logistics trackers, and administrative workflows."
          icon={<FolderGit2 className="w-4 h-4" />}
        />

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => {
            const count =
              category === "All"
                ? projects.length
                : projects.filter((p) => p.category === category).length;

            const isActive = activeFilter === category;

            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 border border-blue-500"
                    : "glass-card text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
