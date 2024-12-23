/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('./src/assets/hero.jpg')"
			},
			colors: {
				//'white': "#d5ccba",
				'white': "#dfded9",
				'cyan': "#989a9c",
				'magenta': "#97522c",
				'blue': "#426a79",
				'yellow': "#eaa549",
				'green': "#858162",
				'red': "#be100e",
				'black': "#5e5252",
			}
		},
	},
	plugins: [
		require('daisyui'),
	],
	daisyui: {
		darkTheme: false,
	}
}
