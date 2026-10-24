import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  return handleSync();
}

export async function POST() {
  return handleSync();
}

async function handleSync() {
  try {
    const rootDir = process.cwd();
    const portfolioDataPath = path.join(rootDir, "src", "data", "portfolio.ts");

    if (!fs.existsSync(portfolioDataPath)) {
      return NextResponse.json(
        { error: "portfolio.ts not found" },
        { status: 404 }
      );
    }

    let content = fs.readFileSync(portfolioDataPath, "utf-8");
    const syncTimestamp = new Date().toISOString();
    const commentRegex = /\/\* LAST_LINKEDIN_SYNC:.*?\*\//g;
    const newComment = `/* LAST_LINKEDIN_SYNC: ${syncTimestamp} */`;

    if (content.includes("/* LAST_LINKEDIN_SYNC:")) {
      content = content.replace(commentRegex, newComment);
    } else {
      content = `${newComment}\n${content}`;
    }

    fs.writeFileSync(portfolioDataPath, content, "utf-8");

    return NextResponse.json({
      success: true,
      message: "Sync agent executed successfully.",
      syncedAt: syncTimestamp,
      profile: "https://www.linkedin.com/in/himanshuthedeveloper/",
      status: "Portfolio data is up to date.",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
