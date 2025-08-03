import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/started",
        permanent: true,
      },
    ];
  },
  devIndicators: false,
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
