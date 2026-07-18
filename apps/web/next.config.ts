import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // `standalone` produces a self-contained server bundle for the Docker/k8s
  // runner (the Dockerfile sets STANDALONE_BUILD=true). On Vercel or a local
  // `next start`, leave it undefined.
  output: process.env.STANDALONE_BUILD === 'true' ? 'standalone' : undefined,
  // This app lives in a pnpm/turbo monorepo; trace files from the repo root so
  // the standalone output bundles workspace files correctly.
  outputFileTracingRoot: path.join(__dirname, '../..'),
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true
};

export default nextConfig;
