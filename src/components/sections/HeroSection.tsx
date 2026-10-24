"use client";

import { motion } from "framer-motion";
import {
  FileDown,
  ArrowRight,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  Database,
  Server,
  Code2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-glow"
    >
      {/* Background ambient decorative shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headline and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Currently at WNS (part of Capgemini)</span>
          </motion.div>

          {/* Main Title / Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.08]"
          >
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              {profile.name}
            </span>
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mt-3"
          >
            {profile.title}
          </motion.div>

          {/* Tagline / Elevator Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed"
          >
            {profile.tagline} {profile.summary}
          </motion.p>

          {/* Key Quick Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-2 mt-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60">
              <Server className="w-3.5 h-3.5 text-blue-400" />
              Laravel & PHP
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60">
              <Database className="w-3.5 h-3.5 text-cyan-400" />
              MySQL Optimization
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              RESTful APIs
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              GenAI & Prompting
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={profile.resumeUrl}
              download="Himanshu_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 hover:border-blue-500/50 hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4 text-blue-400" />
              <span>Download Resume</span>
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="p-3.5 rounded-xl border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Send direct email"
              className="p-3.5 rounded-xl border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Creative Developer Code Terminal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-lg rounded-2xl glass-card border border-slate-800/90 shadow-2xl shadow-blue-950/40 overflow-hidden font-mono text-xs">
            {/* Terminal Header Bar */}
            <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] text-slate-400 ml-2">HimanshuService.php</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>bash</span>
              </div>
            </div>

            {/* Terminal Code Body */}
            <div className="p-5 text-slate-300 space-y-2 overflow-x-auto">
              <div className="text-slate-500">{"// Modern Backend Architecture"}</div>
              <div>
                <span className="text-purple-400">namespace</span>{" "}
                <span className="text-slate-200">App\Services\Enterprise</span>;
              </div>
              <br />
              <div>
                <span className="text-purple-400">class</span>{" "}
                <span className="text-amber-300">BackendEngineer</span>{" "}
                <span className="text-purple-400">implements</span>{" "}
                <span className="text-cyan-300">ScalableContract</span>
              </div>
              <div>&#123;</div>
              <div className="pl-4 space-y-1">
                <div>
                  <span className="text-purple-400">public string</span>{" "}
                  <span className="text-blue-300">$developer</span> ={" "}
                  <span className="text-emerald-300">&quot;Himanshu&quot;</span>;
                </div>
                <div>
                  <span className="text-purple-400">public string</span>{" "}
                  <span className="text-blue-300">$currentRole</span> ={" "}
                  <span className="text-emerald-300">&quot;WNS (Capgemini)&quot;</span>;
                </div>
                <div>
                  <span className="text-purple-400">public int</span>{" "}
                  <span className="text-blue-300">$experienceYrs</span> ={" "}
                  <span className="text-amber-400">5</span>;
                </div>
                <br />
                <div>
                  <span className="text-purple-400">public function</span>{" "}
                  <span className="text-blue-400">getCoreStack</span>():{" "}
                  <span className="text-cyan-300">array</span>
                </div>
                <div>&#123;</div>
                <div className="pl-4 text-emerald-300 space-y-0.5">
                  <div>&quot;Laravel / PHP&quot;,</div>
                  <div>&quot;MySQL (Indexing & Perf)&quot;,</div>
                  <div>&quot;RESTful APIs & MVC&quot;,</div>
                  <div>&quot;Next.js & TypeScript&quot;,</div>
                  <div>&quot;GenAI Prompt Workflows&quot;</div>
                </div>
                <div>&#125;</div>
                <br />
                <div>
                  <span className="text-purple-400">public function</span>{" "}
                  <span className="text-blue-400">buildSystem</span>():{" "}
                  <span className="text-cyan-300">Response</span>
                </div>
                <div>&#123;</div>
                <div className="pl-4">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-blue-300">$this</span>-&gt;
                  <span className="text-blue-400">dispatch</span>([
                  <div className="pl-4 text-slate-300">
                    <span className="text-cyan-300">&apos;uptime&apos;</span> =&gt;{" "}
                    <span className="text-emerald-400">&apos;99.99%&apos;</span>,
                    <br />
                    <span className="text-cyan-300">&apos;latency&apos;</span> =&gt;{" "}
                    <span className="text-emerald-400">&apos;optimized&apos;</span>,
                    <br />
                    <span className="text-cyan-300">&apos;security&apos;</span> =&gt;{" "}
                    <span className="text-emerald-400">&apos;hardened&apos;</span>,
                  </div>
                  ]);
                </div>
                <div>&#125;</div>
              </div>
              <div>&#125;</div>
            </div>

            {/* Bottom Status bar */}
            <div className="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>PHP 8.2 • Laravel 10 • MySQL 8</span>
              </span>
              <span className="text-blue-400 font-semibold">Ready to deploy</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
