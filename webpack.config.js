const path = require("path");
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require("./src/common");

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    port: config.developmentPort
  },
  plugins: [
    new htmlPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
}),
  ],
  resolve: {
    extensions: [".js"],
    fallback: {
      "child_process": false,
      "fs": false,
      "path": require.resolve('path-browserify'),
      "os": false,
    },
    alias: {
      process: "process/browser"
   } 
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}