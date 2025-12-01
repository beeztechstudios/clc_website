// pages/career.tsx
"use client";
import Head from "next/head";
import Layout from "@/components/Layout";
import Career from "@/components/Career";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function CareerPage() {
  const metaTitle = "Career Opportunities - Join Our Legal Team | Commercial Law Chamber";
  const metaDescription = "Join Commercial Law Chamber - a boutique law practice specializing in tax and commercial disputes. Career opportunities for lawyers, associates, and legal professionals. Collaborative environment, learning & development, and professional growth.";
  const canonicalUrl = "https://www.clclaw.in/career";
  const ogImage = "https://www.clclaw.in/clc-logo.png";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="legal career opportunities, law firm jobs, tax lawyer jobs, commercial disputes lawyer jobs, legal associate positions, law firm careers India, legal jobs New Delhi, law firm hiring" />
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

        <link rel="canonical" href={canonicalUrl} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "Legal Career Opportunities",
              "description": metaDescription,
              "identifier": {
                "@type": "PropertyValue",
                "name": "Commercial Law Chamber",
                "value": "CLC-CAREER"
              },
              "datePosted": "2025-01-01",
              "validThrough": "2025-12-31",
              "employmentType": ["FULL_TIME", "PART_TIME", "INTERN"],
              "hiringOrganization": {
                "@type": "LegalService",
                "name": "Commercial Law Chamber",
                "sameAs": "https://www.clclaw.in",
                "logo": "https://www.clclaw.in/clc-logo.png"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "New Delhi",
                  "addressCountry": "IN"
                }
              },
              "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "INR",
                "value": {
                  "@type": "QuantitativeValue",
                  "value": "Competitive",
                  "unitText": "MONTH"
                }
              },
              "jobBenefits": [
                "Collaborative Environment",
                "Learning & Development",
                "Professional Growth",
                "Work-Life Balance",
                "Mentorship Opportunities",
                "Training Programs"
              ],
              "qualifications": "LLB degree or equivalent legal qualification. Passion for tax and commercial law. Strong research and analytical skills.",
              "skills": ["Tax Law", "Commercial Disputes", "Legal Research", "Litigation", "Regulatory Compliance"],
              "workHours": "Monday - Friday: 9:00 AM - 7:00 PM, Saturday: 10:00 AM - 4:00 PM"
            }),
          }}
        />
      </Head>
      <QueryClientProvider client={queryClient}>
      <Layout>
        <Career />
      </Layout>
      </QueryClientProvider>
    </>
  );
}
