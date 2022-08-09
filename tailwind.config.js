/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      lg:'1440px'
    },
    extend: {
      fontFamily:{
        sans:['josefin Sans','san-serif'],
        alata: ['Alata']
      },
      letterSpacing:{
        widest: '0.4em'
      }
    },
  },
  plugins: [],
}
