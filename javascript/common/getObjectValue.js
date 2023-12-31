import isArray from './isArray.js';
import isObject from './isObject.js';

/** @type { import('./getObjectValue')['default'] } */
function getObjectValue(obj, path = '', sep = '.') {

  if (!isObject(obj)) {
    console.error('获取属性失败：参数 obj 不是对象');
    return;
  }

  if (typeof path !== 'string') {
    console.error('获取属性失败：参数 path 不是字符串');
    return;
  }

  if (typeof sep !== 'string') {
    console.error('获取属性失败：参数 sep 不是字符串');
    return;
  }

  if (path === '') {
    return obj;
  }

  return path.split(sep).reduce((a, b) => {
    return (isArray(a) || isObject(a)) ? a[b] : undefined;
  }, obj);

}

export default getObjectValue;
