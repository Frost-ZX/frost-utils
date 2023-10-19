/** 检测参数是否为数组 */
function isArray(value) {
  return (Object.prototype.toString.call(value) === '[object Array]');
}

export default isArray;
