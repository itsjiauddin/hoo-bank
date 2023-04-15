/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-sarif"],
      },
      colors: {
        customDark: {
          100: "#BCA5FF",
          500: "#214D76",
          600: "#6D6D6D",
          700: "#11101D",
          800: "#00040F",
        },
        customTeal: {
          100: "#DEF9FA",
          500: "#33BBCF",
        },
        customWhite: {
          900: "#FFFFFF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
