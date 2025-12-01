// ---------------------------------------------
// Practice Area Page  (SERVER COMPONENT)
// ---------------------------------------------
import { Metadata } from "next";
import Script from "next/script";
import Layout from "@/components/Layout";
import Expertise from "@/components/Expertise";

// ---------------------------------------------
// PAGE SEO (Correct for Next.js App Router)
// ---------------------------------------------
export const metadata: Metadata = {
  title: "Practice Areas - Tax & Commercial Disputes | Commercial Law Chamber",
  description:
    "Commercial Law Chamber provides legal expertise in Direct & Indirect Tax, Regulatory Disputes, Commercial Arbitration, and cross-border advisory. Representing clients before Supreme Court, High Courts, and tribunals across India.",
  keywords:
    "tax law, practice areas, direct tax advisory, indirect tax litigation, GST disputes, transfer pricing, customs valuation, SEBI matters, CCI disputes, commercial litigation, regulatory disputes, international tax, DTAA advisory",
  alternates: {
    canonical: "https://www.clclaw.in/practice-area",
  },
  openGraph: {
    title: "Practice Areas - Tax & Commercial Disputes | Commercial Law Chamber",
    description:
      "Comprehensive legal solutions in tax advisory, regulatory matters and commercial dispute resolution.",
    url: "https://www.clclaw.in/practice-area",
    images: ["https://www.clclaw.in/clc-logo.png"],
    type: "website",
    locale: "en_IN",
    siteName: "Commercial Law Chamber",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Areas - Commercial Law Chamber",
    description:
      "Expert representation in tax advisory, regulatory disputes and commercial litigation across India.",
  },
  robots: "index, follow",
};

// ---------------------------------------------
// JSON-LD — PAGE-SPECIFIC (NOT GLOBAL)
// ---------------------------------------------
const practiceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legal Practice Areas",
  provider: {
    "@type": "LegalService",
    name: "Commercial Law Chamber",
    url: "https://www.clclaw.in",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Practice Areas",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Direct & Indirect Tax",
          description:
            "Cross-border tax advisory, transfer pricing, customs valuation, GST disputes, DTAA, FTA, and international tax strategy.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Regulatory & Commercial Disputes",
          description:
            "Representation in SEBI, CCI, NCLT matters, shareholder disputes, arbitration, regulatory compliance, and commercial litigation.",
        },
      },
    ],
  },
};

// ---------------------------------------------
// PAGE COMPONENT
// ---------------------------------------------
export default function PracticeAreaPage() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="practice-area-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceAreaSchema) }}
      />

      <Layout>
        <Expertise />
      </Layout>
    </>
  );
}
