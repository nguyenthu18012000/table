/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  entry: "./src/app/index.tsx",
  output: {
    path: path.join(__dirname, "/src/assets"),
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        }
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '.'), 'node_modules'],
    alias: {
      '@components': path.resolve(__dirname, 'src/app/components'),
      // '@enums': path.resolve(__dirname, 'src/js/enums'),
      '@helpers': path.resolve(__dirname, 'src/app/helpers'),
      '@constants': path.resolve(__dirname, 'src/app/constants'),
      '@pages': path.resolve(__dirname, 'src/app/pages'),
      // '@services': path.resolve(__dirname, 'src/js/services'),
      // 'react-dom': '@hot-loader/react-dom',
      // 'react-virtualized/List': 'react-virtualized/dist/es/List',
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/assets/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'robots.txt',
      template: 'src/assets/robots.txt',
      inject: false,
    }),
  ]
};
