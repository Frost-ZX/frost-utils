# @frost-utils/javascript

## 函数列表

### 通用函数

- `common/compareString` - 使用 `localeCompare` 对比字符串
- `common/getCommonDateTime` - 获取 `yyyy-MM-dd HH:mm:ss` 格式的日期时间字符串
- `common/getObjectValue` - 通过路径获取对象属性值
- `common/getObjectsAttr` - 获取多个对象中的某个属性
- `common/isArray` - 检测参数是否为数组
- `common/isObject` - 检测参数是否为对象
- `common/mergeObject` - 合并对象属性
- `common/mergeObjects` - 对比多个对象的数据，合并为一个对象
- `common/rectCollisionCheck` - 检测两个矩形区域是否重叠
- `common/sleep` - 等待一段时间
- `common/toBroadcastAddress` - 将 IP 地址转换为广播地址

- `common/color/getHEXColor` - 获取随机的十六进制颜色值
- `common/color/getRGBColor` - 获取随机的 RGB 颜色值

### 浏览器专用

- `browser/isElement` - 检测参数是否为 `Element`
- `browser/isHTMLElement` - 检测参数是否为 `HTMLElement`
- `browser/observeElementVisible` - 检测元素显示隐藏
- `browser/rectCollisionCheck` - 检测两个矩形元素是否重叠

- `browser/data-url/blobToDataURL` - 转换二进制（Blob）为 Base64
- `browser/data-url/requestDataURL` - 请求获取文件，转换为 Base64
- `browser/data-url/selectFileDataURL` - 选择单个文件，获取 Base64
