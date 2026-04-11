import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the Turbopack workspace root to this project so the dev server does
  // not try to infer it from a parent directory. Without this, Next.js walks
  // upward looking for a lockfile and may pick up an unrelated lockfile in a
  // parent directory (e.g. `~/package-lock.json`), which produces a warning
  // and can fragment the cache. Pinning here makes the build reproducible
  // across local dev, CI, and Vercel.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
