/** @type {import('tailwindcss').Config} */
module.exports = {
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
        container: '1100px',
      },

      colors: {
        app: '#c2c2c6',
        second: '#1c3c65',
        background: '#002642',
      },
    },
  },
  plugins: [],
};
