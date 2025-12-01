"use client";

import { notFound } from "next/navigation";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";

import Link from "next/link";
import { ArrowLeft, Eye } from "lucide-react";
import { format } from "date-fns";
import { SanityContentRenderer } from "@/lib/sanityContent";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

type Params = { slug: string | string[] | undefined };



// ----------------------
// Fetch Function
// ----------------------
async function getNewsDebug(slug?: string | string[]) {
  console.log("[getNewsDebug] slug:", slug);

  if (!slug || Array.isArray(slug)) {
    console.log("[getNewsDebug] INVALID slug →", slug);
    return null;
  }

  const query = `
    *[_type == "newsUpdate" && slug.current == $slug][0]{
      title,
      excerpt,
      type,
      content,
      featuredImage,
      publishedAt,
      downloadUrl,
      seo,
      slug
    }
  `;

  try {
    const result = await client.fetch(query, { slug });
    console.log("[getNewsDebug] fetch result:", result ? true : false);
    return result;
  } catch (err: any) {
    console.error("[getNewsDebug] ERROR:", err);
    return { __debugError: err?.message ?? String(err) };
  }
}

// ----------------------
// PAGE
// ----------------------
export default async function NewsPage({ params }: { params: Params }) {
  // ⭐ FIX → unwrap the Promise
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug[0]
    : resolvedParams.slug;

  console.log("[NewsPage] resolved slug:", slug);

  const news = await getNewsDebug(slug);
  const fetchError =
    news && (news as any).__debugError
      ? (news as any).__debugError
      : null;

  if (!news || fetchError) {
    return (
      <div style={{ padding: 24, fontFamily: "system-ui" }}>
        <h2>❌ News Not Found or Fetch Failed</h2>

        <div style={{ marginTop: 14 }}>
          <strong>Params:</strong>
          <pre>{JSON.stringify(resolvedParams, null, 2)}</pre>
        </div>

        <div style={{ marginTop: 14 }}>
          <strong>Sanity Response / Error:</strong>
          <pre>
            {fetchError
              ? `FETCH ERROR → ${fetchError}`
              : JSON.stringify(news, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  const publishedDate = news.publishedAt
    ? new Date(news.publishedAt)
    : new Date();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl bg-slate-900/40 mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Header />

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="hidden lg:block lg:w-48 xl:w-52">
            <LeftSidebar activeSection="content" />
          </div>

          <div className="flex-1 min-w-0">
            <article className="bg-white/95 p-8 rounded-lg shadow-sm">
              <div className="max-w-4xl mx-auto">

                {/* Back Button */}
                <Link
                  href="/news"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to News
                </Link>

                {/* Title */}
                <h1 className="text-3xl lg:text-4xl font-bold poppins text-[#163C0F] my-6">
                  {news.title}
                </h1>

                {/* Type */}
                {news.type && (
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {news.type}
                  </span>
                )}

                {/* Date */}
                <time
                  className="text-sm text-gray-600 block mb-5"
                  dateTime={publishedDate.toISOString()}
                >
                  {format(publishedDate, "MMMM d, yyyy")}
                </time>

                {/* Image */}
                {news.featuredImage && (
                  <img
                    src={urlFor(news.featuredImage)
                      .width(800)
                      .height(400)
                      .url()}
                    alt={news.title}
                    className="w-full h-auto rounded-lg shadow-md mb-8"
                  />
                )}

                {/* Main Content */}
                <div className="text-gray-700">
                  <SanityContentRenderer content={news.content} />
                </div>

                {/* Download Button */}
                {news.downloadUrl && (
                  <div className="mt-8">
                    <Link
                      href={news.downloadUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-50"
                    >
                      <Eye className="h-4 w-4" />
                      Read The Full Document Here
                    </Link>
                  </div>
                )}
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:w-60 xl:w-64">
            <QueryClientProvider client={queryClient}>
              <RightSidebar />
            </QueryClientProvider>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
