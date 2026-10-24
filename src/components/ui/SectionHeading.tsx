import { ReactNode } from "react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  icon?: ReactNode;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  icon,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? "mx-auto text-center" : "text-left"
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-blue-500/25 bg-blue-500/10 text-blue-400 mb-4 ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        {icon}
        <span>{badge}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
