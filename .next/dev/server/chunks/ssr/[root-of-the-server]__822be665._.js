module.exports = [
"[project]/my-project/src/app/favicon.ico.mjs { IMAGE => \"[project]/my-project/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/my-project/src/app/favicon.ico.mjs { IMAGE => \"[project]/my-project/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/my-project/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/my-project/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/my-project/src/lib/sanity.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "client",
    ()=>client,
    "clientNoCdn",
    ()=>clientNoCdn,
    "fetchWithFallback",
    ()=>fetchWithFallback,
    "queries",
    ()=>queries,
    "urlFor",
    ()=>urlFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/image-url/lib/_chunks-es/index.js [app-rsc] (ecmascript)");
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: 'k9qzu7ux',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-01-01',
    perspective: 'published',
    stega: {
        enabled: false
    },
    timeout: 30000,
    withCredentials: false
});
const clientNoCdn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: 'k9qzu7ux',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    perspective: 'published',
    timeout: 30000
});
// FIXED URL builder
const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createImageUrlBuilder"])(client);
function urlFor(source) {
    return builder.image(source);
}
async function fetchWithFallback(query, params = {}) {
    try {
        return await client.fetch(query, params);
    } catch (error) {
        if (error?.message?.includes('CORS') || error?.message?.includes('Network') || error?.statusCode === 0) {
            return await clientNoCdn.fetch(query, params);
        }
        throw error;
    }
}
const queries = {
    getAllBlogPosts: `*[_type == "blogPost"] | order(publishedAt desc) {
    _id, title, slug, excerpt, publishedAt, readTime, isNew,
    featuredImage, downloadUrl,
    category->{ name, slug, color }
  }`,
    getBlogPostBySlug: `*[_type == "blogPost" && slug.current == $slug][0] {
    _id, title, slug, excerpt, content, publishedAt, readTime, isNew,
    featuredImage, downloadUrl,
    category->{ name, slug, color },
    seo
  }`,
    getAllNewsUpdates: `*[_type == "newsUpdate"] | order(publishedAt desc) {
    _id, title, slug, excerpt, type, publishedAt, readTime, isNew,
    featuredImage, downloadUrl
  }`,
    getNewsUpdateBySlug: `*[_type == "newsUpdate" && slug.current == $slug][0] {
    _id, title, slug, excerpt, content, type, publishedAt, readTime, isNew,
    featuredImage, downloadUrl, seo
  }`,
    getAllCategories: `*[_type == "category"] | order(name asc) {
    _id, name, slug, description, color
  }`,
    getFeaturedBlogPosts: `*[_type == "blogPost"] | order(publishedAt desc)[0...4] {
    _id, title, slug, excerpt, publishedAt,
    featuredImage,
    category->{ name, slug, color }
  }`,
    getFeaturedNewsUpdates: `*[_type == "newsUpdate"] | order(publishedAt desc)[0...3] {
    _id, title, slug, type, publishedAt
  }`,
    searchArticles: `*[_type in ["blogPost", "newsUpdate"] && (title match $query || excerpt match $query)]
    | order(publishedAt desc)[0...10] {
    _id, _type, title, slug, excerpt, publishedAt, type,
    category->{ name }
  }`,
    getCareerOpenings: `*[_type == "careerOpening" && isActive == true]
    | order(sortOrder asc, _createdAt desc) {
    _id, title, location, type, experience, requirements,
    sortOrder, isActive
  }`
};
}),
"[project]/my-project/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBlogPostDebug",
    ()=>getBlogPostDebug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$src$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-project/src/lib/sanity.ts [app-rsc] (ecmascript)");
