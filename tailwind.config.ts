import type { Config } from "tailwindcss";
import colors, { neutral } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost_font: ["var(--font-jost)"],
      },
      colors: {
        black: "#131118",
        grey: "#A4A1AA",
        orange: "#FF7262",
        transparent: "transparent",
        white: colors.white,
        indigo: colors.indigo,
        neutral: colors.neutral,
        slate: colors.slate,
        gray: colors.gray,
        red: colors.rose,
        yellow: colors.amber,
        green: colors.green,
        blue: colors.blue,
      },
    },
  },
  plugins: [],
};
export default config;
