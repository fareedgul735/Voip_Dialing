/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    keyframes: {
      slideFromRight: {
        "0%": { opacity: "0", transform: "translateX(40px)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
      slideFromLeft: {
        "0%": { opacity: "0", transform: "translateX(-40px)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
    },
    animation: {
      slideFromRight: "slideFromRight 0.5s ease-out",
      slideFromLeft: "slideFromLeft 0.5s ease-out",
    },
  },
  plugins: [],
};
