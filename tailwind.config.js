/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html",
              "./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          manrope: ["Manrope"],
          groteck: ["Space Grotesk"]
        }
      },
      container: {
        center: true,
        "max-width": {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      screens: {
        sm: "576px",
        "sm-max": { max: "576px" },
        md: "768px",
        "md-max": { max: "768px" },
        lg: "992px",
        "lg-max": { max: "992px" },
        xl: "1200px",
        "xl-max": { max: "1200px" },
        "2xl": "1320px",
        "2xl-max": { max: "1320px" },
      },
      fontSize: {
        "2xs": ".625rem",
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      }
    },
    plugins: [],
  }
  
  