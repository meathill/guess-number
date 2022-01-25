module.exports = {
  env: {
    es2021: true,
    browser: true,
    commonjs: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: 'next',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  globals: {
    PRODUCTION: false,
    process: false,
    __dirname: true,
  },
};
