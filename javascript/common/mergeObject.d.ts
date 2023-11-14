/**
 * @description 合并对象属性
 * - 将会修改目标对象，添加来自来源对象中的属性
 * - 若来源属性为数组，将会直接替换
 * - 若目标属性为对象，但来源属性为 `null`，则跳过
 * @param obj 目标对象
 * @param src 来源对象
 */
declare function mergeObject<T1, T2>(obj: T1, src: T2): T1 & T2;

export default mergeObject;
