import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // the whole stylesheet is ~8KB gzipped — inlining it removes the
    // render-blocking CSS request and cuts a full RTT off FCP/LCP
    inlineCss: true,
  },
};

export default nextConfig;
