/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./register.html",
  "./shop.html",
  "./contact.html",
  "./singleproduct.html",
  "./lab4.html"

],
  theme: {
    screens: {
      desktop: { max: "1200" },
      // => @media (max-width: 639px) { ... }

      latop: { max: "1024px" },
      // => @media (max-width: 767px) { ... }

      tablet: { max: "992px" },
      // => @media (max-width: 1023px) { ... }

      "mini-tablet": { max: "768px" },
      // => @media (max-width: 1279px) { ... }
      
      mobile: { max: "568px" },
      // => @media (max-width: 1535px) { ... }
    },
    colors: {
      first: "#928e75",
      second: "#252525",
      transparent: "transparent",
      white: "#fff",
      black: "#000",
    },
    fontFamily: {
      Marcellus: ["'Marcellus'", "serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        200: "200px",
        250: "250px",
        300: "300px",
        350: "350px",
        400: "400px",
        450: "450px",
        500: "500px",
      },
      borderRadius: {
        0: "0",
        full: "50%",
        1: "0.25rem",
        2: "0.5rem",
        3: "0,75rem",
        4: "1rem",
        5: "1.25",
        6: "1.5",
        7: "1.75",
        8: "2",
        9: "2.25",
        10: "2.5",
      },
    },
  },
  plugins: [],
};
