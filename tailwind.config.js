/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        canterBurry: ["Canter Burry", "sans-serif"],
      },
      colors: {
        primary: "#1DA1F2",
      },
    },
  },
  plugins: [],
};
