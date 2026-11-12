"use client";

import { usePathname } from "next/navigation";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";

export function PortfolioChrome() {
  const pathname = usePathname();
  if (pathname === "/admin" || pathname.startsWith("/admin/")) return null;
  return <><ScrollProgress /><Navbar /></>;
}
