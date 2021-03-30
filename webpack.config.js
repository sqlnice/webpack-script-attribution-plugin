const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackScriptAttributionPlugin = require('./plugin.js');
const path = require('path');
module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html'
    }),
    new WebpackScriptAttributionPlugin({
      defaultAttribute: 'defer'
    })
  ]
};
