// pages/insights.tsx
"use client"
import Head from "next/head";
import Layout from "@/components/Layout";
import Insights from "@/components/Insights";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function InsightsPage() {
  const metaTitle = "Legal Insights & Publications | Commercial Law Chamber";
  const metaDescription =
    "Stay informed with latest legal insights, case law updates, and regulatory developments in tax law, commercial litigation, and regulatory compliance from Commercial Law Chamber.";
  const canonicalUrl = "https://www.clclaw.in/insights";
  const ogImage = "https://www.clclaw.in/clc-logo.png";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="legal insights, tax law updates, commercial litigation insights, regulatory developments, case law updates, legal publications, tax advisory insights, GST updates, legal blog"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Legal Insights & Publications",
              "description": metaDescription,
              "url": canonicalUrl,
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Blog",
                    "name": "Legal Insights & Publications",
                    "description": metaDescription,
                    "url": canonicalUrl,
                    "publisher": {
                      "@type": "LegalService",
                      "name": "Commercial Law Chamber",
                      "url": "https://www.clclaw.in"
                    },
                    "about": [
                      { "@type": "Thing", "name": "Tax Law" },
                      { "@type": "Thing", "name": "Commercial Litigation" },
                      { "@type": "Thing", "name": "Regulatory Compliance" },
                      { "@type": "Thing", "name": "GST" },
                      { "@type": "Thing", "name": "Direct Tax" },
                      { "@type": "Thing", "name": "Indirect Tax" }
                    ]
                  }
                }
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.clclaw.in" },
                  { "@type": "ListItem", "position": 2, "name": "Insights", "item": canonicalUrl }
                ]
              }
            }),
          }}
        />
      </Head>
          <QueryClientProvider client={queryClient}>
      <Layout>
        <Insights />
      </Layout>
      </QueryClientProvider>
    </>
  );
}
