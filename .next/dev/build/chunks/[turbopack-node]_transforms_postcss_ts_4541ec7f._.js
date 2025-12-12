module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/clc next/prod clc/clc_website/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/e3314_6fbbd3f2._.js",
  "chunks/[root-of-the-server]__7865dded._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/clc next/prod clc/clc_website/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];