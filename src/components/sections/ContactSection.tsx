"use client";

import { useState } from "react";
import {
  Mail,
  Linkedin,
  MapPin,
  Phone,
  FileDown,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export function ContactSection() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !senderEmail || !message) return;

    // Trigger genuine email client with pre-filled content
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Get in Touch"
          title="Let’s Discuss Your Next High-Impact Project"
          subtitle="Whether you have an enterprise backend opportunity, database optimization challenge, or contract engagement, I’m eager to connect."
          icon={<Mail className="w-4 h-4" />}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/80 space-y-6">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                Direct Contact Details
              </h3>

              {/* Email item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-slate-400">Primary Email</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors truncate block"
                  >
                    {profile.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="mt-1 text-xs text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-mono"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-slate-400">LinkedIn Profile</div>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>in/himanshuthedeveloper</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Verified Professional Profile
                  </div>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-white">
                    {profile.location}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Open to Hybrid, On-site (NCR), and Remote engagements
                  </div>
                </div>
              </div>

              {/* Phone item */}
              {profile.phone && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Mobile Phone</div>
                    <a
                      href={`tel:${profile.phone}`}
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Resume Download CTA Card */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={profile.resumeUrl}
                  download="Himanshu_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-blue-600/20 active:scale-98"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Complete Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Direct Email Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to launch your default mail client or reach
                me directly at{" "}
                <span className="text-blue-400 font-mono">{profile.email}</span>.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-emerald-200">
                    Your email client has been opened with your inquiry! If it did
                    not open automatically, feel free to email directly at{" "}
                    <span className="font-mono font-bold text-white">
                      {profile.email}
                    </span>
                    .
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="sender-name"
                      className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sender-email"
                      className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message-subject"
                    className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="message-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Backend Engineering Inquiry / Consultation"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message-body"
                    className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                  >
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message-body"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, backend architecture requirements, or role details..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-blue-600/30 hover:shadow-lg active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
