import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

// ⭐ Homepage SEO Metadata
export const metadata = {
  title: "Commercial Law Chamber - Leading Tax & Commercial Litigation Firm",
  description:
    "Commercial Law Chamber is a boutique law practice specializing in tax advisory and dispute resolution. Representing clients before Supreme Court, High Courts, and tribunals across India.",
  keywords:
    "tax law firm India, commercial litigation, GST, income tax disputes, customs law, legal advisory, Supreme Court lawyer, tax attorney Delhi",
  alternates: {
    canonical: "https://www.clclaw.in",
  },
  openGraph: {
    title: "Commercial Law Chamber - Leading Tax & Commercial Litigation Firm",
    description:
      "Strategic legal representation in tax, commercial and regulatory disputes across India.",
    url: "https://www.clclaw.in",
    images: [
      {
        url: "https://www.clclaw.in/clc-logo.png",
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
    title: "Commercial Law Chamber - Leading Tax & Commercial Litigation Firm",
    description:
      "Boutique law practice specializing in tax advisory and commercial disputes.",
    images: ["https://www.clclaw.in/clc-logo.png"],
  },
};

// ⭐ Homepage Schema — No duplicate; minimal version only
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Commercial Law Chamber",
  url: "https://www.clclaw.in",
  description:
    "Boutique law practice specializing in tax advisory and commercial dispute resolution.",
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
