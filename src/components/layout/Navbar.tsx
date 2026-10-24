"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, Linkedin, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = portfolioData.navigation.map((n) => n.href.replace("#", ""));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5 shadow-lg shadow-black/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Terminal className="w-5 h-5 text-blue-100" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                {portfolioData.profile.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 -mt-1 hidden sm:inline">
                Backend Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full border border-slate-800/80 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/90 backdrop-blur-md">
            {portfolioData.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                      : "text-slate-300 hover:text-white dark:text-slate-300 dark:hover:text-white light:text-slate-700 light:hover:text-black hover:bg-slate-800/50 light:hover:bg-slate-200/60"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={portfolioData.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Himanshu on LinkedIn"
              className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-900/60 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <ThemeToggle />

            <a
              href={portfolioData.profile.resumeUrl}
              download="Himanshu_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all duration-200 shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-slate-800 bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 mt-2 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {portfolioData.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
              <a
                href={portfolioData.profile.resumeUrl}
                download="Himanshu_Resume.pdf"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href={portfolioData.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700/80 bg-slate-900/60 text-slate-200 hover:text-white hover:border-blue-500/50 transition-colors text-sm font-medium"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
