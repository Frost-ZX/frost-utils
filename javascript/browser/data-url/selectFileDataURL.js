/**
 * @typedef  {object} Returns
 * @property {string}           dataURL
 * @property {Error | null}     error
 * @property {File | null}      file
 * @property {keyof (typeof M)} message
 * @property {boolean}          success
 */

/**
 * @description 选择单个文件，获取 Base64
 * @param   {string[]} mimeList MIME 类型列表
 * - 用于检测文件格式，若为空，则允许所有格式
 * - 例：`['application/json', 'image/jpeg']`
 * @param   {number}   maxSize  文件大小最大值（单位：B）
 * @returns {Promise<Returns>}
 */
function selectFileDataURL(mimeList = [], maxSize = 0) {

  const M = {
    '': '',
    CANCELLED: 'CANCELLED',
    INVALID_FORMAT: 'INVALID_FORMAT',
    NO_FILE: 'NO_FILE',
    READER_ERROR: 'READER_ERROR',
    SIZE_EXCEEDED: 'SIZE_EXCEEDED',
    SUCCESS: 'SUCCESS',
  };

  return new Promise((resolve) => {

    /** @type {Returns} */
    let result = {
      dataURL: '',
      error: null,
      file: null,
      message: '',
      success: false,
    };

    let accept = mimeList.join(',') || '*';
    let input = document.createElement('input');
    let reader = new FileReader();
    let style = 'position: fixed; left: 0; top: 0; width: 0; height: 0; overflow: hidden;';

    /** 是否已触发 `change` 事件 */
    let changed = false;

    reader.onerror = function () {
      result.error = reader.error;
      result.message = M.READER_ERROR;
      resolve(result);
    };

    reader.onload = function () {
      result.dataURL = reader.result;
      result.message = M.SUCCESS;
      result.success = true;
      resolve(result);
    };

    input.setAttribute('accept', accept);
    input.setAttribute('style', style);
    input.setAttribute('type', 'file');

    // 注意：
    // 取消选择文件时无法触发“change”事件
    input.onchange = function () {

      let file = input.files[0];

      changed = true;

      if (file) {
        result.file = file;
      } else {
        result.message = M.NO_FILE;
        return resolve(result);
      }

      // 文件格式
      if (mimeList.length > 0 && !mimeList.includes(file.type)) {
        result.message = M.INVALID_FORMAT;
        return resolve(result);
      }

      // 文件大小
      if (
        typeof maxSize === 'number' &&
        maxSize > 0 &&
        file.size > maxSize
      ) {
        result.message = M.SIZE_EXCEEDED;
        return resolve(result);
      }

      // 读取文件
      reader.readAsDataURL(file);

    };

    // 注意：
    // 打开文件时，事件顺序为 focus -> change
    window.addEventListener('focus', function () {
      setTimeout(() => {
        if (!changed) {
          result.message = M.CANCELLED;
          resolve(result);
        }
        input.remove();
      }, 1000);
    }, { once: true });

    document.body.appendChild(input);

    input.click();

  });

}

export default selectFileDataURL;
