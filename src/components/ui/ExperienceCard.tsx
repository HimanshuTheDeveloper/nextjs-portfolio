"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { ExperienceItem } from "@/types/portfolio";

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 sm:pl-10 pb-12 last:pb-2 group"
    >
      {/* Timeline Vertical Bar */}
      <div className="absolute left-[11px] sm:left-[15px] top-6 bottom-0 w-[2px] bg-slate-800 group-last:hidden" />

      {/* Timeline Node Icon */}
      <div
        className={`absolute left-0 sm:left-1 top-1.5 w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-110 ${
          experience.isCurrent
            ? "border-blue-500 bg-blue-950 text-blue-400 shadow-lg shadow-blue-500/40"
            : "border-slate-700 bg-slate-900 text-slate-400 group-hover:border-blue-400 group-hover:text-blue-300"
        }`}
      >
        <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </div>

      {/* Card Content Container */}
      <div className="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-900/10">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                {experience.role}
              </h3>
              {experience.isCurrent && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Present Role
                </span>
              )}
            </div>
            <div className="text-base font-semibold text-blue-400 mt-1">
              {experience.company}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
            <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              {experience.startDate} — {experience.endDate}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              {experience.location}
              {experience.workMode && ` (${experience.workMode})`}
            </span>
          </div>
        </div>

        {/* Overview Description */}
        {experience.description && (
          <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4 leading-relaxed">
            {experience.description}
          </p>
        )}

        {/* Responsibilities list */}
        {experience.responsibilities && experience.responsibilities.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Key Responsibilities:
            </h4>
            <ul className="space-y-2">
              {experience.responsibilities.map((resp, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Achievements if any */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div className="mb-5 p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/20">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1.5">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Key Impact:</span>
            </div>
            <ul className="space-y-1">
              {experience.achievements.map((ach, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                  • {ach}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Chips */}
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-800/80">
          <span className="text-[11px] font-mono text-slate-400 mr-1">Stack:</span>
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:border-blue-500/40 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
