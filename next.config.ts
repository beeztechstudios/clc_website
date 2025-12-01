import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  productionBrowserSourceMaps: false,

  // Add empty turbopack config to silence error
  turbopack: {},
};

export default nextConfig;
