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
};

export default nextConfig;
