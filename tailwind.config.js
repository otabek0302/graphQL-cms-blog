/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    extend: {
      colors: {
        primary: "#00ed64",
        "primary-dark": "#00ba4e",
        "primary-light": "#21ff7f",
        "primary-content": "#ffffff",

        background: "#efefef",
        foreground: "#fbfbfb",
        border: "#dee1df",

        copy: "#242826",
        "copy-light": "#ffffff",
        "copy-lighter": "#e3e3e3",
        "copy-darker": "#606060",

        success: "#00ed00",
        warning: "#eded00",
        error: "#ed0000",
      },
    },
  },
  plugins: [],
};
