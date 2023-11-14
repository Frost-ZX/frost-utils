/** @type { import('./sleep')['default'] } */
function sleep(time = 1000, returns = true) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(returns), time);
  });
}

export default sleep;
