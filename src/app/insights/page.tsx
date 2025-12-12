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
  title: "Legal Insights & Tax Law Updates | Commercial Law Chamber",
  description:
    "Explore expert legal insights and tax law updates. Our team analyzes the latest GST rulings, insolvency cases, and commercial litigation trends in India.",
  keywords:
    "legal insights india, tax law updates, gst law analysis, insolvency law articles, commercial litigation insights, commercial law trends, clc blog",
  alternates: {
    canonical: "https://www.clclaw.in/insights",
  },
  openGraph: {
    title: "Legal Insights & Analysis – Stay Ahead of Regulatory Changes",
    description:
      "Read our latest expert analysis on tax law, GST amendments, and commercial dispute resolution. Stay informed with CLC.",
    url: "https://www.clclaw.in/insights",
    images: ["https://www.clclaw.in/favicon.png"],
    type: "website",
    locale: "en_IN",
    siteName: "Commercial Law Chamber",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Insights & Analysis – Stay Ahead of Regulatory Changes",
    description:
      "Read our latest expert analysis on tax law, GST amendments, and commercial dispute resolution. Stay informed with CLC.",
    images: ["https://www.clclaw.in/favicon.png"],
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
  name: "Legal Insights & Analysis – Stay Ahead of Regulatory Changes",
  description:
    "Read our latest expert analysis on tax law, GST amendments, and commercial dispute resolution. Stay informed with CLC.",
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
