import { Metadata } from "next";
import NewsUpdates from "@/components/NewsUpdates";
import Layout from "@/components/Layout";
import { client } from "@/lib/sanity";

// ----------------------
// Fetch Logic
// ----------------------
async function getNewsUpdates() {
  const query = `
    *[_type == "newsUpdate"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      type,
      publishedAt,
      featuredImage,
      readTime,
      downloadUrl,
      isNew
    }
  `;
  
  try {
    return await client.fetch(query, {}, { next: { revalidate: 60 } }); // Revalidate every 60s
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

// ----------------------
// Metadata
// ----------------------
export const metadata: Metadata = {
  title: "News & Updates - Legal Case Updates & Publications | Commercial Law Chamber",
  description: "Stay informed with latest news, case updates, publications, and deal corner updates from Commercial Law Chamber.",
  keywords: "legal news, case updates, legal publications, tax law news, commercial disputes updates",
  openGraph: {
    title: "News & Updates - Legal Case Updates & Publications",
    description: "Latest news, case updates, and publications on tax law, commercial disputes, and regulatory developments.",
    type: "website",
    url: "https://www.clclaw.in/news",
    images: [{ url: "https://www.clclaw.in/clc-logo.png" }],
  },
};

// ----------------------
// Server Component
// ----------------------
export default async function NewsPage() {
  const newsData = await getNewsUpdates();

  return (
    <Layout>
      {/* We pass the fetched data down to the client component */}
      <NewsUpdates initialNews={newsData} />
    </Layout>
  );
}