"use client";

import { motion } from "framer-motion";
import { User, Layers, Database, ShieldCheck, Cpu, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

const principleIcons: Record<string, typeof Layers> = {
  Layers,
  Database,
  ShieldCheck,
  Cpu,
};

export function AboutSection() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="About Me"
          title="Engineering Resilient Systems from Delhi NCR to Global Scale"
          subtitle="A passionate developer dedicated to clean code, robust database modeling, and performant backend solutions."
          icon={<User className="w-4 h-4" />}
        />

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {about.highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-blue-500/30 transition-all text-center group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 font-mono">
                {item.metric}
              </div>
              <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900 mt-2">
                {item.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Narrative & Principles 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-5"
          >
            <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">
              Transforming Complex Logic into Dependable Software
            </h3>

            {about.bioParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed"
              >
                {para}
              </p>
            ))}

            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-500/25 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-300">
                  <span className="font-semibold text-white">Full-Stack Capability:</span>{" "}
                  While my depth is in backend architecture and database scaling, I
                  regularly bridge frontend design systems with Next.js, React, and
                  Tailwind CSS for cohesive, full-lifecycle delivery.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Core Principles */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.principles.map((p, idx) => {
              const IconComp = principleIcons[p.icon] || Layers;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-blue-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 mb-1.5">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
