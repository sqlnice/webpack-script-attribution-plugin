const NAME = 'WebpackScriptAttributionPlugin';
const htmlWebpackPlugin = require('html-webpack-plugin');

class WebpackScriptAttributionPlugin {
  constructor(options) {
    this.defaultAttribute = options.defaultAttribute || 'defer';
  }
  apply(compiler) {
    compiler.hooks.compilation.tap(NAME, (compilation, callback) => {
      htmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tap(NAME, (pluginArgs) => {
        const headBody = pluginArgs['headTags'];
        const bodyBody = pluginArgs['bodyTags'];
        bodyBody.forEach((element) => {
          const defaultAttribute = this.defaultAttribute;
          element.attributes[defaultAttribute] = defaultAttribute;
        });
      });
    });
  }
}
module.exports = WebpackScriptAttributionPlugin;
