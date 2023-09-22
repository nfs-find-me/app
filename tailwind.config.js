/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
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
      lg: '24px',
      xl: '30px'
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