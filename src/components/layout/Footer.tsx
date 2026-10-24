"use client";

import { ArrowUp, Heart, Terminal, Linkedin, Mail, Github, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Title */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">
              {portfolioData.profile.name}
            </div>
            <div className="text-xs text-slate-400">
              {portfolioData.profile.title} • {portfolioData.profile.location}
            </div>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={portfolioData.profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.profile.email}`}
            aria-label="Email"
            className="p-2 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          {portfolioData.profile.githubUrl && (
            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {portfolioData.profile.phone && (
            <a
              href={`tel:${portfolioData.profile.phone}`}
              aria-label="Phone"
              className="p-2 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Right: Copyright & Back-to-Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500">
            © {currentYear} {portfolioData.profile.name}. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/80 text-xs text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
