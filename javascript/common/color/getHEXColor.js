/** @type { import('./getHEXColor')['default'] } */
function getHEXColor(alpha = false) {

  let chars = ['#'];
  let index = 0;
  let length = (alpha === true ? 8 : 6);
  let list = [
    '0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
  ];

  for (let i = 0; i < length; i++) {
    index = Math.floor(Math.random() * 16);
    chars.push(list[index]);
  }

  if (typeof alpha === 'string') {
    chars.push(alpha);
  }

  return chars.join('');

}

export default getHEXColor;
