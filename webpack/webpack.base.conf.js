/*
 * @fileName: webpack基础配置
 * @Date: 2020-10-12 11:16:01
 * @Author: manyao.zhu
 */

const path = require('path');
const _ = require('loadsh');
const loader = require('./webpack.loader');

module.exports = {
  name: 'qrcode',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'qrcode.js',
    library: 'QrCode',
    libraryTarget: 'umd'
  },
  devtool: '#source-map',
  module: {
    rules: _.flatten(loader.eslint, loader.images, loader.babel)
  }
}
