module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        'number': '3rem',
      },
      outline: {
        yellow: '2px solid yellow',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
