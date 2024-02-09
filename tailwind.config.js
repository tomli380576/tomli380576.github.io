/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {},
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
