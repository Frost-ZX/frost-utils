/** @type { import('./defaultValue')['default'] } */
function defaultValue(value, defaults) {
  return ((typeof value === 'undefined' || value === null) ? defaults : value);
}

export default defaultValue;
