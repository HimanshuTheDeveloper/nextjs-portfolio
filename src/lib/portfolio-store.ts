"use client";

import { createContext, useContext } from "react";
import type { PortfolioData } from "@/types/portfolio";
import { portfolioData } from "@/data/portfolio";
export const PortfolioContext = createContext<PortfolioData>(portfolioData);
export function usePortfolioData() {
  return useContext(PortfolioContext);
}
