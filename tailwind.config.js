/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
		screens: {
      'xs': '320px',
      'sm': '520px',
      'md': '768px',
      'lg': '950px',
      'xl': '1100px',
      '2xl': '1220px',
    },
    extend: {
			maxWidth: {
				'container': "1100px"
			}, 

// 			.color1 {color: #000219;}
// .color2 {color: #003458;}
// .color3 {color: #0069a5;}
// .color4 {color: #00aaff;}
// .color5 {color: #00f6ff;}
			colors: {
				'app': '#00759d',
				'second': '#00b0d1',
				'background': '#002642'
			},
		},
  },
  plugins: [],
}
