/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts,md,svx}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography')
	],
	daisyui: {
		themes: ['night', 'cupcake', 'cyberpunk']
	}
};
