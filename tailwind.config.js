/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#C67C4E",
        primary: "#EDD6C8",
        secondary: "#F9F2ED",
        black: "#313131",
        offgray: "#E3E3E3",
      },
      fontFamily: {
        soraLight: ["Sora-Light"],
        soraMedium: ["Sora-Medium"],
        soraRegular: ["Sora-Regular"],
        soraSemibold: ["Sora-SemiBold"],
      },
    },
  },
  plugins: [],
};
