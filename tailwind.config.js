module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          101: '#75cff0',
          102: '#69B9D6',
          103: '#5698B0',
        },
      },
      fontFamily: {
        sans: ['Ruda', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
      backgroundImage: {
        'haagse': "url('/Users/andrewdelamare/Coding/portfolio_site/a-d-portfolio/src/images/SK-A-2443.png')",
      },
      height: {
        '400': '400px',
        '500': '500px',
        '600': '600px',
      }
    },
  },
  plugins: [],
}
