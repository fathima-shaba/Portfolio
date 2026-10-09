/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#09090b",
        muted: "#18181b",
        "on-muted": "#a1a1aa",
        "text-default": "#fafafa",
        "text-muted": "#a1a1aa",
        "text-faint": "#52525b",
        "border-default": "#27272a",
        "border-strong": "#3f3f46",
        primary: "#fafafa",
        "primary-subtle": "#27272a",
        accent: "#3b82f6",
        "accent-glow": "rgba(59, 130, 246, 0.5)",
      },
      spacing: {
        cozy: "1rem",
        roomy: "2rem",
        snug: "0.5rem",
        stack: "0.25rem",
        page: "4rem",
        header: "4rem",
      },
      maxWidth: {
        widest: "1600px",
        content: "960px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        field: "9999px",
      },
      animation: {
        "blob": "blob 7s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      }
    },
  },
  plugins: [],
};
