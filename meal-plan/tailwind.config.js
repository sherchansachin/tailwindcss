/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
        strongBlue: 'hsl(214, 100%, 34%)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
