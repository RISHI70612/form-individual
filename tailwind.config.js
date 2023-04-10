/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dimgray: "#666",
        "w-background": "#fff",
        lightgray: "#ccc",
        black: "#000",
      },
      fontFamily: { "noto-sans": "'Noto Sans'" },
      borderRadius: { "6xl": "25px" },
    },
    fontSize: { xs: "12px", base: "16px", "5xl": "24px" },
  },
  corePlugins: { preflight: false },
};
