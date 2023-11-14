/** 使用 `Object.prototype.toString.call` 检测参数是否为 `Array` */
declare function isArray(value: any): value is any[];

export default isArray;
