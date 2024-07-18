/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "zinc-border": "0px 0px 0px 1px #27272a",
        "blue-glow": "0px 0px 10px 5px rgba(59, 130, 246, 0.5)",
      }
    },
  },
  plugins: [],
}

