import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

var APP_ROOT = 'app';

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      { test: /\.(png|jpg)$/, use : ['file-loader?name=images/[name].[ext]' ]},
      ]
  },
  devServer : {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};
