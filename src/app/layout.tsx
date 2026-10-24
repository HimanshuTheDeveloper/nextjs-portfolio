import type { Metadata, Viewport } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.linkedin.com/in/himanshuthedeveloper/"),
  title: `${portfolioData.profile.name} | ${portfolioData.profile.title}`,
  description: portfolioData.profile.summary,
  keywords: [
    "Himanshu",
    "Backend Developer",
    "Software Engineer",
    "Laravel Developer",
    "PHP",
    "MySQL",
    "REST API",
    "Capgemini",
    "WNS",
    "Next.js",
    "React",
    "Database Optimization",
    "Delhi Developer",
  ],
  authors: [{ name: portfolioData.profile.name, url: portfolioData.profile.linkedinUrl }],
  creator: portfolioData.profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioData.profile.linkedinUrl,
    title: `${portfolioData.profile.name} — ${portfolioData.profile.title}`,
    description: portfolioData.profile.summary,
    siteName: `${portfolioData.profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.profile.name} — ${portfolioData.profile.title}`,
    description: portfolioData.profile.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.profile.name,
    jobTitle: portfolioData.profile.title,
    worksFor: {
      "@type": "Organization",
      name: "WNS (part of Capgemini)",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "India",
    },
    email: portfolioData.profile.email,
    sameAs: [portfolioData.profile.linkedinUrl],
    knowsAbout: [
      "PHP",
      "Laravel",
      "MySQL",
      "RESTful APIs",
      "Next.js",
      "Database Optimization",
      "GenAI Prompt Engineering",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
