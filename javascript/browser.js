/** 检测参数是否为 `HTMLElement` */
export function isElement(value) {
  return (value instanceof HTMLElement);
}

/**
 * @description 检测元素显示隐藏
 * - 使用 `IntersectionObserver` API
 * - 需要调用 `.disconnect()` 以结束监听
 * @param {HTMLElement} target 需要检测的元素
 * @param {(data: CallbackData) => void} cb
 */
export function observeElementVisible(target, cb) {

  /**
   * @typedef  CallbackData
   * @property {boolean}     visible
   * @property {HTMLElement} target
   */

  let observer = new IntersectionObserver(function (entries) {
    let entry = entries[0];
    if (entry && cb) {
      cb({
        visible: entry.isIntersecting,
        target: entry.target,
      });
    }
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  observer.observe(target);

  return observer;

}

/**
 * @description 检测两个矩形元素是否重叠
 * @param   {Element} elementA 检测的 DOM 元素
 * @param   {Element} elementB 检测的 DOM 元素
 * @param   {boolean} aside    是否包含边缘重叠，默认 true
 * @returns `{ error: 是否检测失败, hit: 是否重叠 }`
 */
export function rectCollisionCheck(elementA, elementB, aside = false) {

  let result = {
    error: false,
    hit: false,
  };

  if (!(isElement(elementA) && isElement(elementB))) {
    console.error('检测失败：缺少参数');
    result.error = true;
    return result;
  }

  let bcrA = elementA.getBoundingClientRect();
  let bcrB = elementB.getBoundingClientRect();

  /** @type {typeof bcrA} */ let rectA = {};
  /** @type {typeof bcrB} */ let rectB = {};

  for (let key in bcrA) {
    let v1 = bcrA[key];
    let v2 = bcrB[key];
    if (typeof v1 === 'number') {
      rectA[key] = Math.round(v1);
      rectB[key] = Math.round(v2);
    }
  }

  result.hit = (aside ? !(
    rectA.bottom < rectB.top ||
    rectA.left > rectB.right ||
    rectA.top > rectB.bottom ||
    rectA.right < rectB.left
  ) : !(
    rectA.bottom <= rectB.top ||
    rectA.left >= rectB.right ||
    rectA.top >= rectB.bottom ||
    rectA.right <= rectB.left
  ));

  return result;

}

/**
 * @description 选择单个文件，获取 Base64
 * @param   {string[]} mimeList MIME 类型列表
 * - 用于检测文件格式，若为空，则允许所有格式
 * - 例：`['application/json', 'image/jpeg']`
 * @param   {number}   maxSize  文件大小最大值（单位：B）
 * @returns {Promise<Returns>}
 */
export function selectFileDataURL(mimeList = [], maxSize = 0) {

  /**
   * @typedef  {object} Returns
   * @property {string}  dataURL
   * @property {Error}   error
   * @property {File}    file
   * @property {keyof M} message
   * @property {boolean} success
   */

  const M = {
    CANCELLED: 'CANCELLED',
    INVALID_FORMAT: 'INVALID_FORMAT',
    NO_FILE: 'NO_FILE',
    READER_ERROR: 'READER_ERROR',
    SIZE_EXCEEDED: 'SIZE_EXCEEDED',
    SUCCESS: 'SUCCESS',
  };

  return new Promise((resolve) => {

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
