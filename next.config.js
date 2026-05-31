/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@react-pdf/renderer"],

  // Inclui o worker e TODAS as dependências transitivas no bundle serverless (Vercel)
  outputFileTracingIncludes: {
    "/api/curriculo": [
      "./scripts/**/*",
      "./node_modules/@react-pdf/**/*",
      "./node_modules/@babel/runtime/**/*",
      "./node_modules/@noble/**/*",
      "./node_modules/abs-svg-path/**/*",
      "./node_modules/bidi-js/**/*",
      "./node_modules/browserify-zlib/**/*",
      "./node_modules/color-string/**/*",
      "./node_modules/emoji-regex-xs/**/*",
      "./node_modules/events/**/*",
      "./node_modules/fontkit/**/*",
      "./node_modules/hsl-to-hex/**/*",
      "./node_modules/hsl-to-rgb-for-reals/**/*",
      "./node_modules/hyphen/**/*",
      "./node_modules/inherits/**/*",
      "./node_modules/is-url/**/*",
      "./node_modules/jay-peg/**/*",
      "./node_modules/js-md5/**/*",
      "./node_modules/linebreak/**/*",
      "./node_modules/media-engine/**/*",
      "./node_modules/normalize-svg-path/**/*",
      "./node_modules/object-assign/**/*",
      "./node_modules/pako/**/*",
      "./node_modules/parse-svg-path/**/*",
      "./node_modules/png-js/**/*",
      "./node_modules/postcss-value-parser/**/*",
      "./node_modules/prop-types/**/*",
      "./node_modules/queue/**/*",
      "./node_modules/react/**/*",
      "./node_modules/react-is/**/*",
      "./node_modules/require-from-string/**/*",
      "./node_modules/safe-buffer/**/*",
      "./node_modules/scheduler/**/*",
      "./node_modules/svg-arc-to-cubic-bezier/**/*",
      "./node_modules/unicode-properties/**/*",
      "./node_modules/vite-compatible-readable-stream/**/*",
      "./node_modules/yoga-layout/**/*",
    ],
  },
};

module.exports = nextConfig
