/** 检测参数是否为对象 */
function isObject(value) {
  return (Object.prototype.toString.call(value) === '[object Object]');
}

export default isObject;
