/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@react-pdf/renderer"],
  experimental: {
    outputFileTracingIncludes: {
      "/api/curriculo": [
        "./scripts/**/*",
        "./node_modules/@react-pdf/renderer/**/*",
        "./node_modules/react/**/*",
      ],
    },
  },
};

module.exports = nextConfig
