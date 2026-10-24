"use client";

import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { portfolioData } from "@/data/portfolio";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Career Journey"
          title="Professional Work Experience"
          subtitle="A track record of engineering scalable web applications, optimizing databases, and delivering enterprise backend systems."
          icon={<Briefcase className="w-4 h-4" />}
        />

        <div className="mt-12 sm:mt-16">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
