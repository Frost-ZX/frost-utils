/**
 * @description 获取 `yyyy-MM-dd HH:mm:ss` 格式的日期时间字符串
 * @param {string|null|number}  [time] 自定义时间
 * - 若为时间戳数值或日期时间字符串，则解析为对应的日期时间
 * - 若字符串只包含日期，将会根据当前时区设置一个时间
 * @param {'all'|'date'|'time'} [type]
 */
function getCommonDateTime(time = null, type = 'all') {

  let date = (time === null ? new Date() : new Date(time));
  let t = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
  };

  if (isNaN(t.y)) {
    console.error('获取失败：参数格式错误');
    return '';
  }

  for (let k in t) {
    t[k] = String(t[k]).padStart(2, '0');
  }

  switch (type) {
    case 'all':
      return `${t.y}-${t.m}-${t.d} ${t.h}:${t.i}:${t.s}`;
    case 'date':
      return `${t.y}-${t.m}-${t.d}`
    case 'time':
      return `${t.h}:${t.i}:${t.s}`
    default:
      console.error('获取失败：类型错误');
      return ``;
  }

}

export default getCommonDateTime;
