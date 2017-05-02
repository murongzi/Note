###webpack
[命令行参数说明](https://webpack.github.io/docs/cli.html#configuration-file-config-example-config-js)

####目录结构
```plain
.
├── ReadMe.md
├── _mixs
│   ├── _icons.scss
│   ├── _main.scss
│   └── _var.scss
├── index.js
├── index.scss
└── webpack.config.js

```
####javascript文件代码内容

```javascript
require('./index.scss');
```
####index.scss文件内容

```scss
@import "./_mixs/main.scss";

body {
  font-size:20px;

  p {
    color:red;
  }
}
```
####_mixs/_main.scss文件内容
```scss
@import "./_var.scss";
@import "./_icons.scss";

```

其他文件内容随便放点css的文件

####webpack.config.js文件的内容

```javascript

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "/"),
    output: {
        path: path.join(__dirname, "../dist/css"),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.(sass|scss)/,
            loader: ExtractTextPlugin.extract(["css", 'sass'], {
                publicPath: path.join(__dirname, "../dist/css")
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};


```
####package.json文件的内容

```json

{
  "name": "webpackdemo",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "css":"rimraf dist/css &&  webpack --config ./css/webpack.config.js"
  },
  "devDependencies": {
    "webpack": "^1.13.1",
    "rimraf": "^2.5.2",
    "sass-loader": "3.2.3",
    "extract-text-webpack-plugin": "1.0.1",
    "node-sass": "3.13.0",
    "css-loader": "0.23.1",
    "style-loader": "0.13.1"
  },
  "author": "",
  "license": "ISC"
}

```

*运行命令为npm run css*


**以上代码,js中只可以通过require('xxx.scss')的方式引用**

##如何通过import "xxx.css"的方式引用

通过import的方式引入,import导入模块是ES6提供的功能,所以要添加babel-loader,对响应的js进行处理







