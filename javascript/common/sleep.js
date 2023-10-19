/**
 * @description 等待一段时间
 * @template Returns
 * @param   {number}  time    时长（毫秒）
 * @param   {Returns} returns 返回值
 * @returns {Promise<Returns>}
 */
function sleep(time = 1000, returns = true) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(returns), time);
  });
}

export default sleep;
