import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 'standalone' is useful for Docker/VPS. Commented out for Vercel/Netlify.
  // output: "standalone",
  
  reactStrictMode: false,
};

export default nextConfig;
