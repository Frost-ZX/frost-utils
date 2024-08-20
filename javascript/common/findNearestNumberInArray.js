import isArray from './isArray.js';

/** @type { import('./findNearestNumberInArray')['default'] } */
function findNearestNumberInArray(array, value) {

  if (!isArray(array)) {
    console.error('查找失败：参数“array”不是数组。');
    return NaN;
  }

  if (array.length === 0) {
    console.error('查找失败：数组内容为空。');
    return NaN;
  }

  if (typeof value !== 'number') {
    console.error('查找失败：参数“value”不是数字。');
    return NaN;
  }

  return array.reduce((prev, curr) => {
    return (Math.abs(curr - value) < Math.abs(prev - value)) ? curr : prev;
  });

}

export default findNearestNumberInArray;
