import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
          lightYellow: "#f6d876",
          White1: "#fffbf2",
          darkGreen: "#05ab54",
          dark: "#1e1e1e",
      },
        fontFamily: {
          poppins: ["Poppins", "sans-sarif"],
          league: ["League Gothic", "sans-sarif"],
        },
        Container: {
          Container: true,
          Padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            lg: "4rem",
            xl: "5rem",
            "2xl": "6rem",
          },
        },
      },

    },
  
  plugins: [],
}