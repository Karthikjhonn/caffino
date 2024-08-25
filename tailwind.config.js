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
        background:"#F9F9F9"
      },
      fontFamily: {
        'Sora-Light': ["Sora-Light"],
        'Sora-Medium': ["Sora-Medium"],
        'Sora-Regular': ["Sora-Regular"],
        'Sora-SemiBold': ["Sora-SemiBold"],
      },
    },
  },
  plugins: [],
};
