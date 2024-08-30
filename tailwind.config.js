// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ungu": "#1e1842",
        "ungumuda": "#4F1787",
        "pink": "#C8ACD6",
        "ijo": "#3B3486"
      }
    },
  },
  plugins: [],
};

