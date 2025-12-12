import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

// ⭐ Homepage SEO Metadata
export const metadata = {
  title: "Tax & Commercial Disputes Law Firm | Commercial Law Chamber",
  description:
    "Specialized lawyers for GST, tax, and complex commercial disputes with 20+ years of experience and Supreme Court representation. Book a consultation.",
  keywords:
    "tax disputes, commercial disputes, gst disputes, tax litigation, commercial litigation, supreme court lawyer, indirect tax, business disputes",
  alternates: {
    canonical: "https://www.clclaw.in",
  },
  openGraph: {
    title: "Leading Tax & Commercial Disputes Law Firm in India",
    description:
      "Commercial Law Chamber provides trusted tax and commercial dispute resolution, regulatory advocacy, and international tax expertise backed by legal excellence.",
    url: "https://www.clclaw.in",
    images: [
      {
        url: "https://www.clclaw.in/favicon.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_IN",
    siteName: "Commercial Law Chamber",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Law Chamber - Leading Tax & Commercial Disputes Law Firm in India",
    description:
      "Commercial Law Chamber provides trusted tax and commercial dispute resolution, regulatory advocacy, and international tax expertise backed by legal excellence.",
    images: ["https://www.clclaw.in/favicon.png"],
  },
};

// ⭐ Homepage Schema — No duplicate; minimal version only
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Commercial Law Chamber",
  url: "https://www.clclaw.in",
  description:
    "Commercial Law Chamber provides trusted tax and commercial dispute resolution, regulatory advocacy, and international tax expertise backed by legal excellence.",
  image: "https://www.clclaw.in/clc-logo.png",
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schema for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
