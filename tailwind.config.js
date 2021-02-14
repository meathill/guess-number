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
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
