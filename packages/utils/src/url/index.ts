/**
 * @description 获取URL参数，以对象形式输出
 * @category url
 * @param {string} url 需要解析的URL
 * @return {Object} 键值对
 *
 * @example
 * ```
 * getParameters('http://google.com?name=garrett');
 * // {name: garrett}
 * ```
 * */
export const getParameters = (url = ''): Record<string, string> => {
  const parameter = url.split('?')[1] || '';
  const urlParse = decodeURI(parameter)
    .replace(/"/g, '\\"')
    .replace(/&/g, '","')
    .replace(/=/g, '":"');

  return JSON.parse(`{${urlParse}}`);
};

/**
 * @description URL拼接
 * @category url
 * @param {string} url 要拼接对URL
 * @param {Object} parameter url参数
 * @return {string}
 *
 * @example
 * ```
 * splicingUrl('http://google.com', { name: 'garrett', age: 18 });
 * // http://google.com?name=garrett&age=18
 *
 * ```
 * */
export const urlSplicing = (url: string, parameter: Record<string, unknown>): string => {
  const parameters = Object.entries(parameter).map(([key, value]) => `${key}=${value}`);
  return `${url}?${parameters.join('&')}`;
};
