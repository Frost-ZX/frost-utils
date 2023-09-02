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
