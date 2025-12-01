// // pages/contact.tsx
// "use client"
// import Head from "next/head";
// import Layout from "@/components/Layout";
// import Contact from "@/components/Contact";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient();

// export default function ContactPage() {
//   const metaTitle = "Contact Us - Get Legal Consultation | Commercial Law Chamber";
//   const metaDescription =
//     "Contact Commercial Law Chamber for expert legal consultation in tax and commercial disputes. Reach us at +91 99999 20118 or vivek.sarin@clclaw.in. Pan-India legal network with offices across all state capitals.";
//   const canonicalUrl = "https://www.clclaw.in/contact";
//   const ogImage = "https://www.clclaw.in/clc-logo.png";

//   return (
//     <>
//       <Head>
//         <title>{metaTitle}</title>
//         <meta name="description" content={metaDescription} />
//         <meta name="keywords" content="contact commercial law chamber, legal consultation, tax lawyer contact, commercial disputes lawyer, law firm contact India, legal advice, tax advisory contact, New Delhi law firm" />
//         <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
//         <meta name="googlebot" content="index, follow" />
//         <meta name="bingbot" content="index, follow" />

//         {/* Open Graph */}
//         <meta property="og:title" content={metaTitle} />
//         <meta property="og:description" content={metaDescription} />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:image" content={ogImage} />
//         <meta property="og:locale" content="en_IN" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={metaTitle} />
//         <meta name="twitter:description" content={metaDescription} />
//         <meta name="twitter:image" content={ogImage} />

//         {/* Canonical */}
//         <link rel="canonical" href={canonicalUrl} />

//         {/* Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "ContactPage",
//               "name": "Contact Us",
//               "description": "Contact Commercial Law Chamber for expert legal consultation in tax and commercial disputes",
//               "url": canonicalUrl,
//               "mainEntity": {
//                 "@type": "LegalService",
//                 "name": "Commercial Law Chamber",
//                 "url": "https://www.clclaw.in",
//                 "telephone": "+91-99999-20118",
//                 "email": "vivek.sarin@clclaw.in",
//                 "address": {
//                   "@type": "PostalAddress",
//                   "streetAddress": "Commercial Law Chamber",
//                   "addressLocality": "New Delhi",
//                   "addressCountry": "IN"
//                 },
//                 "areaServed": { "@type": "Country", "name": "India" },
//                 "openingHoursSpecification": [
//                   {
//                     "@type": "OpeningHoursSpecification",
//                     "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
//                     "opens": "09:00",
//                     "closes": "19:00"
//                   },
//                   { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
//                 ],
//                 "priceRange": "Consultation",
//                 "serviceType": [
//                   "Tax Advisory",
//                   "Commercial Disputes",
//                   "Regulatory Compliance",
//                   "GST Litigation",
//                   "Direct Tax",
//                   "Indirect Tax"
//                 ]
//               },
//               "breadcrumb": {
//                 "@type": "BreadcrumbList",
//                 "itemListElement": [
//                   { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.clclaw.in" },
//                   { "@type": "ListItem", "position": 2, "name": "Contact", "item": canonicalUrl }
//                 ]
//               }
//             }),
//           }}
//         />
//       </Head>
//       <QueryClientProvider client={queryClient}>
//       <Layout>
//         <Contact />
//       </Layout>
//       </QueryClientProvider>
//     </>
//   );
// }
// ---------------------------------------------
// CONTACT PAGE – SERVER COMPONENT (SEO PERFECT)
// ---------------------------------------------

import { Metadata } from "next";
import Script from "next/script";
import Layout from "@/components/Layout";
import Contact from "@/components/Contact";

// ---------------------------------------------
// PAGE METADATA (SEO)
// ---------------------------------------------
export const metadata: Metadata = {
  title: "Contact Us - Get Legal Consultation | Commercial Law Chamber",
  description:
    "Contact Commercial Law Chamber for expert legal consultation in tax and commercial disputes. Reach us at +91 99999 20118 or vivek.sarin@clclaw.in. Pan-India legal network with offices across all state capitals.",
  keywords:
    "contact commercial law chamber, legal consultation, tax lawyer contact, commercial disputes lawyer, law firm contact India, legal advice, tax advisory contact, New Delhi law firm",
  alternates: { canonical: "https://www.clclaw.in/contact" },

  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  openGraph: {
    title: "Contact Us - Get Legal Consultation | Commercial Law Chamber",
    description:
      "Reach out for expert legal assistance in tax, commercial, and regulatory disputes.",
    url: "https://www.clclaw.in/contact",
    images: ["https://www.clclaw.in/clc-logo.png"],
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Commercial Law Chamber",
    description:
      "Get legal assistance in tax litigation, commercial disputes, and regulatory matters.",
    images: ["https://www.clclaw.in/clc-logo.png"],
  },
};

// ---------------------------------------------
// PAGE SCHEMA (NO DUPLICATES)
// ---------------------------------------------
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Commercial Law Chamber",
  url: "https://www.clclaw.in/contact",
  description:
    "Reach Commercial Law Chamber for expert legal consultation in tax and commercial matters.",
  mainEntity: {
    "@type": "LegalService",
    name: "Commercial Law Chamber",
    url: "https://www.clclaw.in",
    telephone: "+91-99999-20118",
    email: "vivek.sarin@clclaw.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Commercial Law Chamber",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    areaServed: { "@type": "Country", name: "India" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "Consultation",
    serviceType: [
      "Tax Advisory",
      "Commercial Disputes",
      "Regulatory Compliance",
      "GST Litigation",
      "Direct Tax",
      "Indirect Tax",
    ],
  },

  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.clclaw.in" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.clclaw.in/contact" },
    ],
  },
};

// ---------------------------------------------
// PAGE COMPONENT
// ---------------------------------------------
export default function ContactPage() {
  return (
    <>
      {/* JSON-LD STRUCTURED DATA */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <Layout>
        <Contact />
      </Layout>
    </>
  );
}
