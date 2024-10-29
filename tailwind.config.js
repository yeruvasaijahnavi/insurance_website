/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				accent: "#138f82",
				"accent-light": "#dff0ef",
			},
		},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
