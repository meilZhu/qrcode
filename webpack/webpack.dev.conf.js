/*
 * @file: qrcode 的 webpack的开发环境的配置信息
 * @Date: 2020-10-12 11:16:01
 * @author: manyao.zhu
 */

const merge = require('webpack-merge');
const commonWebpack = require('./webpack.base.conf');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonWebpack, {
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'qrcode 案例',
      template: './src/index.html'
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    contentBase: '../dist',
  },
})