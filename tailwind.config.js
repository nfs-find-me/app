/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './src/style/**/*.css'],
  theme: {
    screens: {
      'tablet': '768px',
      'tablet-max': {'max': '768px'},
      'laptop': '1024px',
      'desktop': '1280px',
    },
    colors: {
      transparent: 'transparent',
      'white': '#FFFFFF',
      'white-secondary': '#FAF8FF',
      'green': '#7FD1AE',
      'blue': '#0390BF',
      'black': '#000000',
      'text-contrast': '#112A46',
      'yellow': "#FFFD92",
      'alert': '#C31952'
    },
    fontSize: {
      sm: '12px',
      md: '16px',
      lg: '20px',
      xl: '24px',
      xxl: '30px',
      40: '40px',
      60: '60px'
    },
    fontFamily: {
      display: 'Montserrat, sans-serif',
    },
    extend: {
      borderRadius: {
        '15': '15px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
      }
    }
  },
  plugins: [],
}