/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3D00B7',
        secondary: '#000',
        base: '#565656',
        border: '#EFEFEF'
      },
      fontFamily: {}
    },
    container: {
      center: true,
      screens: {
        default: '1200px'
      }
    }
  },
  plugins: []
}
