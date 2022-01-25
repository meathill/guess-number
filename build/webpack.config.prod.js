const config = require('./webpack.config');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  ...config,
  devtool: false,
  plugins: [
    ...config.plugins,
    new CopyPlugin({
      patterns: [
        {
          from: 'public/manifest.webapp'
        },
        {
          from: 'public/assets',
          to: 'assets',
          toType: 'dir',
        },
      ]
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        exclude: /node_modules/,
        terserOptions: {
          ecma: 9,
          toplevel: true,
          compress: {
            drop_console: true, // eslint-disable-line camelcase
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
};
