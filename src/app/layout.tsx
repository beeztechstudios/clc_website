import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Global metadata (defaults). Per-page metadata will override these.
 */
export const metadata: Metadata = {
  title: "Commercial Law Chamber - Leading Tax & Commercial Litigation Firm",
  description:
    "Commercial Law Chamber is a boutique law practice specializing in tax advisory and dispute resolution. Expert representation before Supreme Court, High Courts, and specialized tribunals across India.",
  keywords: [
    "tax law",
    "commercial litigation",
    "GST",
    "income tax",
    "customs",
    "legal services",
    "Supreme Court",
    "law firm India",
  ],
  metadataBase: new URL("https://www.clclaw.in"),
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Commercial Law Chamber - Leading Tax & Commercial Litigation Firm",
    description:
      "Strategic Legal Excellence in Tax and Commercial Disputes. Founded in 2008, we deliver bespoke solutions across all Indian jurisdictions.",
    url: "https://www.clclaw.in",
    siteName: "Commercial Law Chamber",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.clclaw.in/clc-logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Law Chamber - Leading Tax & Commercial Litigation Firm",
    description:
      "Commercial Law Chamber is a boutique law practice specializing in tax advisory and dispute resolution.",
    creator: "@CommercialLawChamber",
    images: ["https://www.clclaw.in/clc-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

const GTM_ID = "GTM-NMFHWGHN";
const GA_ID = "G-QKQ1MWQ1RM";

/**
 * JSON-LD: combined LegalService + LocalBusiness schema from SEO team.
 * Keep this in sync with actual business data.
 */
const localBusinessLD = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  name: "Commercial Law Chamber",
  description:
    "Boutique law practice specializing in tax advisory and dispute resolution",
  url: "https://www.clclaw.in",
  logo: "https://www.clclaw.in/clc-logo.png",
  foundingDate: "2008",
  priceRange: "Consultation required",
  telephone: "+91-99999-20118",
  address: {
    "@type": "PostalAddress",
    streetAddress: "A, 1 A2, Jangpura Rd, Block A, Jangpura Extension",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110014",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Direct & Indirect Tax Advisory",
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
        itemOffered: { "@type": "Service", name: "Regulatory Disputes" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "International Tax" },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* Resource hints */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preload LCP images (as per SEO doc) */}
        <link rel="preload" as="image" href="/clc-logo.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/bgpattern.png" fetchPriority="high" />

        {/* Preconnect + Preload Google Fonts (League Spartan as in SEO doc) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&display=swap"
          as="style"
          onLoad={(e) => {
            const link = e.currentTarget as HTMLLinkElement;
            link.rel = "stylesheet";
          }}
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* Google Tag Manager (script) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        {/* Google Analytics (gtag) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* Facebook Pixel (replace ID) */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq) return; n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0'; n.queue=[];
              t=b.createElement(e); t.async=!0; t.src=v; s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)
            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXXXXXXXXXXXXX');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Twitter / X pixel */}
        <Script id="twitter-pixel" strategy="afterInteractive">
          {`
            !function(e,t,n,s,u,a){
              e.twq || (s=e.twq=function(){ s.exe? s.exe.apply(s,arguments):s.queue.push(arguments) }, s.version='1.1', s.queue=[],
              u=t.createElement(n), u.async=!0, u.src='https://static.ads-twitter.com/uwt.js', a=t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u,a));
            }(window, document, 'script');
            twq('config', 'oXXXXXXXXXXXXXXX');
          `}
        </Script>

        {/* LinkedIn Insight */}
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "XXXXXXXX";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-script" strategy="afterInteractive">
          {`
            (function(l){
              if(!l){
                window.lintrk = function(a,b){ window.lintrk.q.push([a,b]) };
                window.lintrk.q = [];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript"; b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>

        {/* Pinterest */}
        <Script id="pinterest-pixel" strategy="afterInteractive">
          {`
            !function(e){
              if(!window.pintrk){
                window.pintrk = function(){ window.pintrk.queue.push(Array.prototype.slice.call(arguments)) };
                var n = window.pintrk; n.queue = []; n.version = "3.0";
                var t = document.createElement("script"); t.async = !0; t.src = e;
                var r = document.getElementsByTagName("script")[0]; r.parentNode.insertBefore(t, r);
              }
            }("https://s.pinimg.com/ct/core.js");
            pintrk('load', 'XXXXXXXXXXXXXXX', { em: '' });
            pintrk('page');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a] = c[a] || function(){ (c[a].q = c[a].q || []).push(arguments) };
              t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/ub7g39owwk";
              y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ub7g39owwk");
          `}
        </Script>

        {/* JSON-LD Structured Data (LocalBusiness + LegalService) */}
        <Script id="local-business-ld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(localBusinessLD)}
        </Script>

        {/* Noscript fallbacks & GTM noscript iframe (placed at top of body) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Noscript fallbacks for pixels (image beacons) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXX&ev=PageView&noscript=1"
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=XXXXXXXX&fmt=gif"
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://ct.pinterest.com/v3/?tid=XXXXXXXXXXXXXXX&event=init&noscript=1"
          />
        </noscript>

        {/* App root (children) */}
        {children}

        {/* Small inline performance hint: you may also add prefetch/prefetch links per page */}
      </body>
    </html>
  );
}
