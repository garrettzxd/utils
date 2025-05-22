import dayjs, { ConfigType } from 'dayjs';

/**
 * @description 获取时间戳
 * @category date
 * @param {string} time 时间
 *
 * @example
 * ```
 * getTimestamp()
 * // 1660013218562
 * ```
 * */
export const getTimestamp = (time?: string | number | Date): number =>
  new Date(time || new Date()).getTime();

/**
 * @description 时间格式化
 * @category date
 * @param {ConfigType} date 要格式化的时间
 * @param {string} formater 格式化模板
 * @return {string}
 *
 * @example
 * ```
 * dateFormat(new Date())
 * // 2022/08/08 12:00:00
 * ```
 * */
export const dateFormat = (date: ConfigType, formater = 'YYYY/MM/DD hh:mm:ss'): string =>
  dayjs(date).format(formater);

/**
 * @description 时间间隔
 * @category date
 * @param {number} date 时间间隔
 * @param {string} lang 语言
 * @return string
 *
 * @example
 * ```
 * dateSpan(10000)
 * //
 * ```
 * */
export const dateSpan = (date: number, lang = 'zh'): string => {
  const day = Math.floor(date / 86400000);
  const hours = Math.floor((date % 86400000) / 3600000);
  const minutes = Math.floor((date % 3600000) / 60000);
  const seconds = Math.floor((date % 60000) / 1000);
  const isZh = lang === 'zh';

  const setString = (val: number, suffix: string): string =>
    `${val || ''}${val ? suffix : ''}`;

  return `${setString(day, isZh ? '天' : 'd')}${setString(
    hours,
    isZh ? '小时' : 'h',
  )}${setString(minutes, isZh ? '分钟' : 'min')}${setString(seconds, isZh ? '秒' : 's')}`;
};
