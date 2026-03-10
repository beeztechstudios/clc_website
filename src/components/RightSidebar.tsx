"use client";

import Link from "next/link";
import { format } from "date-fns";
import SearchClient from "@/components/SearchClient";
import { useSidebarData } from "@/hooks/useSidebarData";
import { BlogPostPreview, NewsUpdatePreview } from "@/types/sanity";

export default function RightSidebar() {
  const { featuredBlogs, featuredNews, isLoading, error } = useSidebarData();

  if (isLoading) {
    return (
      <aside className="right-sidebar w-full lg:w-64 xl:w-72 bg-white min-h-full flex flex-col sticky top-0 self-start p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-gray-100 rounded"></div>
          <div className="h-32 bg-gray-100 rounded"></div>
          <div className="h-32 bg-gray-100 rounded"></div>
        </div>
      </aside>
    );
  }

  if (error) {
    return (
      <aside className="right-sidebar w-full lg:w-64 xl:w-72 bg-white min-h-full flex flex-col sticky top-0 self-start p-6">
        <p className="text-sm text-red-500">Failed to load sidebar data.</p>
      </aside>
    );
  }

  return (
    <aside className="right-sidebar w-full lg:w-64 xl:w-72 flex flex-col sticky top-0 self-start">
      {/* ── SEARCH AREA ── */}
      <div className="p-3 bg-[#E5ECE3]">
        <SearchClient />
      </div>

      {/* ── MISSION AND VISION ── */}
      <div className="p-5 bg-[#A2BC99] border-l-4 border-[#22461B]">
        <h3
          style={{
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            color: "#163C0F",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
          className="mb-3"
        >
          MISSION AND VISION
        </h3>
        <div className="w-full h-px bg-white opacity-40 mb-3" />
        <p
          style={{
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#163C0F",
            fontStyle: "italic"
          }}
        >
          Distinctly Different
        </p>
      </div>

      {/* ── WHAT'S NEW (BLOGS) ── */}
      <div className="p-5 bg-[#F3F3F3] mt-1 border-l-4 border-[#22461B]">
        <h3
          style={{
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            color: "#A82222",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
          className="mb-5"
        >
          WHAT&apos;S NEW
        </h3>

        <div className="space-y-6">
          {featuredBlogs?.slice(0, 2).map((blog: BlogPostPreview) => (
            <div key={blog._id} className="group">
              <Link href={`/blog/${blog.slug.current}`}>
                <h4
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#000000",
                    lineHeight: "1.3"
                  }}
                  className="group-hover:text-[#163C0F] transition-colors duration-200"
                >
                  {blog.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "11px",
                    color: "#9CA3AF"
                  }}
                  className="mt-1"
                >
                  {blog.category?.name}: {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                </p>
              </Link>
              <div className="w-full h-px bg-gray-100 mt-5 group-last:hidden" />
            </div>
          ))}
        </div>
      </div>

      {/* ── NEWSLETTER (NEWS) ── */}
      <div className="p-5  flex-1" style={{ background: "linear-gradient(to top, #F3F3F3, #FFFF)" }}>
        <h3
          style={{
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            color: "#A82222",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
          className="mb-5"
        >
          NEWSLETTER
        </h3>

        <div className="space-y-6">
          {featuredNews?.slice(0, 3).map((news: NewsUpdatePreview) => (
            <div key={news._id} className="group cursor-pointer">
              <Link href={`/news/${news.slug.current}`}>
                <span
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    color: "#163C0F",
                    textTransform: "uppercase",
                    display: "block"
                  }}
                  className="mb-1"
                >
                  {news.type?.replace("-", " ") || "UPDATE"}
                </span>
                <h4
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#000000",
                    lineHeight: "1.3"
                  }}
                  className="group-hover:text-red-700 transition-colors duration-200"
                >
                  {news.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    color: "#9CA3AF"
                  }}
                  className="mt-1"
                >
                  {format(new Date(news.publishedAt), "MMMM dd, yyyy")}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
