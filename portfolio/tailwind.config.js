/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth:{
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containers: "768px",
    },
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px", 
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily:{
        bodyFont:["Nunito Sans", "sans-serif"],
        titleFont:["Bricolage Grotesque", "sans-serif"],
      },
      boxShadow:{
        navbarShadow: "0 6px 10px rgba(255, 215, 0, 0.6)",
      },
      colors:{
        bodyColor:"#000000",
        textLightGold:"#FFD700",
        textDarkGold:"#b8860b",
        textLight:"#ccd6f6",
        textDark:"#8892b0",
        hoverColor:"#ffd300",
      }

    },
  },
  plugins: [],
}

