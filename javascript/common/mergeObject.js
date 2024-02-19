import isArray from './isArray.js';
import isObject from './isObject.js';

/** @type { import('./mergeObject')['default'] } */
function mergeObject(obj, src) {
  try {

    if (typeof obj === 'undefined' || obj === null) {
      obj = {};
    }

    if (typeof src === 'undefined' || src === null) {
      src = {};
    }

    if (!isObject(obj) || !isObject(src)) {
      throw new TypeError('参数类型错误');
    }

    (function fn(target, source) {
      for (let key in source) {

        let srcValue = source[key];

        // 跳过 `undefined`
        if (typeof srcValue === 'undefined') {
          continue;
        }

        // 递归处理对象
        if (isObject(srcValue)) {
          // 初始化对象属性
          if (!isObject(target[key])) {
            target[key] = {};
          }
          // 递归处理
          fn(target[key], srcValue);
          // 继续处理其他属性
          continue;
        }

        // 来源属性为数组，直接替换
        if (isArray(srcValue)) {
          target[key] = srcValue;
          continue;
        }

        // 目标属性为对象，来源属性为 `null`，跳过
        if (srcValue === null && isObject(target[key])) {
          continue;
        }

        // 更新目标对象属性
        target[key] = srcValue;

      }
    })(obj, src);

    return obj;

  } catch (error) {
    console.error('合并失败：');
    console.error(error);
    return {};
  }
}

export default mergeObject;
