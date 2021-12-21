/**
 * 把数字或者字符串数字 转成  千分位的, 比如 12345 转成 12,345
 * @param v 数
 * @returns 千分位的数
 */
 export const formatNumber: (v: number | string) => string = (v) => {
  let regex = /(?!^)(?=(\d{3})+(\.|$))/g;
  let result = `${v}`.replace(regex, ',');
  return result;
};

export default formatNumber;