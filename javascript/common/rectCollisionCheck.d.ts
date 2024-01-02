declare type RectInfo = {
  /** 起始 X */
  x0: number;
  /** 结束 X */
  x1: number;
  /** 起始 Y */
  y0: number;
  /** 结束 Y */
  y1: number;
};

declare type Returns = {
  error: boolean;
  hit: boolean;
};

/**
 * @description 检测两个矩形区域是否重叠
 * @param rectA 检测的区域信息
 * @param rectB 检测的区域信息
 * @param aside 是否包含边缘重叠，默认 false
 */
declare function rectCollisionCheck(
  rectA: RectInfo,
  rectB: RectInfo,
  aside?: boolean
): Returns;

export type { RectInfo, Returns };

export default rectCollisionCheck;
