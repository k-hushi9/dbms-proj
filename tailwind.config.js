/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-weak": "#e0effe",
        primary: "#007dfa",
        white: "#fff",
        "text-tertiary": "#bebebf",
        "primary-weak": "#e0effe",

        "text-secondary": "#5a5a5d",
        primary: "#007dfa",

        "text-primary": "#101012",
        gray: "#050a24",
      },
      spacing: {},
      fontFamily: {
        "body-large-semibold": "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "0.89rem",
      sm: "0.78rem",
      "9xl": "1.56rem",
      "37xl": "3.11rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
