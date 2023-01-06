/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary' : {
          '400' : '#66779e',
          '500' : '#4e628b',
          '600' : '#40557a',
          '700' : '#304264',
          '800' : '#21314e',
          '900' : '#0d1e37'
        }
      }
    },
  },
  plugins: [],
}
