import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      wide: '1088px',
      medium: "974px",
      small: "590px",
      verysmall: "521px",
      tiny: "400px"
    },
    extend: {
      scale: {
        '115': '1.15',
      },
      fontFamily: {
        fredoka: ["var(--font-fredoka)"],
      },
      colors: {
        primary: "#fefefe",
        secondary: "#1f2937",
        third: "#a7a29d",
        dark: "#171717",
        light: "#f5f5f5",
        buttonLight: "#d1d4db",
        buttonDark: "#404040",
        message: "#4182f0",
        blueTag: "#2663ea",
        orangeTag: "#ea580b",
        greenTag: "#17a34a",
        greyTag: "#4c5564"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
