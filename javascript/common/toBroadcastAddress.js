const prefix = '[toBroadcastAddress]';

/** @type { import('./toBroadcastAddress')['default'] } */
function toBroadcastAddress(address = '', netmask = '') {

  let regExpBase = '([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])';
  let regExpFull = new RegExp(`^${regExpBase}\\.${regExpBase}\\.${regExpBase}\\.${regExpBase}$`);

  /**
    * @description 二进制转十进制整数
    * @param {string} binStr 大于或等于 0 的二进制值
    */
  let binaryToDecimal = (binStr) => {
    let result = 0;
    // 截取 1 及其后面的值，然后从后往前取
    let index = binStr.indexOf('1');
    let newStr = binStr.slice(index).split('').reverse('').join('');
    for (let i = 0; i < newStr.length; i++) {
      result += newStr[i] * Math.pow(2, i);
    }
    return result;
  };

  /**
   * @description 十进制转二进制
   * @param {number} number 大于或等于 0 的整数
   * @param {number} length 补全结果位数
   */
  let decimalToBinary = (number, length = null) => {
    let result = '';
    while (number >= 1) {
      result = number % 2 + result;
      number = Math.floor(number / 2);
    }
    if (typeof length === 'number') {
      return (result || '0').padStart(length, '0');
    } else {
      return (result || '0');
    }
  };

  if (typeof address !== 'string' || typeof netmask !== 'string') {
    console.error(prefix, '转换失败：参数数据类型错误');
    return '';
  }

  if (!regExpFull.test(address) || !regExpFull.test(netmask)) {
    console.error(prefix, '转换失败：参数格式错误');
    return '';
  }

  /** 二进制 IP 地址 */
  let addressBinary = address.split('.').map((v) => {
    return decimalToBinary(Number(v), 8);
  }).join('.');

  /** 二进制子网掩码 */
  let netmaskBinary = netmask.split('.').map((v) => {
    return decimalToBinary(Number(v), 8);
  }).join('.');

  /** 广播地址字符数组 */
  let bcastAddressArr = new Array(addressBinary.length);

  /** 广播地址字符串 */
  let bcastAddress = '';

  // 转换为二进制广播地址
  // 使用与运算计算网络地址，将表示 IP 地址主机部分的值设为 1
  for (let i = 0; i < addressBinary.length; i++) {
    let a = addressBinary[i];
    let b = netmaskBinary[i];
    switch (b) {
      // 分隔符，不处理
      case '.':
        bcastAddressArr[i] = '.';
        break;
      // 将网络地址表示 IP 地址主机部分的值设为 1
      case '0':
        bcastAddressArr[i] = '1';
        break;
      // 二进制 IP 地址和二进制子网掩码进行与运算
      default:
        bcastAddressArr[i] = String(Number(a) && Number(b));
        break;
    }
  }

  // 转换字符数组为字符串
  bcastAddress = bcastAddressArr.join('');

  // 转换为十进制 IP 地址
  return bcastAddress.split('.').map((v) => {
    return binaryToDecimal(v);
  }).join('.');

}

export default toBroadcastAddress;
