/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./node_modules/flowbite-react/**/*.js", "./src/**/*.{ts,tsx}", "./public/**/*.html"],
	theme: {
		extend: {
			fontFamily: {
				"work-sans": ["Work Sans", "sans-serif"],
			},
			colors: {
				"site-purple": "#512da8 ",
				light: {
					primary: "#1a1f2e",
					secondary: "#10141f",
				},
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
