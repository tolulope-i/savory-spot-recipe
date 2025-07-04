/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      monts: ["Montserrat", "sans-serif"],
      play: ["Playfair Display", "serif"],
      lora: ["Lora", "serif"],
    },
    extend: {
      colors: {
        primary: "#ff1616",
        "light-pry": "#ffe6e6",
        "deeper-light": "#ff9999",
        accent: "#00a832",
        "light-accent": "#b3ffc9",
        background: "#000",
        "white-text": "#fff",
        "black-text": "000",
      },
      backgroundImage: {
        "back-image": "url('images/all-foods2.jfif')",
        "gradient-overlay":
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent), url('images/food4.jpg')",
      },
      width: {
        "img-width": "400px",
      },
    },
  },
  plugins: [],
};
