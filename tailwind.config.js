/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "ui-sans-serif", "sans-serif"],
      lato: ["Lato", "ui-sans-serif", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
