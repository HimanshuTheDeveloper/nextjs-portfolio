"use client";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";

export function PortfolioFooter() {
  const pathname = usePathname();
  return pathname === "/admin" || pathname.startsWith("/admin/") ? null : <Footer />;
}
