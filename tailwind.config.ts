const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
	webpackDevMiddleware: (config: any) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		}
		return config
	},
	content: ["./src/**/*.{ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				'jade': {
					'50': '#effef7',
					'100': '#dafeef',
					'200': '#b8fadd',
					'300': '#81f4c3',
					'400': '#43e5a0',
					'500': '#1acd81',
					'600': '#0fa968',
					'700': '#108554',
					'800': '#126945',
					'900': '#11563a',
					'950': '#03301f',
				},
			}
		},
	},
	plugins: [
		addVariablesForColors,
	],
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}