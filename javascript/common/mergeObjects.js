import isArray from './isArray';

/** @typedef { import('./mergeObjects')['default'] } F */
/** @typedef { import('./mergeObjects').Returns<{}> } R */

/** @type {F} */
function mergeObjects(objects, skipKeys = []) {

  /** @type {R} */
  const data = {
    diffKeys: [],
    error: null,
    result: {},
  };

  if (!isArray(objects)) {
    data.error = new Error('处理失败：参数错误');
    data.result = null;
    return data;
  }

  if (objects.length === 0) {
    data.error = new Error('处理失败：没有需要对比的对象');
    data.result = null;
    return data;
  }

  try {

    const { diffKeys, result } = data;

    // 第一个对象和其余对象
    const first = objects[0];
    const rest = objects.slice(1);

    // 已设为 null 的属性
    // 格式：{ key: true }
    const nullKeys = {};

    // 记录主动跳过的属性
    skipKeys.forEach((key) => {
      result[key] = null;
      nullKeys[key] = true;
    });

    // 获取初始值
    for (let key in first) {
      !nullKeys[key] && (result[key] = first[key]);
    }

    // 对比属性值
    rest.forEach((obj) => {
      for (let key in obj) {
        // 跳过已设置为 null 的属性
        if (nullKeys[key]) {
          continue;
        }
        // 若值不一致，则设置为 null
        if (obj[key] !== result[key]) {
          diffKeys.push(key);
          result[key] = null;
          nullKeys[key] = true;
        }
      }
    });

  } catch (error) {
    data.error = error;
  }

  return data;

}

export default mergeObjects;
