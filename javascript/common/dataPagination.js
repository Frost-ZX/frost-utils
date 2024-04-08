import isArray from './isArray.js';
import isObject from './isObject.js';

const prefix = '[dataPagination]';

/** @type { import('./dataPagination')['default'] } */
function dataPagination(options) {

  let result = {
    data: [],
    error: null,
    pageNext: 0,
    pageSize: 0,
    pageSum: 0,
    success: false,
  };

  try {

    // 检测参数
    if (!isObject(options)) {
      throw TypeError('参数为空或类型错误');
    }

    let {
      data,
      pageInit = 1,
      pageNum = 1,
      pageSize = 10,
      type,
    } = options;

    // 检测参数
    if (!isArray(data)) {
      throw TypeError('参数 data 为空或不是数组');
    }
    if (typeof pageInit !== 'number') {
      throw TypeError('参数 pageInit 不是数字');
    }
    if (typeof pageNum !== 'number') {
      throw TypeError('参数 pageNum 不是数字');
    }
    if (typeof pageSize !== 'number') {
      throw TypeError('参数 pageSize 不是数字');
    }
    if (typeof type === 'undefined' || !type) {
      throw TypeError('参数 type 为空');
    }

    // 记录参数
    result.pageSize = pageSize;

    // 页数
    let dataSum = data.length;
    let pageNext = null;
    let pageSum = 0;

    // 截取
    let sStart = 0;
    let sEnd = 0;

    // 数据为空，结束
    if (dataSum === 0) {
      result.pageNext = pageInit;
      result.pageSum = pageInit;
      result.success = true;
      return result;
    } else {
      pageSum = Math.ceil(dataSum / pageSize);
    }

    // 处理页数
    if (type === 'next') {
      pageNext = pageNum + 1;
    } else if (type === 'prev') {
      pageNext = pageNum - 1;
    } else if (type === 'set') {
      pageNext = pageNum;
    } else {
      throw Error('参数 type 错误');
    }

    // 限制范围
    (pageNext < 1) && (pageNext = 1);
    (pageNext > pageSum) && (pageNext = pageSum);

    // 计算截取范围
    sStart = pageSize * (pageNext - 1);
    sEnd = sStart + pageSize;

    // 更新结果
    result.data = data.slice(sStart, sEnd);
    result.pageNext = pageNext;
    result.pageSum = pageSum;
    result.success = true;

  } catch (error) {
    console.error(prefix, '处理失败：');
    console.error(error);
    result.error = error;
  }

  return result;

}

export default dataPagination;
