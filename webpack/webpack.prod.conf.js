/*
 * @fileName: qrcode 的webpack生产环境的配置信息
 * @Date: 2020-10-12 11:16:32
 * @Author: manyao.zhu
 */
const merge = require('webpack-merge');
const commonWebpack = require('./webpack.base.conf');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(commonWebpack, {
  mode: 'production',
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'qrcode 案例',
      template: './index.html'
    }),
    new UglifyjsWebpackPlugin()
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'qrcode.min.js',
    publicPath: '/'
  }
})

