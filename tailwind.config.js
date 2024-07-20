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
        "red-glow": "0px 0px 10px 5px rgba(239, 68, 68, 0.5)",
      },
      animation: {
        "shake": "shake 0.4s",
      },
      keyframes: {
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(10px)" },
          "75%": { transform: "translateX(-5px)" },
        }
      }
    },
  },
  plugins: [],
}

