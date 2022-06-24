/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2': '50px 1fr'
      },
      fontFamily: {
        'rajdhani': ['"Rajdhani"','mono']
      }
    },
  },
  plugins: [],
}
