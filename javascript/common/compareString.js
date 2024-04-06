const prefix = '[compareString]';

/** @type { import('./compareString')['default'] } */
function compareString(str1 = '', str2 = '') {
  if (typeof str1 === 'string' && typeof str2 === 'string') {
    return str1.localeCompare(str2, ['co'], {
      caseFirst: 'upper',
      numeric: true,
    });
  } else {
    console.error(prefix, '参数为空或不是字符串');
    return 0;
  }
}

export default compareString;
