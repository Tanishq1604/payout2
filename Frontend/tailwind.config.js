/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
          custom:['MarisaBold', "sans"],
      },
      backgroundImage: theme => ({
        'gradient-pink-purple': 'linear-gradient(to right, #ff9a9e, #fecfef)',
      }),
    },
  },
  
  variants: {
  
    extend: {
      backgroundImage: ['hover'],
    },
  
  },
  plugins: [],
  
}