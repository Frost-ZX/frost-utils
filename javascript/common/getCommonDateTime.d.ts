/**
 * @description 获取 `yyyy-MM-dd HH:mm:ss` 格式的日期时间字符串
 * @param time 自定义时间
 * - 若为时间戳数值或日期时间字符串，则解析为对应的日期时间
 * - 若字符串只包含日期，将会根据当前时区设置一个时间
 * @param type 返回结果类型
 */
declare function getCommonDateTime(time?: string | number | null, type?: 'all' | 'date' | 'time'): string;

export default getCommonDateTime;
