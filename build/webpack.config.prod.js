const config = require('./webpack.config');
const CopyPlugin = require('copy-webpack-plugin');

config.devtool = false;
config.plugins = [
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
]

module.exports = config;
