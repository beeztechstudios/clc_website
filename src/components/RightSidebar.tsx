"use client";

import Link from "next/link";
import { format } from "date-fns";
import SearchClient from "@/components/SearchClient";
import { useSidebarData } from "@/hooks/useSidebarData";

export default function RightSidebar() {
  const { featuredBlogs, isLoading, error } = useSidebarData();

  if (isLoading) {
    return (
      <aside className="p-4">
        <p className="text-sm text-gray-500">Loading sidebar&hellip;</p>
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
    <aside className="right-sidebar w-full lg:w-64 xl:w-72 bg-[#F1F3F2] min-h-full flex flex-col sticky top-0 self-start">
      {/* SEARCH */}
      <div className="p-4 bg-white border-b border-gray-100">
        <SearchClient />
      </div>

      {/* MISSION AND VISION */}
      <div className="p-4 bg-[#B3C7AB]/30 border-b border-[#B3C7AB]">
        <h3 className="text-[13px] font-bold text-[#163C0F] uppercase tracking-wider mb-2">MISSION AND VISION</h3>
        <p className="text-[12px] text-gray-700 italic">Distinctly Different</p>
      </div>

      {/* WHAT'S NEW */}
      <div className="p-4 bg-white">
        <h3 className="text-[13px] font-bold text-[#163C0F] uppercase tracking-wider mb-4 border-b-2 border-[#163C0F] pb-1 inline-block">WHAT&apos;S NEW</h3>
        <div className="space-y-4">
          {featuredBlogs?.length > 0 ? (
            featuredBlogs.slice(0, 2).map((blog: any) => (
              <div key={blog._id} className="group cursor-pointer">
                <Link href={`/blog/${blog.slug.current}`}>
                  <h4 className="text-[13px] font-bold text-gray-900 group-hover:text-[#163C0F] leading-tight mb-1">
                    {blog.title}
                  </h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tight">
                    Regulatory Digest &middot; {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-[11px] text-gray-500">No recent updates</p>
          )}
        </div>
      </div>

      {/* EVENTS */}
      <div className="p-4 bg-white border-t border-gray-100">
        <h3 className="text-[13px] font-bold text-red-600 uppercase tracking-wider mb-4">EVENTS</h3>
        <div className="space-y-4">
          <div className="group cursor-pointer border-b border-gray-50 pb-3">
            <h4 className="text-[11px] font-bold text-gray-500 uppercase mb-1">WEBINAR</h4>
            <h4 className="text-[12px] font-bold text-gray-900 group-hover:text-red-600 leading-tight mb-1">
              Decoding India&apos;s 2026 Budget &amp; Global Competitiveness
            </h4>
            <p className="text-[10px] text-gray-500">February 04, 2026</p>
          </div>
          <div className="group cursor-pointer">
            <h4 className="text-[11px] font-bold text-gray-500 uppercase mb-1">SEMINAR</h4>
            <h4 className="text-[12px] font-bold text-gray-900 group-hover:text-red-600 leading-tight mb-1">
              TALTalks 2026 Mumbai (Health Edition)
            </h4>
            <p className="text-[10px] text-gray-500">February 21, 2026</p>
          </div>
        </div>
      </div>

      {/* NEWSLETTERS */}
      <div className="p-4 bg-[#F1F3F2] flex-1">
        <h3 className="text-[13px] font-bold text-red-600 uppercase tracking-wider mb-4">NEWSLETTERS</h3>
        <div className="space-y-4">
          <div className="group cursor-pointer">
            <h4 className="text-[11px] font-bold text-gray-500 uppercase mb-1">REGULATORY DIGEST</h4>
            <h4 className="text-[12px] font-bold text-gray-900 group-hover:text-red-600 leading-tight mb-1">
              DPIIT&apos;s New Startup Framework: Deep Tech Startup Recognition and Key Reforms
            </h4>
            <p className="text-[10px] text-gray-500">February 09, 2026</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
