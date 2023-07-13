const path = require('path');
const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const port = process.env.PORT || 3000;

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
    filename: 'bundle.js',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: process.env.PORT || 3000,
    historyApiFallback: true,
    open: true,
    proxy: {
      '/api': {
           target: 'http://localhost:3000',
           router: () => 'http://localhost:8080',
           logLevel: 'debug' /*optional*/
      }
   }

  }
};
