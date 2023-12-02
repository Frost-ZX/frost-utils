/**
 * @description 获取随机的 RGB 颜色值
 * - 返回值默认格式：`rgb(Red, Green, Blue)`
 * - 若包含 Alpha 通道，返回值格式为：`rgb(Red, Green, Blue, Alpha)`
 * @param alpha 是否包含 Alpha 通道，若为数字则使用指定值
 */
declare function getRGBColor(alpha?: boolean | number): string;

export default getRGBColor;
