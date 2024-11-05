/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('/src/assets/images/herobg.png')",
        quickstartBg: "url('/src/assets/images/quickstartbg.png')",
        activepoliciesBg: "url('/src/assets/images/activepoliciesbg.png')",
      },
      colors: {
        blackColor: "#131313",
        primaryColor: "#226C67",
        primaryColorAccent: "#DCEEEC",
        primaryColorTint: "#EBF3F8",
        secondaryColor: "#FE6635",
        secondaryColorAccent: "#E9F2DD",
      },
      animation: {
        scroll: "scrollHorizontal 30s linear infinite",
        scrollReverse: "reverseHorizontalScroll 50s linear infinite",
      },
      keyframes: {
        scrollHorizontal: {
          "0%": { transform: "translateX(50%)" },
          // "100%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(calc(-1 * var(--scrollWidth)))" },
        },
        reverseHorizontalScroll: {
          "0%": { transform: "translateX(calc(-1 * var(--scrollWidth)))" },
          "100%": { transform: "translateX(50%)" },
        },
      },

      screens: {},
    },
  },
  plugins: [],
};
