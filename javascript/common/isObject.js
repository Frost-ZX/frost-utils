/** @type { import('./isObject')['default'] } */
function isObject(value) {
  return (Object.prototype.toString.call(value) === '[object Object]');
}

export default isObject;
