import blobToDataURL from './blobToDataURL.js';
import isObject from '../../common/isObject.js';

/**
 * @typedef  {object} Returns
 * @property {string}       dataURL
 * @property {Error | null} error
 * @property {boolean}      success
 * @property {boolean}      timeout
 */

/**
 * @description 请求获取文件，转换为 Base64
 * @param {string}      fileURL   文件请求地址
 * @param {number}      [timeout] 请求超时毫秒数
 * @param {RequestInit} [init]    传递到 `fetch()`
 */
function requestDataURL(fileURL, timeout = 0, init = {}) {

  /** @type {Returns} */
  let result = {
    error: null,
    dataURL: '',
    success: false,
    timeout: false,
  };

  if (typeof fetch === 'undefined') {
    result.error = new ReferenceError('当前浏览器不支持 fetch()');
    return Promise.resolve(result);
  }

  if (typeof fileURL !== 'string' || !fileURL) {
    result.error = new TypeError('url 参数错误');
    return Promise.resolve(result);
  }

  if (typeof timeout !== 'number' || timeout < 0) {
    result.error = new TypeError('timeout 参数错误');
    return Promise.resolve(result);
  }

  if (!isObject(init)) {
    result.error = new TypeError('init 参数错误');
    return Promise.resolve(result);
  }

  let ctrl = new AbortController();
  let timer = null;

  if (timeout) {
    timer = setTimeout(() => {
      result.timeout = true;
      ctrl.abort('请求超时');
    }, timeout);
  }

  return fetch(fileURL, {
    method: 'GET',
    signal: ctrl.signal,
    ...init,
  }).then((response) => {
    timer && clearTimeout(timer);
    return response.blob();
  }).then((blob) => {
    return blobToDataURL(blob);
  }).then((dataURL) => {
    if (dataURL) {
      result.dataURL = dataURL;
      result.success = true;
    }
    return result;
  }).catch((error) => {
    result.error = error;
    return result;
  });

}

export default requestDataURL;
