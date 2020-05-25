>基于html-webpack-plugin的基础上为index.html head部分的link标签链接 添加时间戳(html-webpack-plugin本身的配置hash只能为vendor（第三方模块）或者app（公共模块）添加hash，因此在此基础上添加了该内容)
>eg: 
>
><link href="..../xx.js">
>
><link href="..../xx.css">
>
> => 
>
><link href="..../xx.css?15487745871"> 
>
><link href="..../xx.js?15487745871"> 

### Usage

```js
//npm i html-stamp-webpack-plugin -D
const TimestampPlugin = require('html-stamp-webpack-plugin')
在webpack或者vue.config.js配置中新增插件
plugins: [
new TimestampPlugin() *// 自定义的webpack插件*
   ]
```



