/**
 * 把小数转为带两位小数点的百分数
 * @param v 小数
 * @returns 百分数
 */
const formatPercent: (v: number | string) => string = (v) => {
  let value = typeof v === 'number' ? v : parseFloat(v); // 转成 number 类型
  let result = (value * 100).toFixed(2) + '%';
  return result;
};

export default formatPercent;