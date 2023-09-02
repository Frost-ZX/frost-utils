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
