/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montBold: ['Montserrat-Bold'],
        montRegular: ['Montserrat-Regular'],
        montSemiBold: ['Montserrat-SemiBold'],
      },
      backgroundColor: {
        primary: "#FEAF00",
        dark: "#0F172A",
        lighGray: "#6B7280",
        somberRed: "#FF0000",
      }
    },
  },
  plugins: [],
}

