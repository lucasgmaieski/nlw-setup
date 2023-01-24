/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // aqui tu da o caminho de tudo que vai usar o css
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090A'
      },
    },
  },
  plugins: [],
}
