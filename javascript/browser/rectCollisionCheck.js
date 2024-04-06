import isElement from './isElement.js';

const prefix = '[rectCollisionCheck]';

/** @type { import('./rectCollisionCheck')['default'] } */
function rectCollisionCheck(elementA, elementB, aside = false) {

  /** @type { import('./rectCollisionCheck').Returns } */
  let result = {
    error: false,
    hit: false,
  };

  if (!(isElement(elementA) && isElement(elementB))) {
    console.error(prefix, '缺少参数');
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

export default rectCollisionCheck;
