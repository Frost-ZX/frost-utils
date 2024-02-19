/**
 * @description 传入值为 `undefined` 或 `null` 时返回默认值
 * @param value    传入值，默认为 `undefined`
 * @param defaults 默认值，默认为 `undefined`
 */
declare function defaultValue<TValue>(value?: any, defaults?: TValue): TValue;

export default defaultValue;
