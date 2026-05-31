import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#111827",
        "bg-card": "#1F2937",
        accent: "#6EE7B7",
        "accent-purple": "#A78BFA",
        "accent-blue": "#60A5FA",
        "text-main": "#F9FAFB",
        "text-muted": "#6B7280",
        border: "#374151",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        reading: "65ch",
      },
    },
  },
  plugins: [],
};

export default config;
