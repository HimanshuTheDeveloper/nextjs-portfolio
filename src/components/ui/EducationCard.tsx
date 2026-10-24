"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import { EducationItem } from "@/types/portfolio";

interface EducationCardProps {
  education: EducationItem;
  index: number;
}

export function EducationCard({ education, index }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 relative group"
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
              {education.degree}
            </h3>
            <div className="text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
              {education.institution}
            </div>
            {education.field && (
              <div className="text-xs font-mono text-blue-400 mt-0.5">
                {education.field}
              </div>
            )}
          </div>
        </div>

        <div className="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono text-slate-400 shrink-0">
          <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            {education.startDate} – {education.endDate}
          </span>
          {education.location && (
            <span className="inline-flex items-center gap-1.5 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              {education.location}
            </span>
          )}
        </div>
      </div>

      {education.details && (
        <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed flex items-start gap-2">
          <BookOpen className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <span>{education.details}</span>
        </div>
      )}
    </motion.div>
  );
}
