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
const TypeMap = require('is-assets');

const jsType = TypeMap('js') // application/x-javascript;
const jpgType = TypeMap('jpg') // image/jpeg;
```
ts代码示例
``` ts
import TypeMap from 'is-assets';

const jsType = TypeMap('js') // application/x-javascript;
const jpgType = TypeMap('jpg') // image/jpeg;
```

**`扩展npm包的类型map`**

js代码示例
``` js
const customMap = {
  txt: 'text/plain',
  mp4: 'video/mp4'
};
const MyTypeMap = require('is-assets')(customMap);

const jsType = MyTypeMap('js') // application/x-javascript;
const txtType = MyTypeMap('txt') // text/plain;
const mp4Type = MyTypeMap('mp4') // video/mp4;
```
ts代码示例
``` ts
const customMap = {
  txt: 'text/plain',
  mp4: 'video/mp4'
};
import TypeMap from 'is-assets';
const MyTypeMap = TypeMap(customMap);

const jsType = MyTypeMap('js') // application/x-javascript;
const txtType = MyTypeMap('txt') // text/plain;
const mp4Type = MyTypeMap('mp4') // video/mp4;
```