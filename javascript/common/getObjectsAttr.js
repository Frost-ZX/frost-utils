/** @typedef {Record<string, boolean|number|string>[]} Objects */

/**
 * @typedef  Options
 * @property {Objects} objects   简单对象列表
 * @property {string}  propName  需要获取的属性名
 * @property {boolean} skipUndef 忽略 `undefined`
 */

/**
 * @description 获取多个对象中的某个属性
 * - 将会对比多个对象中的属性
 * - 若属性值都相同，则返回对应的值
 * - 若属性值都为 `undefined`，则返回 `null`
 * - 若存在不同的属性值，则返回 `null`
 * - 若对象列表为空，则返回 `null`
 * @param {Options} options
 */
function getObjectsAttr(options) {
  try {

    let { objects = [], propName = '', skipUndef = false } = options;

    if (!Array.isArray(objects) || objects.length === 0) {
      return null;
    }

    /** @type {Objects[number][string] | undefined} */
    let value0 = undefined;

    /** @type {Objects[number][string] | undefined} */
    let value1 = undefined;

    for (let i = 0; i < objects.length; i++) {
      value1 = objects[i][propName];
      // 跳过 undefined
      if (skipUndef && typeof value1 === 'undefined') {
        continue;
      }
      // 更新初始值
      if (typeof value0 === 'undefined') {
        value0 = value1;
      }
      // 存在不相同的值
      if (value1 !== value0) {
        return null;
      }
    }

    return (typeof value0 === 'undefined' ? null : value0);

  } catch (error) {
    console.error('获取对象属性失败：');
    console.error(error);
    return null;
  }
}

export default getObjectsAttr;
