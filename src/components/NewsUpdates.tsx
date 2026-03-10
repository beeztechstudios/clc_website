"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Download, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { useState } from "react";
import HeroAnimations from "@/lib/heroAnimation";

// Define interface for type safety
interface NewsItem {
  _id: string;
  title: string;
  slug: { current: string };
  type: string;
  publishedAt: string;
  featuredImage?: any;
  readTime?: string;
  downloadUrl?: string;
  isNew?: boolean;
}

interface NewsUpdatesProps {
  initialNews: NewsItem[];
}

const NewsUpdates = ({ initialNews }: NewsUpdatesProps) => {
  // Use the data passed from the server
  const [selectedType, setSelectedType] = useState("All");

  const filteredNews =
    selectedType === "All"
      ? initialNews
      : initialNews.filter((news) => news.type === selectedType);

  const typeList = ["All", "case-update", "news", "publication", "deal-corner"];

  const getTypeDisplayName = (type: string) => {
    switch (type) {
      case "case-update": return "Case Update";
      case "news": return "News";
      case "publication": return "Publication";
      case "deal-corner": return "Deal Corner";
      default: return type;
    }
  };

  return (
    <div className="flex-1 bg-white  xl:mx-10">
       <HeroAnimations />
      {/* Top Header */}
      <section className="py-4 px-4 sm:px-8 mt-0 md:mt-12 md:px-12  lg:px-16 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 ">
            <h1
              className="text-[#163C0F] hero-para  mb-4 "
              style={{
                fontFamily: "League Spartan",
                fontWeight: 700,
                fontSize: "clamp(32px, 6vw, 45px)",
                lineHeight: "1.1",
                letterSpacing: "2px",
                textAlign: "center",
                display: "block",
              }}>
              Latest Tax Law News & Legal Judgments in India

            </h1>
            <p className="text-base sm:text-md  hero-para text-gray-600">
              Stay informed with our latest case updates, news, and publications
              from Commercial Law Chambers.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap hero-buttons  justify-center gap-2">
            {typeList.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 text-sm font-medium  transition-all ${type === selectedType
                    ? "bg-[#163C0F] text-white"
                    : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#163C0F] hover:text-[#163C0F]"
                  }`}
              >
                {getTypeDisplayName(type)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Cards */}
      <section className="py-4 px-4 sm:px-8  md:px-12  lg:px-16  hero-para  ">
        <div className="max-w-6xl mx-auto">

          {/* News Data */}
          {filteredNews.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredNews.map((news) => (
                <div
                  key={news._id}
                  className="bg-white border border-gray-200  p-6 hover:border-[#163C0F] transition-all flex flex-col h-full"
                >
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <span className="bg-[#B3C7AB] text-[#163C0F] text-xs font-bold px-3 py-1 rounded-md">
                        {getTypeDisplayName(news.type)}
                      </span>

                      {news.isNew && (
                        <span className="bg-[#163C0F]/80 text-white text-xs font-bold px-3 py-1 rounded-md">
                          New
                        </span>
                      )}
                    </div>

                    <Link href={`/news/${news.slug.current}`} className="group">
                      <h3 className="text-lg font-bold text-[#163C0F] leading-tight mb-3 group-hover:text-[#1a4a1a] transition-colors">
                        {news.title}
                      </h3>
                    </Link>
                  </div>

                  <div className="flex flex-col flex-grow">
                    {/* Image */}
                    {news.featuredImage?.asset?._ref && (
                      <Link
                        href={`/news/${news.slug.current}`}
                        className="mb-4 block"
                      >
                        <Image
                          src={
                            news.featuredImage?.asset?._ref
                              ? urlFor(news.featuredImage).width(600).height(300).fit("crop").url()
                              : "/placeholder.png"
                          }
                          alt={news.featuredImage.alt || news.title}
                          width={600}
                          height={300}
                          className="w-full h-auto object-cover  border border-gray-200 hover:border-[#163C0F] transition-all"
                        />
                      </Link>
                    )}

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {format(new Date(news.publishedAt), "MMMM d, yyyy")}
                        </span>
                      </div>

                      {news.readTime && (
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          <span>{news.readTime}</span>
                        </div>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <Link href={`/news/${news.slug.current}`} className="flex-1">
                        <Button className="w-full bg-[#163C0F] hover:bg-[#1a4a1a] text-white">
                          <Eye className="mr-2 h-4 w-4" /> Read More
                        </Button>
                      </Link>

                      {news.downloadUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#163C0F] text-[#163C0F] hover:bg-[#163C0F] hover:text-white"
                        >
                          <a
                            href={news.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No news updates found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-dotted border-[#22461B] ">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-[#163C0F] border-dotted p-6 sm:p-8 text-center">
            <h3 className=" text-[#163C0F] mb-4" style={{
              fontFamily: "Arial",
              fontWeight: 700,
              fontSize: "23px",
              lineHeight: "24px",
              letterSpacing: "0px",
              color: "#336429",
            }}>
              Stay Updated with Legal Developments
            </h3>

            <p className=" mb-8" style={{
              fontFamily: "League Spartan",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.8vw, 18.4px)",
              lineHeight: "20px",
              letterSpacing: "0px",
              verticalAlign: "middle",
              textTransform: "capitalize",
            }}>
              Subscribe to our newsletter to receive the latest case updates,
              news, and regulatory changes directly in your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-[#163C0F]"
              />
              <Button className="bg-[#163C0F]  hover:bg-[#1a4a1a] text-white">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsUpdates;