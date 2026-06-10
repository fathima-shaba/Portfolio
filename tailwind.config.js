/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        accent: "#7c3aed",
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
      },
    },
  },
  plugins: [],
};
