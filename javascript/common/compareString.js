/** @type { import('./compareString')['default'] } */
function compareString(str1 = '', str2 = '') {
  if (typeof str1 === 'string' && typeof str2 === 'string') {
    return str1.localeCompare(str2, ['co'], {
      caseFirst: 'upper',
      numeric: true,
    });
  } else {
    console.error('对比失败：参数不是字符串');
    return 0;
  }
}

export default compareString;
