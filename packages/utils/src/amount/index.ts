import { Currency, CURRENCY_SYNTAX } from '@b2b/constants';

/**
 * @description 去除字符串千分位
 * @category amount
 * @param {string} val 要转换的字符串
 * @return {number}
 *
 * @example
 * removeThousandths('1,111.22')
 * // 1111.22
 * */
export const removeThousandths = (val: string | number): number => {
  return parseFloat(`${val}`.replace(/,/g, ''));
};

/**
 * @description 设置千分位
 * @category amount
 * @param {number,string} val 要格式化的值
 * @param {number} precision 精度，保留几位小数
 * @return {string}
 *
 * @example
 *
 * thousandthsFormat(1111.22, 2);
 * // 1,111.22
 * */
export const thousandthsFormat = (val: number | string, precision = 2): string => {
  const numberValue = Number(removeThousandths(val));
  if (Number.isNaN(numberValue)) {
    return '0.00';
  }

  const [integer, decimal] = numberValue.toFixed(precision).split('.');
  if (!integer) return '0.00';
  const a = integer.replace(/(\d)(?=(\d{3})+$)/g, ($1) => `${$1},`);
  return decimal ? `${a}.${decimal || ''}` : a;
};

/**
 * @description 获取币种精度
 * @category amount
 * @param {string} currency 币种
 * @return {number} 进度
 *
 * @example
 *
 * getCurrencyThousandths('CNY');
 * // 2
 * */
export const getCurrencyThousandths = (currency: Currency): number => {
  switch (currency) {
    case Currency.JPY:
    case Currency.IDR:
    case Currency.KRW:
    case Currency.NGN:
    case Currency.KES:
    case Currency.VND:
    case Currency.XAF:
    case Currency.XOF:
    case Currency.TZS:
    case Currency.RWF:
    case Currency.ZMW:
    case Currency.CDF:
    case Currency.UGX:
    case Currency.CLP:
    case Currency.PYG:
    case Currency.ISK:
    case Currency.MGA:
    case Currency.PKR:
    case Currency.LKR:
    case Currency.SYP:
    case Currency.YER:
      return 0;
    default:
      return 2;
  }
};

/**
 * @description 根据币种格式化金额
 * @category amount
 * @param {number,string} val 需要格式化的金额
 * @param {string} currency 币种
 * @return {string} 格式化之后的值
 * */
export const formatAmountByCurrency = (
  val: number | string,
  currency: Currency,
): string => thousandthsFormat(val, getCurrencyThousandths(currency));

/**
 * @description 根据币种格式化金额(带币种符号)
 * @category amount
 * @param {number,string} val 需要格式化的金额
 * @param {string} currency 币种
 * @return {string} 格式化之后的文案
 *
 * @example
 * ```
 * amountWithSymbol(1000, 'USD');
 * // $ 1,000
 * ```
 * */
export const amountWithSymbol = (val: number | string, currency: Currency): string =>
  `${CURRENCY_SYNTAX[currency]}${thousandthsFormat(
    val,
    getCurrencyThousandths(currency),
  )}`;

/**
 * @description 根据币种格式化金额带币种文案
 * @category amount
 * @param {number,string} val 需要格式化的金额
 * @param {string} currency 币种
 * @return {string} 格式化之后的文案
 *
 * @example
 * ```
 * amountTextWithCurrency(1111, 'CNY');
 * // 1,111.00 CNY
 * ```
 * */
export const amountTextWithCurrency = (
  val: number | string,
  currency: Currency,
): string => `${thousandthsFormat(val, getCurrencyThousandths(currency))} ${currency}`;

// 向右移位
function shiftRight(number: number, digit: number): number {
  const digitParse = parseInt(`${digit}`, 10);
  const value = number.toString().split('e');
  return +`${value[0]}e${value[1] ? +value[1] + digitParse : digitParse}`;
}
// 向左移位
function shiftLeft(number: number, digit: number): number {
  const digitParse = parseInt(`${digit}`, 10);
  const value = number.toString().split('e');
  return +`${value[0]}e${value[1] ? +value[1] - digitParse : -digitParse}`;
}

/**
 * @description 阿拉伯数字金额转中文金额大写
 * @param amount 阿拉伯金额
 * @return {string}
 *
 * @example
 * ```
 * digitUppercase(100)
 * // 壹佰元整
 * ```
 * */
export const digitUppercase = (amount: number): string => {
  const fraction = ['角', '分'];
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟'],
  ];
  const head = amount < 0 ? '(负)' : '';
  const amountAbs = Math.abs(amount);
  let s = '';
  for (let i = 0; i < fraction.length; i += 1) {
    const shiftRightAmount = shiftRight(amountAbs, 1 + i);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    s += (digit[Math.floor(shiftRightAmount) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  let amountFloor = Math.floor(amount);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  for (let i = 0; i < unit[0].length && amountFloor > 0; i += 1) {
    let p = '';
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    for (let j = 0; j < unit[1].length && amountFloor > 0; j += 1) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      p = digit[amountFloor % 10] + unit[1][j] + p;
      amountFloor = Math.floor(shiftLeft(amountFloor, 1));
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return (
    head +
    s
      .replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整')
  );
};
