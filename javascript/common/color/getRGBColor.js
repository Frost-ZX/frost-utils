/** @type { import('./getRGBColor')['default'] } */
function getRGBColor(alpha = false) {

  let code = 0;
  let codes = [];
  let joined = '';
  let length = (alpha === true ? 4 : 3);

  for (let i = 0; i < length; i++) {
    code = Math.floor(Math.random() * 256);
    codes.push(code);
  }

  if (typeof alpha === 'number') {
    codes.push(alpha);
  }

  joined = codes.join(', ');

  return (codes.length === 3 ? `rgb(${joined})` : `rgba(${joined})`);

}

export default getRGBColor;
