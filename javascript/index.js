/**
 * @description 使用 `localeCompare` 对比字符串
 * @param {string} str1
 * @param {string} str2
 */
export function compareString(str1 = '', str2 = '') {
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

/**
 * @description 获取多个对象中的某个属性
 * - 将会对比多个对象中的属性
 * - 若属性值都相同，则返回对应的值
 * - 若属性值都为 `undefined`，则返回 `null`
 * - 若存在不同的属性值，则返回 `null`
 * - 若对象列表为空，则返回 `null`
 * @param {Options} options
 */
export function getObjectsAttr(options = {}) {

  /** @typedef {Record<string, boolean|number|string>[]} Objects */

  /**
   * @typedef  Options
   * @property {Objects} objects   简单对象列表
   * @property {string}  propName  需要获取的属性名
   * @property {boolean} skipUndef 忽略 `undefined`
   */

  try {

    let { objects = [], propName = '', skipUndef = false } = options;

    if (!Array.isArray(objects) || objects.length === 0) {
      return null;
    }

    /** @type {objects[number][string]} */
    let value0 = undefined;

    /** @type {objects[number][string]} */
    let value1 = undefined;

    for (let i = 0; i < objects.length; i++) {
      value1 = objects[i][propName];
      // 跳过 undefined
      if (skipUndef && typeof value1 === 'undefined') {
        continue;
      }
      // 更新初始值
      if (typeof value0 === 'undefined') {
        value0 = value1;
      }
      // 存在不相同的值
      if (value1 !== value0) {
        return null;
      }
    }

    return (typeof value0 === 'undefined' ? null : value0);

  } catch (error) {
    console.error('获取对象属性失败：');
    console.error(error);
    return null;
  }

}

/** 检测参数是否为对象 */
export function isObject(value) {
  return (Object.prototype.toString.call(value) === '[object Object]');
}

/**
 * @description 等待一段时间
 * @template Returns
 * @param   {number}  time    时长（毫秒）
 * @param   {Returns} returns 返回值
 * @returns {Promise<Returns>}
 */
export function sleep(time = 1000, returns = true) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(returns), time);
  });
}

/**
 * @description 将 IP 地址转换为广播地址
 * @param {string} address 需要处理的 IP 地址
 * @param {string} netmask 对应的子网掩码
 */
export function toBroadcastAddress(address = '', netmask = '') {

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
    console.error('转换失败：参数数据类型错误');
    return '';
  }

  if (!regExpFull.test(address) || !regExpFull.test(netmask)) {
    console.error('转换失败：参数格式错误');
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
