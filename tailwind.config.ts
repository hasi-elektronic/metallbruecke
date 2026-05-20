import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A2540",
          50: "#E8EDF3",
          100: "#C5D1DF",
          200: "#94A8BF",
          300: "#5F7894",
          400: "#33506F",
          500: "#0A2540",
          600: "#082035",
          700: "#061827",
          800: "#04111B",
          900: "#020910",
        },
        amber: {
          DEFAULT: "#F4A024",
          50: "#FDF1DF",
          100: "#FCE3BD",
          200: "#FAC97A",
          300: "#F7B247",
          400: "#F4A024",
          500: "#D08410",
          600: "#9B620C",
          700: "#684108",
          800: "#352104",
          900: "#1A1002",
        },
        anthracite: "#1F2937",
        offwhite: "#F5F5F7",
      },
      fontFamily: {
        display: ['"Manrope"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
