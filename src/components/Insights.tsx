"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Download, Eye } from "lucide-react";
import Link from "next/link";
import { useBlogPosts, useCategories } from "@/hooks/useSanityData";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { useState, useMemo } from "react";

const Insights = () => {
  const { data: blogs = [], isLoading: blogsLoading } = useBlogPosts();
  const { data: categories = [] } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState("All");

  /** ----------------------------------------------------
   * CATEGORY LIST (memoized to prevent re-render spam)
   * ---------------------------------------------------- */
  const categoryList = useMemo(
    () => ["All", ...categories.map((cat) => cat.name)],
    [categories]
  );

  /** ----------------------------------------------------
   * FILTERED BLOGS (memoized for performance)
   * ---------------------------------------------------- */
  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "All") return blogs;
    return blogs.filter(
      (blog) => blog.category?.name === selectedCategory
    );
  }, [blogs, selectedCategory]);

  return (
    <div className="flex-1 bg-white">
      {/* ----------------------------------------------
          HEADER SECTION
      ---------------------------------------------- */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl poppins font-bold text-[#163C0F] mb-3">
            Legal Insights & Updates
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Stay informed with our latest insights on trending topics in tax law, 
            commercial litigation, and regulatory developments.
          </p>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-2">
          {categoryList.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                category === selectedCategory
                  ? "bg-[#163C0F] text-white"
                  : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#163C0F] hover:text-[#163C0F]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------
          BLOG GRID SECTION
      ---------------------------------------------- */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">

          {/* ------------------------------
              LOADING SKELETON
          ------------------------------- */}
          {blogsLoading && (
            <div className="grid lg:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-6 animate-pulse">
                  <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded mb-4"></div>
                  <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ------------------------------
              BLOG GRID
          ------------------------------- */}
          {!blogsLoading && filteredBlogs.length > 0 && (
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredBlogs.map((blog) => {
                const date = blog.publishedAt
                  ? format(new Date(blog.publishedAt), "MMMM d, yyyy")
                  : "Unknown";

                return (
                  <article
                    key={blog._id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#163C0F] transition-all flex flex-col h-full"
                  >
                    {/* CATEGORY TAG + NEW LABEL */}
                    <div className="flex justify-between mb-4">
                      <span className="bg-[#B3C7AB] text-[#163C0F] text-xs font-medium px-3 py-1 rounded-full">
                        {blog.category?.name || "Uncategorized"}
                      </span>
                      {blog.isNew && (
                        <span className="bg-[#163C0F] text-white text-xs font-medium px-3 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>

                    {/* TITLE */}
                    <Link href={`/blog/${blog.slug.current}`} className="group mb-4 block">
                      <h3 className="text-lg font-bold text-[#163C0F] leading-tight group-hover:text-[#1a4a1a] transition-colors">
                        {blog.title}
                      </h3>
                    </Link>

                    {/* FEATURED IMAGE */}
                    {blog.featuredImage && (
                      <Link href={`/blog/${blog.slug.current}`} className="mb-4 block">
                        <img
                          src={urlFor(blog.featuredImage).width(600).height(300).fit("crop").url()}
                          alt={blog.title}
                          className="w-full h-auto object-cover rounded-lg border border-gray-200 hover:border-[#163C0F] transition-all"
                        />
                      </Link>
                    )}

                    {/* META INFO */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        {blog.readTime}
                      </span>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex gap-3 mt-auto">
                      <Link href={`/blog/${blog.slug.current}`} className="flex-1">
                        <Button size="sm" className="w-full bg-[#163C0F] hover:bg-[#1a4a1a] text-white">
                          <Eye className="mr-2 h-4 w-4" />
                          Read Article
                        </Button>
                      </Link>

                      {blog.downloadUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#163C0F] text-[#163C0F] hover:bg-[#163C0F] hover:text-white"
                          asChild
                        >
                          <a href={blog.downloadUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* EMPTY STATE */}
          {!blogsLoading && filteredBlogs.length === 0 && (
            <div className="text-center py-12 text-gray-600">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Insights;
