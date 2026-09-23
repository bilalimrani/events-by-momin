/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },
  reactStrictMode: true,
  compress: true,
  output: "export",
  // Limits parallel build workers to 1 — avoids jest-worker child-process
  // deadlocks seen on this machine (builds hanging indefinitely with 0% CPU).
  experimental: {
    cpus: 1,
  },
};

module.exports = nextConfig;
