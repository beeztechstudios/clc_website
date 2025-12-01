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
import { Metadata } from "next";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient();

type Params = { slug: string | string[] | undefined };

// ----------------------
// Debuggable fetch
// ----------------------
async function getBlogPostDebug(slug?: string | string[]) {
  console.log("[getBlogPostDebug] called with slug:", slug);

  if (!slug || Array.isArray(slug)) {
    console.log("[getBlogPostDebug] invalid or missing slug -> returning null");
    return null;
  }

  const query = `
    *[_type == "blogPost" && slug.current == $slug][0]{
      title,
      excerpt,
      content,
      featuredImage,
      publishedAt,
      category->{name},
      seo,
      slug,
      downloadUrl
    }
  `;

  try {
    const res = await client.fetch(query, { slug });
    console.log(
      "[getBlogPostDebug] sanity response present:",
      !!res,
      res ? { title: res.title, slug: res.slug } : null
    );
    return res;
  } catch (err: any) {
    console.error("[getBlogPostDebug] fetch error:", err?.message ?? err);
    // If Sanity returns detailed response, log it too
    if (err?.response) {
      try {
        console.error("[getBlogPostDebug] error.response:", err.response);
      } catch {}
    }
    return { __debugError: err?.message ?? String(err) };
  }
}

// ----------------------
// Dynamic Metadata Generator
// ----------------------
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug[0]
    : resolvedParams.slug;

  const blogPost = await getBlogPostDebug(slug);

  // Fallback if post not found or error
  if (!blogPost || (blogPost as any).__debugError) {
    return {
      title: "Blog Post Not Found",
    };
  }

  // Use Sanity SEO field if available, otherwise fallback to title/excerpt
  const title = blogPost.seo?.metaTitle || blogPost.title;
  const description = blogPost.seo?.metaDescription || blogPost.excerpt;
  
  // Construct Image URL if exists
  const ogImage = blogPost.featuredImage 
    ? urlFor(blogPost.featuredImage).width(1200).height(630).url()
    : null;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      publishedTime: blogPost.publishedAt,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

// ----------------------
// Page with debug UI (Server Component)
// ----------------------
export default async function BlogPage({ params }: { params: Params }) {
  
  // FIX → unwrap the Promise
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug[0]
    : resolvedParams.slug;

  console.log("[BlogPage] resolved slug:", slug);

  const blogPost = await getBlogPostDebug(slug);

  console.log("[BlogPage] blogPost found:", !!blogPost && !(blogPost as any).__debugError);

  const fetchError =
    blogPost && (blogPost as any).__debugError
      ? (blogPost as any).__debugError
      : null;

  if (!blogPost || fetchError) {
    return (
      <div style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
        <h2 style={{ marginBottom: 12 }}>
          Debug — Blog post not found or fetch failed
        </h2>

        <section style={{ marginBottom: 16 }}>
          <strong>Route params (after await):</strong>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              background: "#f6f8fa",
              padding: 12,
            }}
          >
            {JSON.stringify(resolvedParams, null, 2)}
          </pre>
        </section>

        <section style={{ marginBottom: 16 }}>
          <strong>Sanity response / error:</strong>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              background: "#f6f8fa",
              padding: 12,
            }}
          >
            {fetchError
              ? `FETCH ERROR: ${String(fetchError)}`
              : JSON.stringify(blogPost, null, 2)}
          </pre>
        </section>

        <section style={{ color: "#555" }}>
          <p>
            <strong>Checklist:</strong>
          </p>
          <ol>
            <li>
              Open Sanity Studio → Vision and run the GROQ below for the exact
              slug you see in <code>params</code>.
            </li>
            <li>
              Ensure the document for that slug is <strong>published</strong>{" "}
              (not draft).
            </li>
            <li>Confirm the slug text exactly matches.</li>
            <li>If fetch error appears → paste it here.</li>
          </ol>
        </section>
      </div>
    );
  }

  const publishedDate = blogPost.publishedAt
    ? new Date(blogPost.publishedAt)
    : new Date();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl bg-slate-900/40 mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Header />

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="hidden lg:block lg:w-48 xl:w-52">
            <LeftSidebar activeSection="insights" />
          </div>

          <div className="flex-1 min-w-0">
            <article className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <Link
                    href="/insights"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Insights
                  </Link>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold poppins text-[#163C0F] mb-6">
                  {blogPost.title}
                </h1>

                {blogPost.category?.name && (
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {blogPost.category.name}
                  </span>
                )}

                <time
                  className="text-sm text-gray-600 block mb-5"
                  dateTime={publishedDate.toISOString()}
                >
                  {format(publishedDate, "MMMM d, yyyy")}
                </time>

                {blogPost.featuredImage && (
                  <img
                    src={urlFor(blogPost.featuredImage)
                      .width(800)
                      .height(400)
                      .url()}
                    alt={blogPost.title}
                    className="w-full h-auto rounded-lg shadow-md mb-8"
                  />
                )}
                
                  <div itemProp="articleBody" className="text-gray-700">
                    <SanityContentRenderer content={blogPost.content} />
                  </div>


                {blogPost.downloadUrl && (
                  <div className="mt-8">
                    <Link
                      href={blogPost.downloadUrl}
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

          <div className="hidden lg:block lg:w-60 xl:w-64">
            {/* <QueryClientProvider client={queryClient}> */}
            <RightSidebar />
            {/* </QueryClientProvider> */}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}