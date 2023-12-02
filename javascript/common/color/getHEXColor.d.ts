/**
 * @description 获取随机的十六进制颜色值
 * - 返回值默认格式：`#RRGGBB`
 * - 若包含 Alpha 通道，返回值格式为：`#RRGGBBAA`
 * @param alpha 是否包含 Alpha 通道，若为字符串则使用指定值
 */
declare function getHEXColor(alpha: boolean | string): string;

export default getHEXColor;
