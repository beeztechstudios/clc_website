"use client"; // THIS IS CRITICAL

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function HomeClientWrapper() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: "Commercial Law Chamber",
    description: "Boutique law practice specializing in tax advisory and dispute resolution",
    url: "https://www.clclaw.in",
    logo: "https://www.clclaw.in/clc-logo.png",
    foundingDate: "2008",
    address: {
      "@type": "PostalAddress",
      streetAddress: "A, 1 A2, Jangpura Rd, Block A",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110014",
      addressCountry: "IN",
    },
  };

  return (
    <QueryClientProvider client={queryClient}>
      {/* JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Layout>
        <Hero />
      </Layout>
    </QueryClientProvider>
  );
}
