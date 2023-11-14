declare type Objects = Record<string, boolean | number | string>[];

declare type Options = {
  /** 简单对象列表 */
  objects: Objects;
  /** 需要获取的属性名 */
  propName: string;
  /** 忽略 `undefined` */
  skipUndef: boolean;
};

/**
 * 获取多个对象中的某个属性
 * - 将会对比多个对象中的属性
 * - 若属性值都相同，则返回对应的值
 * - 若属性值都为 `undefined`，则返回 `null`
 * - 若存在不同的属性值，则返回 `null`
 * - 若对象列表为空，则返回 `null`
 */
declare function getObjectsAttr(options: Options): string | number | boolean | null;

export default getObjectsAttr;
