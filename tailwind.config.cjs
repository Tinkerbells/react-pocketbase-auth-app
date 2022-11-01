/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#16161a',
        base: '#ffffff',
        baseAlt: '#EBEFF2',
        baseAlt2: '#DEE3E8',
        gray: '#666F75',
        lightGray: '#9A9A9A',
        dangeColor: '#EF4565',
      },
      fontFamily: {
        sourceSans: ['Source Sans Pro', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
}
