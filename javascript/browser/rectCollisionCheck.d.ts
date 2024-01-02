declare type Returns = {
  error: boolean;
  hit: boolean;
};

/**
 * @description 检测两个矩形元素是否重叠
 * @param elementA 检测的 DOM 元素
 * @param elementB 检测的 DOM 元素
 * @param aside    是否包含边缘重叠，默认 false
 */
declare function rectCollisionCheck(
  elementA: Element,
  elementB: Element,
  aside?: boolean
): Returns;

export type { Returns };

export default rectCollisionCheck;
