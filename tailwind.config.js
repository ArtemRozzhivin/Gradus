/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '520px',
      md: '768px',
      lg: '950px',
      xl: '1100px',
      '2xl': '1220px',
    },

    extend: {
      maxWidth: {
        container: '900px',
      },

      colors: {
        lightApp: '#e3e3e3',
        light: '#c2c2c6',
        darkApp: '#383941',
        dark: '#34343e',
        blue: '#2c67b5',
      },
    },
  },
  plugins: [],
}