;
async function getBlogPostDebug(slug) {
    console.log("[getBlogPostDebug] called with slug:", slug);
    if (!slug) {
        console.log("[getBlogPostDebug] no slug provided -> returning null");
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
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$project$2f$src$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(query, {
            slug
        });
        console.log("[getBlogPostDebug] Sanity response:", !!res, res && {
            title: res.title,
            slug: res.slug
        });
        return res;
    } catch (err) {
        // Print useful error details (Sanity client provides response)
        console.error("[getBlogPostDebug] fetch error:", err?.message || err);
        if (err?.response) {
            try {
                console.error("[getBlogPostDebug] error.response body:", err.response.body || err.response);
            } catch (e) {}
        }
        throw err;
    }
} // -----------------------------------------------------------
 // Dynamic Metadata
 // -----------------------------------------------------------
 // export async function generateMetadata({ params }: { params: { slug: string } }) {
 //   const blogPost = await getBlogPost(params.slug);
 //   if (!blogPost) return {};
 //   const title = blogPost.seo?.metaTitle || blogPost.title;
 //   const description =
 //     blogPost.seo?.metaDescription ||
 //     blogPost.excerpt ||
 //     `Read ${blogPost.title} - Legal insights from Commercial Law Chamber`;
 //   const canonical = `https://www.clclaw.in/blog/${params.slug}`;
 //   const ogImage = blogPost.featuredImage
 //     ? urlFor(blogPost.featuredImage).width(1200).height(630).url()
 //     : "https://www.clclaw.in/clc-logo.png";
 //   return {
 //     title: `${title} | Commercial Law Chamber`,
 //     description,
 //     alternates: { canonical },
 //     openGraph: {
 //       title,
 //       description,
 //       url: canonical,
 //       images: [ogImage],
 //       type: "article",
 //     },
 //     twitter: {
 //       card: "summary_large_image",
 //       title,
 //       description,
 //       images: [ogImage],
 //     },
 //   };
 // }
 // -----------------------------------------------------------
 // PAGE COMPONENT
 // -----------------------------------------------------------
 // export default async function BlogPage({ params }: { params: { slug: string } }) {
 //   const blogPost = await getBlogPost(params.slug);
 //   if (!blogPost) return notFound();
 //   const publishedDate = blogPost.publishedAt
 //     ? new Date(blogPost.publishedAt)
 //     : new Date();
 //   return (
 //     <div className="min-h-screen">
 //       <div className="max-w-7xl bg-slate-900/40 mx-auto px-4 sm:px-6 lg:px-8 py-4">
 //         <Header />
 //         <div className="flex flex-col lg:flex-row gap-4">
 //           {/* Left Sidebar */}
 //           <div className="hidden lg:block lg:w-48 xl:w-52">
 //             <LeftSidebar activeSection="insights" />
 //           </div>
 //           {/* Main Content */}
 //           <div className="flex-1 min-w-0">
 //             <article className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-sm">
 //               <div className="max-w-4xl mx-auto">
 //                 {/* Back Button */}
 //                 <div className="mb-6">
 //                   <Link
 //                     href="/insights"
 //                     className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
 //                   >
 //                     <ArrowLeft className="h-4 w-4" />
 //                     Back to Insights
 //                   </Link>
 //                 </div>
 //                 {/* Title */}
 //                 <h1 className="text-3xl lg:text-4xl font-bold poppins text-[#163C0F] mb-6">
 //                   {blogPost.title}
 //                 </h1>
 //                 {/* Category */}
 //                 {blogPost.category?.name && (
 //                   <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
 //                     {blogPost.category.name}
 //                   </span>
 //                 )}
 //                 {/* Publish Date */}
 //                 <time
 //                   className="text-sm text-gray-600 block mb-5"
 //                   dateTime={publishedDate.toISOString()}
 //                 >
 //                   {format(publishedDate, "MMMM d, yyyy")}
 //                 </time>
 //                 {/* Featured Image */}
 //                 {blogPost.featuredImage && (
 //                   <img
 //                     src={urlFor(blogPost.featuredImage).width(800).height(400).url()}
 //                     alt={blogPost.title}
 //                     className="w-full h-auto rounded-lg shadow-md mb-8"
 //                   />
 //                 )}
 //                 {/* Body */}
 //                 {/* <SanityContentRenderer content={blogPost.content} /> */}
 //                 {/* Download Button */}
 //                 {blogPost.downloadUrl && (
 //                   <div className="mt-8">
 //                     <Link
 //                       href={blogPost.downloadUrl}
 //                       target="_blank"
 //                       className="inline-flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-50"
 //                     >
 //                       <Eye className="h-4 w-4" />
 //                       Read The Full Document Here
 //                     </Link>
 //                   </div>
 //                 )}
 //               </div>
 //             </article>
 //           </div>
 //           {/* Right Sidebar */}
 //           <div className="hidden lg:block lg:w-60 xl:w-64">
 //             <RightSidebar />
 //           </div>
 //         </div>
 //         <Footer />
 //       </div>
 //     </div>
 //   );
 // }
}),
"[project]/my-project/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/my-project/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__822be665._.js.map