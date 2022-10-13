/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl':32
    },
    colors: {
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#E1E1E6',
        100: '#C4C4CC',
      },
      cyan: {
        500: '#81D8F7',
        400: '#ABE7FD',
      },   

      'black': '#000000',
      'white': '#FFF',
      transparent: 'transparent'
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
