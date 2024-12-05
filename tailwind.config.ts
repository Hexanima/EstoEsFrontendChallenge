import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#F5222D",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        spawn: "spawn 0.125s linear forwards"
      },
      keyframes: {
        spawn: {
          "0%": { opacity: "0"},
          "100%": { opacity: "1"},
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
