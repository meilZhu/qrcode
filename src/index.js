/*
 * @fileName: 二维码解析/生成器入口
 * @Date: 2020-10-10 17:36:28
 * @Author: manyao.zhu
 */
// import './libs/reqrcode';
import './libs/qrcode.min';

import { getQrCode, setQrCode } from './ultis/qrcode';
// import { BaseOptions } from './config/baseConfig';
import { getFileUrl, utf82str } from './ultis/ulti';

// console.log(qrcode);
console.log(QRCode);

const BaseOptions = {
  width: 128,
  height: 128,
  colorDark: '#000',
  colorLight: '#fff',
  correctLevel: QRCode.CorrectLevel.H
}

/**
 * @description 初始化生成二维码
 * @param {*} id  生成二维码的盒子id
 * @param {*} options  生成二维码的基础配置 
 */
export function initCode(id, options) {
  let opt;
  if (typeof optionns === 'string') {
    opt = Object.assign(BaseOptions, { text: options });
  } else {
    opt = Object.assign(BaseOptions, options);
  }

  const reqrcode = new QRCode(id, opt)
  setQrCode(reqrcode);
}

/**
 * @description 当初始化生成二维码之后，再次出发生成新的另一个二维码时，调用
 * @param {*} text 新的内容
 */
export function makeCode(text) {
  const reqrcode = getQrCode();
  reqrcode.clear();
  reqrcode.makeCode(text)
}

/**
 * @description 二维码解析
 * @param {*} file 需要解析的二维码文件
 * @param {*} callback 解析二维码结果的回调函数
 */
export function deCode(file, callback) {
  const url = getFileUrl(file);
  qrcode.decode(url);
  qrcode.callback = function (imageMsg) {
    callback(utf82str(imageMsg));
  }
}

export const correctLevel = QRCode.correctLevel


