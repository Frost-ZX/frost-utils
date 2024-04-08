import isArray from './isArray.js';
import isObject from './isObject.js';

const prefix = '[dataToRanks]';

/** @type { import('./dataToRanks')['default'] } */
function dataToRanks(options) {

  let result = {
    data: [],
    error: null,
    success: false,
  };

  try {

    // 检测参数
    if (!isObject(options)) {
      throw TypeError('参数为空或类型错误');
    }

    let data0 = options.data;
    let data1 = result.data;

    let dataCols = options.cols;
    let dataRows = options.rows;
    let keepRows = Boolean(options.keepRows);

    // 检测参数
    if (!isArray(data0)) {
      throw TypeError('参数 data 为空或不是数组');
    }
    if (typeof dataCols !== 'number') {
      throw TypeError('参数 cols 为空或不是数字');
    }
    if (typeof dataRows !== 'number') {
      throw TypeError('参数 rows 为空或不是数字');
    }

    /** 一维数组下标 */
    let dataIndex = 0;

    // 处理行
    for (let i = 0; i < dataRows; i++) {
      let rowItems = [];
      // 处理列
      for (let j = 0; j < dataCols; j++) {
        let colItem = data0[dataIndex++];
        if (typeof colItem !== 'undefined') {
          // 添加列数据
          rowItems.push(colItem);
        } else {
          break;
        }
      }
      // 添加行数据
      data1.push(rowItems);
    }

    // 移除空行
    if (!keepRows) {
      for (let i = 0; i < data1.length; i++) {
        if (data1[i].length === 0) {
          data1.splice(i, data1.length - i);
          break;
        }
      }
    }

    // 更新结果
    result.success = true;

  } catch (error) {
    console.error(prefix, '处理失败：');
    console.error(error);
    result.error = error;
  }

  return result;

}

export default dataToRanks;
