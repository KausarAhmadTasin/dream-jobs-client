/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class", // Enable class-based dark mode
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Ensure DaisyUI has both themes
  },
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
};
