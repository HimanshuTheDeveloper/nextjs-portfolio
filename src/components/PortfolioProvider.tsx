"use client";
import { useEffect, useState } from "react";
import { PortfolioContext } from "@/lib/portfolio-store";
import { portfolioData as fallback } from "@/data/portfolio";
import type { PortfolioData } from "@/types/portfolio";

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<PortfolioData>(fallback);
  useEffect(() => {
    fetch("/api/portfolio", { cache: "no-store" }).then(r => r.ok ? r.json() : null).then(v => v && setData(v)).catch(() => {});
    const onUpdate = (event: Event) => setData((event as CustomEvent<PortfolioData>).detail);
    window.addEventListener("portfolio-updated", onUpdate);
    return () => window.removeEventListener("portfolio-updated", onUpdate);
  }, []);
  return <PortfolioContext.Provider value={data}>{children}</PortfolioContext.Provider>;
}
