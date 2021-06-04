# is-assets
Mapping file suffixes to Content-Type

#### 安装
```
npm install is-assets
```
or
```
yarn add is-assets
```

#### 背景
HTTP传输文件时根据静态文件名后缀判定Content-Type，便于文件接收方或浏览器解析内容
<br><br>
#### 使用

**`直接使用npm包自带的类型map`**

js代码示例
``` js
const { assetsMapping, ASSETS_TYPE } = require('is-assets');

console.log(ASSETS_TYPE); // npm包自带的静态类型映射关系

const jsType = assetsMapping('js') // application/x-javascript
const jpgType = assetsMapping('jpg') // image/jpeg
const mp4Type = assetsMapping('mp4') // undefined
```
ts代码示例
``` ts
import { assetsMapping, ASSETS_TYPE } from 'is-assets';

console.log(ASSETS_TYPE); // npm包自带的静态类型映射关系

const jsType = assetsMapping('js') // application/x-javascript
const jpgType = assetsMapping('jpg') // image/jpeg
const mp4Type = assetsMapping('mp4') // undefined
```

**`扩展npm包的类型map`**

js代码示例
``` js
const customMap = {
  txt: 'text/plain',
  mp4: 'video/mp4'
};
const { assetsMapping } = require('is-assets');
const MyAssetsMapping = assetsMapping(customMap);

const jsType = MyAssetsMapping('js') // application/x-javascript
const txtType = MyAssetsMapping('txt') // text/plain
const mp4Type = MyAssetsMapping('mp4') // video/mp4
```
ts代码示例
``` ts
const customMap = {
  txt: 'text/plain',
  mp4: 'video/mp4'
};
import { assetsMapping } from 'is-assets';
const MyAssetsMapping = assetsMapping(customMap);

const jsType = MyAssetsMapping('js') // application/x-javascript
const txtType = MyAssetsMapping('txt') // text/plain
const mp4Type = MyAssetsMapping('mp4') // video/mp4
```