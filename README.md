# @styleofpicasso/qrcode

qrcode 二维码解析器/二维码生成 的插件

## how to install

#### For JQuery and original js

Download js lib from npmjs

```
npm i @styleofpicasso/qrcode
```

add js to html

```
<script type="text/javascript" src="/qrcode.min.js"></script>
```

#### For TypeScript such as Angular Vue React

install

```
npm i @styleofpicasso/qrcode --save-dev
```

Import

```
import * as QRCode from '@styleofpicasso/qrcode';
```

## QRCode 说明

- QRCode 支持本地图片的二维码解析， 二维码生成 / 带 logo 的二维码的生成 / 二维码的清除 / 二维码大小的设置 / 二维码的设置

## QRCode

#### 初始化生成二维码

```
WebSocketSdk.initCode(id, config);
```

##### id

生成二维码的容器 id

##### config 初始化配置信息

```
// 默认配置 （已经添加过的配置信息）
{
  // 二维码的默认配置
  width: 128,
  height: 128,
  colorDark: '#000',
  colorLight: '#fff',
  correctLevel: QRCode.CorrectLevel.H,
  dotScale: 1,

  // 二维码的生成工具（canvas 或 svg） 默认 canvas
  drawer: 'canvas'
}

// 必须添加的配置
{
  // 初始生成二维码的内容
  text: ''
}

// 可以添加的配置
{
  // 二维码logo的配置信息
  logo: undefined,
  logoWidth: undefined,
  logoHeight: undefined,
  logoBackgroundColor: '#fff',
  logoBackgroundTransparent: false,

  // 二维码背景的配置信息
  backgroundImage: '', // Background Image
  backgroundImageAlpha: 1, // Background image transparency, value between 0 and 1. default is 1.
  autoColor: false,

  // 二维码标题的配置信息
  title: 'QR Title', // content
  titleFont: "bold 18px Arial", // font. default is "bold 16px Arial"
  titleColor: "#004284", // color. default is "#000"
  titleBackgroundColor: "#fff", // background color. default is "#fff"
  titleHeight: 70, // height, including subTitle. default is 0
  titleTop: 25 // d

  // 二维码副标题的配置信息
  subTitle: 'QR subTitle', // content
  subTitleFont: "14px Arial", // font. default is "14px Arial"
  subTitleColor: "#004284", // color. default is "4F4F4F"
  subTitleTop: 40 // draws y coordinates. default is 0

  // 二维码的事件配置
  onRenderingStart: undefined,
  onRenderingEnd: undefined,
}
```

#### 根据内容再次生成二维码

```
QRCode.makeCode(text);
```

##### text

生成二维码的内容

#### 二维码的清楚功能

```
/**
 * 清除二维码
 */
QRCode.clearCode();
```

#### 设置二维码的宽高

```
/**
 * 二维码的大小调整
 * width : 宽
 * height: 高
 */
QRCode.resizeCode(width, height)
```

#### 二维码的解析 （图片二维码的解析 / 这里不涉及扫码等功能）

```
/**
 * 图片二维码的解析功能
 * file 本地选择的图片文件； 或 有效图片的路径
 * callback  解析成功之后的回调函数， 参数： 解析的内容 当解析失败时，返回undefine， 成功返回解析数据
 */
QRCode.deCode(file, callback);
```

## CHANGE LOG

##### V0.0.2

添加 readme 的使用说明

##### v0.0.1

创建@styleofpicasso/qrcode
