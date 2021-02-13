const {resolve} = require('path');
const {DefinePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const isDevServer = process.env.WEBPACK_DEV_SERVER;

console.log('xxxx', isDevServer, );

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          isDevServer ? 'style-loader' : MiniCSSExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          isDevServer ? 'style-loader' : MiniCSSExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: 'pug-plain-loader',
          },
          {
            use: 'pug-loader',
          }
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(webp|png|jpg|gif|svg|woff2|eot|woff|ttf|ico|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets',
              publicPath: 'assets',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  devtool: 'eval-cheap-source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json', '.mjs'],
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/template/index.pug'),
    }),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new VueLoaderPlugin(),
  ],
};
