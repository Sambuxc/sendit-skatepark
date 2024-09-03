/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
		extend: {
			screens:{},
			colors: {
				'blue': {
					light: '#fff',
					DEFAULT: '#007DC5',
					dark: '#000'
				},
				'green': {
					light: '#fff',
					DEFAULT: '#009659',
					dark: '#000'
				},
				'red': {
					light: '#fff',
					DEFAULT: '#ED1C24',
					dark: '#000'
				},
				'yellow': {
					light: '#fff',
					DEFAULT: '#FFF200',
					dark: '#000'
				},
			},
		},
  },
  plugins: [],
}

