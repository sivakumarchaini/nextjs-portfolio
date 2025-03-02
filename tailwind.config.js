/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // ✅ Covers all Next.js files
    "./public/**/*.html", // ✅ Add this if you have static HTML files
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: colors.purple,
        secondary: colors.pink,
        gray: colors.gray,     
        neutral: colors.neutral,
        stone: colors.stone,    
        slate: colors.slate,    
        sky: colors.sky,        
      },
    },
  },
  plugins: [],
};
