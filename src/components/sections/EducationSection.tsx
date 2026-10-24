"use client";

import { GraduationCap, Award, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EducationCard } from "@/components/ui/EducationCard";
import { portfolioData } from "@/data/portfolio";

export function EducationSection() {
  const { education, trainings } = portfolioData;

  return (
    <section id="education" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Academics & Training"
          title="Education & Credentials"
          subtitle="Formal academic degrees in computer applications and verified professional software development training."
          icon={<GraduationCap className="w-4 h-4" />}
        />

        {/* Formal Degrees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {education.map((item, index) => (
            <EducationCard key={item.id} education={item} index={index} />
          ))}
        </div>

        {/* Specialized Trainings Section */}
        {trainings && trainings.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              <span>Specialized Technical Training</span>
            </h3>

            <div className="space-y-4">
              {trainings.map((train) => (
                <div
                  key={train.id}
                  className="glass-card rounded-2xl p-6 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                      {train.title}
                    </h4>
                    <div className="text-sm text-blue-400 font-medium">
                      {train.institution}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed max-w-2xl">
                      {train.description}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end gap-1.5 text-xs font-mono text-slate-400 shrink-0">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">
                      {train.duration}
                    </span>
                    <span>{train.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
