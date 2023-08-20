/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#d9d9d9",
        cornflowerblue: "#448fdb",
        dimgray: "#706f6f",
      },
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
      },
    },
    fontSize: {
      base: "16px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
