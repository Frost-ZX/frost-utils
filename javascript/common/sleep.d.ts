/**
 * @description 等待一段时间
 * @param time    时长（毫秒）
 * @param returns 自定义返回值
 */
declare function sleep<T>(time?: number, returns?: T): Promise<T>;

export default sleep;
