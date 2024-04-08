import isObject from './isObject.js';

const prefix = '[rectCollisionCheck]';

/** @type { import('./rectCollisionCheck')['default'] } */
function rectCollisionCheck(rectA, rectB, aside = false) {

  /** @type { import('./rectCollisionCheck').Returns } */
  let result = {
    error: false,
    hit: false,
  };

  try {

    let keys = ['x0', 'x1', 'y0', 'y1'];

    if (!(isObject(rectA) && isObject(rectB))) {
      throw new Error('缺少参数');
    }

    // 处理参数
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (typeof rectA[key] !== 'number') {
        rectA[key] = 0;
      }
      if (typeof rectB[key] !== 'number') {
        rectB[key] = 0;
      }
    }

    // 检测重叠
    result.hit = (aside ? !(
      rectA.y1 < rectB.y0 ||
      rectA.x0 > rectB.x1 ||
      rectA.y0 > rectB.y1 ||
      rectA.x1 < rectB.x0
    ) : !(
      rectA.y1 <= rectB.y0 ||
      rectA.x0 >= rectB.x1 ||
      rectA.y0 >= rectB.y1 ||
      rectA.x1 <= rectB.x0
    ));

    return result;

  } catch (error) {
    console.error(prefix, '检测失败：');
    console.error(error);
    result.error = true;
    return result;
  }

}

export default rectCollisionCheck;
