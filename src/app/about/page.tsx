// ---------------------------------------------
// ABOUT PAGE – FULL SSR + SEO OPTIMIZED
// ---------------------------------------------

import { Metadata } from "next";
import Script from "next/script";
import Layout from "@/components/Layout";
import About from "@/components/About";

// ---------------------------------------------
// SEO METADATA (NO <Head>, FULL SSR)
// ---------------------------------------------
export const metadata: Metadata = {
  title: "About Us - Commercial Law Chamber | Leading Tax & Commercial Disputes Law Firm",
  description:
    "Learn about Commercial Law Chamber — Founded in 2008, a boutique law practice specializing in tax advisory and dispute resolution with partners, associates, and a pan-India representation network.",
  keywords:
    "about commercial law chamber, tax law firm history, boutique law practice, tax litigation experts, Supreme Court lawyers, legal firm India, tax advisory firm",
  alternates: {
    canonical: "https://www.clclaw.in/about",
  },
  openGraph: {
    title:
      "About Us - Commercial Law Chamber | Tax & Commercial Disputes Law Firm",
    description:
      "Boutique law practice specializing in tax advisory and dispute resolution with representation across India.",
    url: "https://www.clclaw.in/about",
    images: ["https://www.clclaw.in/clc-logo.png"],
    locale: "en_IN",
    type: "website",
    siteName: "Commercial Law Chamber",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Commercial Law Chamber",
    description:
      "Boutique law practice specializing in tax advisory, litigation, and commercial disputes.",
    images: ["https://www.clclaw.in/clc-logo.png"],
  },
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

// ---------------------------------------------
// ABOUT PAGE SCHEMA
// ---------------------------------------------
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "LegalService",
    name: "Commercial Law Chamber",
    description:
      "Boutique law practice specializing in tax advisory and dispute resolution.",
    url: "https://www.clclaw.in",
    logo: "https://www.clclaw.in/clc-logo.png",
    foundingDate: "2008",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 18,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Tax Advisory",
      "Tax Litigation",
      "Commercial Disputes",
      "GST Litigation",
      "Regulatory Disputes",
      "Supreme Court Representation",
      "High Court Representation",
      "ITAT",
      "CESTAT",
      "VAT Tribunals",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tax Advisory and Litigation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Disputes Resolution",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GST Investigations and Refund Litigation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trade Remedies and International Tax",
          },
        },
      ],
    },
  },
};

// ---------------------------------------------
// PAGE COMPONENT (SSR BY DEFAULT)
// ---------------------------------------------
export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <Layout>
        <About />
      </Layout>
    </>
  );
}
