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
  title: "Best Tax Lawyers in India | Commercial Law Chamber Team",
  description:
    "Meet India's best tax lawyers. Our expert team specializes in complex tax advisory, litigation, commercial disputes, and Supreme Court. Consult us today.",
  keywords:
    "best tax lawyers in india, top tax attorney, tax advisory, commercial disputes, best gst lawyer, supreme court lawyers, regulatory disputes",
  alternates: {
    canonical: "https://www.clclaw.in/team",
  },
  openGraph: {
    title: "Meet India's Top Tax Lawyers | Commercial Law ",
    description:
      "Expertise in Direct & Indirect Tax, GST, and high-stakes Commercial Disputes. Our team combines research-driven analysis with 20+ years of legal excellence.",
    url: "https://www.clclaw.in/team",
    images: ["https://www.clclaw.in/favicon.png"],
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
