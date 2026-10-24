"use client";

import { Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillGroup } from "@/components/ui/SkillGroup";
import { portfolioData } from "@/data/portfolio";

export function SkillsSection() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Core Competencies"
          title="Technical Skills & Architecture"
          subtitle="A comprehensive toolkit refined over 5 years of shipping production code, optimizing data models, and implementing modern frameworks."
          icon={<Code2 className="w-4 h-4" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <SkillGroup key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
