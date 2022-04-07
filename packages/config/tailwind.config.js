module.exports = {
  important: true,
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "../../packages/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        C0: "var(--C0)",
        C1: "var(--C1)",
        C2: "var(--C2)",
        C3: "var(--C3)",
        C4: "var(--C4)",
        C5: "var(--C5)",
      },
    },
    fontFamily: {
      main: ["Ubuntu"],
    },
  },
  variants: {},
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
