// ---------------------------------------------
// Insights Page (SERVER COMPONENT)
// ---------------------------------------------
import { Metadata } from "next";
import Script from "next/script";
import Layout from "@/components/Layout";
import InsightsClientWrapper from "@/components/InsightsClientWrapper";

// ---------------------------------------------
// PAGE SEO USING METADATA API
// ---------------------------------------------
export const metadata: Metadata = {
  title: "Legal Insights & Publications | Commercial Law Chamber",
  description:
    "Stay informed with the latest legal insights, case law updates, and regulatory developments in tax law, commercial litigation, and compliance from Commercial Law Chamber.",
  keywords:
    "legal insights, tax law updates, commercial litigation insights, regulatory developments, case law updates, legal publications, GST updates, tax advisory insights",
  alternates: {
    canonical: "https://www.clclaw.in/insights",
  },
  openGraph: {
    title: "Legal Insights & Publications | Commercial Law Chamber",
    description:
      "Latest insights on tax law, GST, litigation strategy, regulatory updates, and commercial disputes from experienced legal experts.",
    url: "https://www.clclaw.in/insights",
    images: ["https://www.clclaw.in/clc-logo.png"],
    type: "website",
    locale: "en_IN",
    siteName: "Commercial Law Chamber",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Insights & Publications | Commercial Law Chamber",
    description:
      "Explore expert insights on taxation, litigation, and regulatory law.",
    images: ["https://www.clclaw.in/clc-logo.png"],
  },
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

// ---------------------------------------------
// PAGE-SPECIFIC SCHEMA
// ---------------------------------------------
const insightsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Legal Insights & Publications",
  description:
    "Expert legal insights, tax law updates, regulatory developments, and commercial dispute analysis.",
  url: "https://www.clclaw.in/insights",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Blog",
          name: "Legal Insights & Publications",
          url: "https://www.clclaw.in/insights",
          publisher: {
            "@type": "LegalService",
            name: "Commercial Law Chamber",
          },
          about: [
            { "@type": "Thing", name: "Tax Law" },
            { "@type": "Thing", name: "Commercial Litigation" },
            { "@type": "Thing", name: "Regulatory Compliance" },
            { "@type": "Thing", name: "GST" },
            { "@type": "Thing", name: "Direct Tax" },
            { "@type": "Thing", name: "Indirect Tax" },
          ],
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.clclaw.in" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.clclaw.in/insights" },
    ],
  },
};

// ---------------------------------------------
// PAGE COMPONENT
// ---------------------------------------------
export default function InsightsPage() {
  return (
    <>
      <Script
        id="insights-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insightsSchema) }}
      />

      <Layout>
        <InsightsClientWrapper />
      </Layout>
    </>
  );
}
