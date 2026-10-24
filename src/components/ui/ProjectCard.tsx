"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2, FolderGit2 } from "lucide-react";
import { ProjectItem } from "@/types/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card rounded-2xl flex flex-col justify-between p-6 sm:p-7 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/30 group"
    >
      <div>
        {/* Top category & links bar */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {project.category}
          </span>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub Source`}
                className="p-2 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} live link`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-600 hover:text-white text-xs font-medium transition-all duration-200"
              >
                <span>Live Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-slate-400 mt-1 mb-3">
          {project.tagline}
        </p>

        {/* Main Description */}
        <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Problem Solved */}
        {project.problemSolved && (
          <div className="mb-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs">
            <span className="font-semibold text-slate-300 block mb-1">
              Challenge & Solution:
            </span>
            <span className="text-slate-400 leading-relaxed">
              {project.problemSolved}
            </span>
          </div>
        )}

        {/* Key Responsibilities */}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <div className="space-y-1.5 mb-5">
            {project.responsibilities.map((resp, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tech Stack Footer */}
      <div className="pt-4 border-t border-slate-800/80 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
