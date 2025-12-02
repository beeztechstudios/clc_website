"use client";

import Link from "next/link";
import { format } from "date-fns";
import SearchClient from "@/components/SearchClient";
import { useSidebarData } from "@/hooks/useSidebarData";

function getTypeDisplayName(type: string) {
  switch (type) {
    case "case-update":
      return "Case Update";
    case "news":
      return "News";
    case "publication":
      return "Publication";
    case "deal-corner":
      return "Deal Corner";
    default:
      return type;
  }
}

export default function RightSidebar() {
  const { featuredBlogs, featuredNews, isLoading, error } = useSidebarData();

  if (isLoading) {
    return (
      <aside className="p-4">
        <p className="text-sm text-gray-500">Loading sidebar…</p>
      </aside>
    );
  }

  if (error) {
    return (
      <aside className="p-4">
        <p className="text-sm text-red-500">Failed to load sidebar data.</p>
      </aside>
    );
  }

  return (
    <aside className="right-sidebar w-full lg:w-auto bg-white border-l border-gray-200 sticky top-0 self-start lg:max-h-screen overflow-y-auto flex flex-col">

      {/* TITLE */}
      <div className="border-b border-gray-200 flex-shrink-0">
        <div className="bg-[#163C0F] text-white px-4 py-2.5">
          <h3 className="text-sm font-semibold">INSIGHTS AND PUBLICATIONS</h3>
        </div>
      </div>

      {/* SEARCH */}
      <SearchClient />

      {/* RECENT BLOGS */}
      <div className="border-b border-gray-200 flex-shrink-0">
        <div className="bg-white px-4 py-2.5 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-[#163C0F]">RECENT BLOGS</h3>
        </div>

        <div className="p-4 space-y-4">
          {featuredBlogs?.length > 0 ? (
            featuredBlogs.slice(0, 3).map((blog: any) => (
              <div key={blog._id} className="border-b border-gray-200 pb-2">
                <Link
                  href={`/blog/${blog.slug.current}`}
                  className="block p-2 -mx-2 rounded-lg hover:bg-gray-50 group"
                >
                  <h4 className="text-sm font-semibold text-gray-800 group-hover:text-[#163C0F]">
                    {blog.title}
                  </h4>
                  <p className="text-xs text-gray-500 group-hover:text-gray-600">
                    Blog · {blog.category?.name || "Uncategorized"} ·{" "}
                    {format(new Date(blog.publishedAt), "MMM dd yyyy")}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center">No blogs available</p>
          )}
        </div>
      </div>

      {/* RECENT NEWS */}
      <div className="border-b border-gray-200 flex-shrink-0">
        <div className="bg-white px-4 py-2.5 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-[#163C0F]">RECENT NEWS</h3>
        </div>

        <div className="p-4 space-y-4">
          {featuredNews?.length > 0 ? (
            featuredNews.map((news: any) => (
              <div key={news._id} className="border-b border-gray-200 pb-2">
                <Link
                  href={`/news/${news.slug.current}`}
                  className="block p-2 -mx-2 rounded-lg hover:bg-gray-50 group"
                >
                  <h4 className="text-sm font-semibold text-gray-800 group-hover:text-[#163C0F]">
                    {news.title}
                  </h4>
                  <p className="text-xs text-gray-500 group-hover:text-gray-600">
                    {getTypeDisplayName(news.type)} ·{" "}
                    {format(new Date(news.publishedAt), "MMM dd yyyy")}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center">No news available</p>
          )}
        </div>
      </div>
    </aside>
  );
}
