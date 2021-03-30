# webpack-script-attribution-plugin
设置webpack多页面打包后引入对应包script的属性。

> 使用方式

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackScriptAttributionPlugin = require('./plugin.js');
const path = require('path');
module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html'
    }),
    new WebpackScriptAttributionPlugin({
      defaultAttribute: 'defer'
    })
  ]
};
```

> TODO

- 更改项目结构，发布到npm
- 扩展参数，支持内联
- 兼容webpack3、5