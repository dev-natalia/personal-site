/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@react-pdf/renderer"],

  // Inclui o worker e dependências no bundle da função serverless (Vercel)
  outputFileTracingIncludes: {
    "/api/curriculo": [
      "./scripts/**/*",
      "./node_modules/@react-pdf/**/*",
      "./node_modules/@react-pdf/reconciler/node_modules/**/*",
      "./node_modules/react/**/*",
    ],
  },
};

module.exports = nextConfig
