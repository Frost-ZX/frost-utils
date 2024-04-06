import isArray from './isArray';

const prefix = '[getObjectsAttr]';

/** @type { import('./getObjectsAttr')['default'] } */
function getObjectsAttr(options) {
  try {

    let { objects = [], propName = '', skipUndef = false } = options;

    if (!isArray(objects) || objects.length === 0) {
      return null;
    }

    /** @type {typeof options['objects'][number][string] | undefined} */
    let value0 = undefined;

    /** @type {typeof options['objects'][number][string] | undefined} */
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
    console.error(prefix, '获取失败：');
    console.error(error);
    return null;
  }
}

export default getObjectsAttr;
