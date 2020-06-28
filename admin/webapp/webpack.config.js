/* eslint-disable */
const props = require('./properties.json');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { login: './src/login/index.js', main: './src/main/index.js' },
  output: {
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['login'],
      filename: 'login/index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['main'],
      filename: 'main/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: props.environments.local.webappPort,
    open: true,
    openPage: 'login',
    historyApiFallback: true,
  }
};
if (process.env.NODE_ENV == 'development') {
  module.exports.devtool = 'eval-source-map';
}