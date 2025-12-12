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
  title: "Tax and Commercial Law Services | Practice Areas | CLC",
  description:
    "Explore our tax and corporate law services, covering direct & indirect tax, regulatory disputes, commercial litigation, and high-stakes legal representation across India.",
  keywords:
    "tax and commercial law, corporate tax advisory, indirect tax law firms in delhi, commercial dispute resolution, regulatory disputes, cross border tax lawyer, business tax advisory",
  alternates: {
    canonical: "https://www.clclaw.in/practice-area",
  },
  openGraph: {
    title: "Tax and Commercial Law – Practice Areas | Commercial Law Chamber",
    description:
      "Discover CLC’s tax and corporate law expertise, including direct & indirect tax, regulatory disputes, commercial litigation, and cross-border advisory services.",
    url: "https://www.clclaw.in/practice-area",
    images: ["https://www.clclaw.in/favicon.png"],
    type: "website",
    locale: "en_IN",
    siteName: "Commercial Law Chamber",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax and Commercial Law – Practice Areas | Commercial Law Chamber",
    description:
      "Discover CLC’s tax and corporate law expertise, including direct & indirect tax, regulatory disputes, commercial litigation, and cross-border advisory services.",
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
