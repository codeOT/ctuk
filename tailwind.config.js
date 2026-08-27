/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Roboto", "sans-serif"],
      },
      colors: {
        primary: "#2fae60",
        secondary: "#f3b61f",
      },
      screens: {
        tv: { max: "1536px" },
        laptop: { max: "1280px" },
        tab: { max: "1024px" },
        "tab-m": { max: "900px" },
        "tab-s": { max: "768px" },
        phone: { max: "640px" },
        "phone-s": { max: "380px" },
      },
    },
  },
  plugins: [],
};
