/**
 * @typedef  CallbackData
 * @property {Target}  target
 * @property {boolean} visible
 */

/** @typedef {HTMLElement} Target */

/**
 * @description 检测元素显示隐藏
 * - 使用 `IntersectionObserver` API
 * - 需要调用 `.disconnect()` 以结束监听
 * @param {Target} target 需要检测的元素
 * @param {(data: CallbackData) => void} cb
 */
function observeElementVisible(target, cb) {

  let observer = new IntersectionObserver(function (entries) {
    let entry = entries[0];
    if (entry && cb) {
      cb({
        target: entry.target,
        visible: entry.isIntersecting,
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

export default observeElementVisible;
