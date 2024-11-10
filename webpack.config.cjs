const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //JSX, JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i, // Image
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
            },
          },
        ],
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/, // Fonts
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.css$/, // CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/, // SCSS
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env), // Tüm process.env değişkenlerini tarayıcı ortamına aktarır
    }),
  ],
};
