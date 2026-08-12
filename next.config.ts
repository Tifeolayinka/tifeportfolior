import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "piton-digital.s3.eu-north-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "media.contra.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
