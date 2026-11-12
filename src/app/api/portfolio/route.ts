import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { portfolioData } from "@/data/portfolio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const file = path.join(process.cwd(), "public", "portfolio.json");

export async function GET() {
  try {
    const data = JSON.parse(await fs.readFile(file, "utf8"));
    return NextResponse.json(data, { headers: { "Cache-Control": "no-store" } });
  } catch {
    await fs.writeFile(file, JSON.stringify(portfolioData, null, 2));
    return NextResponse.json(portfolioData, { headers: { "Cache-Control": "no-store" } });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    if (!data || typeof data !== "object" || !data.profile || !Array.isArray(data.projects)) {
      return NextResponse.json({ error: "Invalid portfolio data" }, { status: 400 });
    }
    const serialized = JSON.stringify(data, null, 2);
    JSON.parse(serialized);
    await fs.writeFile(file, serialized + "\n", "utf8");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Could not save data" }, { status: 400 });
  }
}
