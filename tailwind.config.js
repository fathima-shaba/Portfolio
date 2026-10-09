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
        surface: "#FFFFFF",
        "surface-dark": "#0D0D0D",
        muted: "#E1E1E1",
        "muted-dark": "#1A1A1A",
        "text-default": "#000000",
        "text-dark": "#FFFFFF",
        "text-muted": "#555555",
        "text-muted-dark": "#A0A0A0",
        "border-default": "#D1D1D1",
        "border-dark": "#333333",
        accent: "#D03B2B",
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
      }
    },
  },
  plugins: [],
};
