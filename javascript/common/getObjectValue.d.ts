/**
 * @description 通过路径获取对象属性值
 * @param obj  操作的对象
 * @param path 属性访问路径
 * @param sep  路径分隔符，默认为 `.`
 */
declare function getObjectValue(obj: object, path?: string, sep?: string): any;

export default getObjectValue;
