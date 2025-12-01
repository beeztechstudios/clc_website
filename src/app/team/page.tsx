// ---------------------------------------------
// Team Page  (SERVER COMPONENT)
// ---------------------------------------------
import { Metadata } from "next";
import Layout from "@/components/Layout";
import Team from "@/components/Team";
import { teamMembers } from "@/components/TeamMember";
import Script from "next/script";

// ---------------------------------------------
// PAGE-SPECIFIC SEO  (Google LOVES THIS)
// ---------------------------------------------
export const metadata: Metadata = {
  title: "Our Team - Legal Experts | Commercial Law Chamber",
  description:
    "Meet the expert legal team at Commercial Law Chamber, specializing in tax advisory, litigation, commercial disputes, and regulatory matters.",
  keywords:
    "legal team, tax lawyers, commercial law experts, Supreme Court lawyers, tax litigation attorneys, regulatory compliance lawyers, law firm partners India",
  alternates: {
    canonical: "https://www.clclaw.in/team",
  },
  openGraph: {
    title: "Our Team - Legal Experts | Commercial Law Chamber",
    description:
      "Meet our experienced team specializing in tax and commercial dispute resolution.",
    url: "https://www.clclaw.in/team",
    images: ["https://www.clclaw.in/clc-logo.png"],
    locale: "en_IN",
    siteName: "Commercial Law Chamber",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team - Commercial Law Chamber",
    description:
      "Experienced legal professionals specializing in tax and commercial disputes.",
    images: ["https://www.clclaw.in/clc-logo.png"],
  },
  robots: "index, follow",
};

// ---------------------------------------------
// JSON-LD (Team Specific Only)
// ---------------------------------------------
function generateTeamSchema() {
  const members = Object.values(teamMembers).map((m) => ({
    "@type": "Person",
    name: m.name,
    jobTitle: m.title,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Commercial Law Chamber",
    url: "https://www.clclaw.in/team",
    description:
      "Meet the legal experts of Commercial Law Chamber specializing in tax and commercial disputes.",
    employee: members,
  };
}

// ---------------------------------------------
// PAGE COMPONENT (SERVER)
// ---------------------------------------------
export default function TeamPage() {
  return (
    <>
      {/* TEAM JSON-LD – Allowed because it's page-specific */}
      <Script
        id="team-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateTeamSchema()),
        }}
      />

      {/* Layout (Client Component) wraps the page content */}
      <Layout>
        <Team />
      </Layout>
    </>
  );
}
