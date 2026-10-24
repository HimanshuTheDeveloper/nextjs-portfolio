"use client";

import { motion } from "framer-motion";
import { Server, Database, Layout, Sparkles, Check } from "lucide-react";
import { SkillCategory } from "@/types/portfolio";

const iconMap: Record<string, typeof Server> = {
  Server,
  Database,
  Layout,
  Sparkles,
};

interface SkillGroupProps {
  category: SkillCategory;
  index: number;
}

export function SkillGroup({ category, index }: SkillGroupProps) {
  const IconComponent = iconMap[category.icon] || Server;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
          <IconComponent className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
            {category.title}
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            {category.skills.length} core proficiencies
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
              skill.featured
                ? "bg-blue-600/15 text-blue-300 border border-blue-500/35 hover:bg-blue-600/25 hover:text-white"
                : "bg-slate-800/60 text-slate-300 border border-slate-700/60 hover:border-slate-500 hover:text-white"
            }`}
          >
            {skill.featured && <Check className="w-3 h-3 text-blue-400" />}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
