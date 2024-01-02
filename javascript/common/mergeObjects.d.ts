declare type Returns<T> = {
  /** 值不相同的属性，不包含跳过的属性 */
  diffKeys: string[];
  /** 处理时发生的异常 */
  error: Error | null;
  /** 处理结果 */
  result: T | null;
};

/**
 * @description 对比多个对象的数据，合并为一个对象
 * - 注意：不支持多层级的对象。
 * - 对于值相同的属性，其值不变。
 * - 对于值不相同的属性，其值被设为 `null`。
 * - 对于其他对象中不存在的属性，其值被设为 `null`。
 * @param objects  需要对比的对象列表
 * @param skipKeys 跳过的属性（直接设为 `null`）
 */
declare function mergeObjects<T>(objects: T[], skipKeys?: string[]): Returns<T>;

export type { Returns };

export default mergeObjects;
