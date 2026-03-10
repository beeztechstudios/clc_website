import { client, urlFor } from "@/lib/sanity";
import Layout from "@/components/Layout";
import Link from "next/link";
import { ArrowLeft, Eye, Calendar, Tag } from "lucide-react";
import { format } from "date-fns";
import { SanityContentRenderer } from "@/lib/sanityContent";
import { Metadata } from "next";

type Params = { slug: string | string[] | undefined };

async function getBlogPost(slug?: string | string[]) {
  if (!slug || Array.isArray(slug)) return null;
  const query = `
    *[_type == "blogPost" && slug.current == $slug][0]{
      title, excerpt, content, featuredImage,
      publishedAt, category->{name}, seo, slug, downloadUrl
    }
  `;
  try {
    return await client.fetch(query, { slug });
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Blog Post Not Found" };
  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const ogImage = post.featuredImage ? urlFor(post.featuredImage).width(1200).height(630).url() : null;
  return {
    title,
    description,
    openGraph: { title, description, type: "article", publishedTime: post.publishedAt, images: ogImage ? [{ url: ogImage }] : [] },
    twitter: { card: "summary_large_image", title, description, images: ogImage ? [ogImage] : [] },
  };
}

export default async function BlogPage({ params }: { params: Params }) {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <Layout>
        <div className="flex-1 bg-white py-8 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="w-full border border-dotted border-[#22461B]/50 mb-8" />
          <p style={{ fontFamily: "League Spartan", fontSize: "16px", color: "#4B5563" }}>
            Blog post not found.{" "}
            <Link href="/insights" style={{ color: "#163C0F", fontWeight: 600 }}>← Back to Insights</Link>
          </p>
        </div>
      </Layout>
    );
  }

  const publishedDate = post.publishedAt ? new Date(post.publishedAt) : new Date();

  return (
    <Layout>
      <div className="flex-1 bg-white py-4 px-4 sm:px-8 md:px-12 lg:px-16 xl:mx-20">

        {/* ── Header ── */}
        <section className="py-8 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-gray-200">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 mb-6"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "13px", color: "#5A6F55" }}
          >
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>

          {/* Category tag */}
          {post.category?.name && (
            <div className="flex items-center gap-2 mb-3">
              <Tag className="h-3 w-3 text-[#336429]" />
              <span
                className="px-3 py-1 rounded-full border border-[#5A6F554D]/90"
                style={{ fontFamily: "League Spartan", fontWeight: 400, fontSize: "12px", color: "#5A6F55" }}
              >
                {post.category.name}
              </span>
            </div>
          )}

          <h1
            className="mb-4"
            style={{
              fontFamily: "League Spartan",
              fontWeight: 700,
              fontSize: "clamp(22px, 4vw, 38px)",
              lineHeight: "1.2",
              letterSpacing: "1px",
              color: "#163C0F",
            }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-2">
            <Calendar className="h-3 w-3 text-[#5A6F55]" />
            <time
              dateTime={publishedDate.toISOString()}
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "13px", color: "#5A6F55" }}
            >
              {format(publishedDate, "MMMM d, yyyy")}
            </time>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="py-8 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
          <div className="w-full border border-dotted border-[#22461B]/50 mb-8" />

          {/* Featured image */}
          {post.featuredImage && (
            <img
              src={urlFor(post.featuredImage).width(800).height(400).url()}
              alt={post.title}
              className="w-full h-auto mb-8"
              style={{ borderRadius: "4px" }}
            />
          )}

          {/* Article body */}
          <div
            style={{
              fontFamily: "League Spartan",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.8vw, 16px)",
              lineHeight: "26px",
              color: "#1F2937",
            }}
          >
            <SanityContentRenderer content={post.content} />
          </div>

          {/* Download */}
          {post.downloadUrl && (
            <div className="mt-8">
              <Link
                href={post.downloadUrl}
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#163C0F] hover:bg-[#163C0F] hover:text-white transition-all"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", color: "#163C0F" }}
              >
                <Eye className="h-4 w-4" /> Read The Full Document Here
              </Link>
            </div>
          )}

          <div className="w-full border border-dotted border-[#22461B]/50 mt-10" />
        </section>

      </div>
    </Layout>
  );
}
