import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#1C0F08",
        orange: "#D96C24",
        tomato: "#B33A1C",
        basil: "#4F7C45",
        cream: "#F7E6C4",
        beige: "#D8B98A",
        clay: "#6B3F24",
        olive: "#A3A86B",
      },
      fontFamily: {
        display: ["Anton", "Impact", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 28px 70px rgba(28, 15, 8, 0.25)",
        lift: "0 18px 45px rgba(28, 15, 8, 0.22)",
      },
      borderRadius: {
        section: "5rem",
        card: "2.5rem",
        float: "3rem",
      },
    },
  },
  plugins: [],
};

export default config;
