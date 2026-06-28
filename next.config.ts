import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. A stray lockfile in a parent
  // directory was making Turbopack infer the wrong root during builds.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
