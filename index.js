/* html-webpack-plugin补充插件，功能：完善html-webpack-plugin的hash参数配置，只会给第三方模块和公共模块添加哈希值的问题
现在更改为【head】标签里面的每个chunk的js,css都添加时间戳参数（公用和第三方的js ,css 直接配置htmlwebpack-plugin 的hash参数即可即可）
*/
class TimestampPlugin {
  apply (compiler) {
    compiler.hooks.compilation.tap('TimestampPlugin', (compilation) => {
      compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync('TimestampPlugin', (data, cb) => {
        data.head = data.head.map(item => {
          if (item.tagName === 'link') {
            item.attributes.href = item.attributes.href.replace(item.attributes.href, `${item.attributes.href}?${new Date().getTime()}`)
          }
          return item
        })
        cb(null, data)
      })
    })
  }
}
module.exports = TimestampPlugin
