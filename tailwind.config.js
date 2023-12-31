/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/style/**/*.css'],
	theme: {
		extend: {
			screens: {
				'tablet-sm': '768px',
				tablet: '915px',
				'tablet-max': { max: '915px' },
				laptop: '1024px',
				desktop: '1280px',
				'desktop-max': { max: '1280px' },
				'desktop-xl': '1440px',
				'desktop-xl-max': { max: '1440px' }
			},
			colors: {
				transparent: 'transparent',
				white: '#FFFFFF',
				'white-secondary': '#FAF8FF',
				green: '#7FD1AE',
				blue: '#0390BF',
				'blue-dark': '#0388B5',
				'blue-white-light': '#EEF8FC',
				'night-blue': '#112A46',
				'night-blue-light': '#eef4fb',
				'night-blue-dark': '#122D47',
				red: '#C31952',
				'red-light': '#fbdee8',
				'red-dark': '#a21544',
				black: '#000000',
				'text-contrast': '#112A46',
				yellow: '#FFFD92',
				alert: '#C31952',
				'golden-yellow': '#FFDF00',
				stategray: '#708090',
				bronze: '#cd7f32'
			},
			fontSize: {
				sm: '12px',
				md: '16px',
				lg: '20px',
				xl: '24px',
				xxl: '30px',
				40: '40px',
				50: '50px',
				60: '60px',
				80: '80px',
				90: '90px'
			},
			fontFamily: {
				display: 'Montserrat, sans-serif'
			},
			width: {
				233: '233px'
			},
			height: {
				90: '90vh',
				326: '326px'
			},
			borderRadius: {
				15: '15px',
				30: '30px',
				40: '40px',
				50: '50px'
			}
		}
	},
	plugins: []
};
