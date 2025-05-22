import { Currency } from '@b2b/constants';

/**
 * @description 判断是否是相同币种,CNH & CNY算相同币种
 * @param {string} sourceCurrency 源币种
 * @param {string} targetCurrency 目的币种
 * @return {boolean}
 *
 * @example
 * ```
 * isSameCurrency('USD', 'EUR');
 * // false
 *
 * isSameCurrency('USD', 'USD');
 * // true
 *
 * isSameCurrency('CNY', 'CNH');
 * // true
 *
 * isSameCurrency('CNH', 'CNY');
 * // true
 * ```
 * */
export const isSameCurrency = (
  sourceCurrency: string,
  targetCurrency: string,
): boolean => {
  if (sourceCurrency === targetCurrency) return true;

  return (
    (sourceCurrency === Currency.CNH && targetCurrency === Currency.CNY) ||
    (sourceCurrency === Currency.CNY && targetCurrency === Currency.CNH)
  );
};
