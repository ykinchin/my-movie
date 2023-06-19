/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-300': '#21242D',
				'primary-500': '#16161E',
				'secondary-500': '#00B9AE'
			},
			fontFamily: {
				dmsans: ['DM Sans', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				opensans: ['OPEN Sans', 'sans-serif']
			}
		},
		screens: {
			xs: '480px',
			sm: '768px',
			md: '1060px'
		}
	},
	plugins: []
}
