/** @type { import('./getHEXColor')['default'] } */
function getHEXColor() {
  let list = [
    '0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
  ];
  let chars = ['#'];
  let index = 0;
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * 16);
    chars.push(list[index]);
  }
  return chars.join('');
}

export default getHEXColor;
