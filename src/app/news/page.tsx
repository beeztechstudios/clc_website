"use client"
import Head from "next/head";
import NewsUpdates from "@/components/NewsUpdates";
import Layout from "@/components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>
          News & Updates - Legal Case Updates & Publications | Commercial Law
          Chamber
        </title>

        <meta
          name="description"
          content="Stay informed with latest news, case updates, publications, and deal corner updates from Commercial Law Chamber. Get insights on tax law, commercial disputes, and regulatory developments."
        />
        <meta
          name="keywords"
          content="legal news, case updates, legal publications, tax law news, commercial disputes updates, regulatory news, deal corner, legal updates India, law firm news"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* OG Tags */}
        <meta
          property="og:title"
          content="News & Updates - Legal Case Updates & Publications | Commercial Law Chamber"
        />
        <meta
          property="og:description"
          content="Latest news, case updates, and publications on tax law, commercial disputes, and regulatory developments from Commercial Law Chamber."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.clclaw.in/news" />
        <meta
          property="og:image"
          content="https://www.clclaw.in/clc-logo.png"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="News & Updates - Commercial Law Chamber" />
        <meta
          name="twitter:description"
          content="Latest legal news, case updates, and publications."
        />
        <meta
          name="twitter:image"
          content="https://www.clclaw.in/clc-logo.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.clclaw.in/news" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "News & Updates",
              description:
                "Latest news, case updates, publications, and deal corner updates from Commercial Law Chamber",
              url: "https://www.clclaw.in/news",
              mainEntity: {
                "@type": "ItemList",
                itemListElement: {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "NewsArticle",
                    name: "News & Updates",
                    description:
                      "Stay informed with our latest case updates, news, and publications from Commercial Law Chamber",
                    url: "https://www.clclaw.in/news",
                    publisher: {
                      "@type": "LegalService",
                      name: "Commercial Law Chamber",
                      url: "https://www.clclaw.in",
                      logo: {
                        "@type": "ImageObject",
                        url: "https://www.clclaw.in/clc-logo.png",
                      },
                    },
                    about: [
                      { "@type": "Thing", name: "Case Updates" },
                      { "@type": "Thing", name: "Legal News" },
                      { "@type": "Thing", name: "Legal Publications" },
                      { "@type": "Thing", name: "Deal Corner" },
                      { "@type": "Thing", name: "Tax Law" },
                      { "@type": "Thing", name: "Commercial Disputes" },
                      { "@type": "Thing", name: "Regulatory Developments" },
                    ],
                  },
                },
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.clclaw.in",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "News & Updates",
                    item: "https://www.clclaw.in/news",
                  },
                ],
              },
            }),
          }}
        />
      </Head>
          <QueryClientProvider client={queryClient}>
      <Layout>
        <NewsUpdates />
      </Layout>
      </QueryClientProvider>
    </>
  );
}
