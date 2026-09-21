import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure the Markdown blog files are available wherever the app is deployed.
  outputFileTracingIncludes: {
    "/**": ["./src/content/blogs/**/*.md"],
  },
};

export default nextConfig;
