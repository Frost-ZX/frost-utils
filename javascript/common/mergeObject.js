import isArray from './isArray.js';
import isObject from './isObject.js';

/**
 * @description 合并对象属性
 * - 将会修改目标对象，添加来自来源对象中的属性
 * - 若来源属性为数组，将会直接替换
 * - 若目标属性为对象，但来源属性为 `null`，则跳过
 * @template T1, T2
 * @param   {T1} obj 目标对象
 * @param   {T2} src 来源对象
 * @returns {T1 & T2}
 */
function mergeObject(obj, src) {
  try {

    (function fn(target, source) {
      for (let key in source) {

        let srcValue = source[key];

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

    return (obj || {});

  } catch (error) {
    console.error('合并失败：');
    console.error(error);
    return {};
  }
}

export default mergeObject;
