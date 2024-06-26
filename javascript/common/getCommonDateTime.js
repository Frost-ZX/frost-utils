const prefix = '[getCommonDateTime]';

/** @type { import('./getCommonDateTime')['default'] } */
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
    console.error(prefix, '参数 time 错误');
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
      console.error(prefix, '参数 type 错误');
      return ``;
  }

}

export default getCommonDateTime;
