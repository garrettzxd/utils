/**
 * @description 判断数据类型
 * @category type
 * @param {any} val
 * @return string
 * */
export const typeOfData = (val: unknown): string => {
  return Object.prototype.toString.call(val).toLowerCase();
};

/**
 * @description 类型判断工厂函数
 * @category type
 * @param val 需要判断的数据
 * @param {string} type 要判断的数据类型
 * @return {boolean}
 * */
export const typeFactory = (val: unknown, type: string): boolean =>
  typeOfData(val) === `[object ${type}]`;

/**
 * @description 是否是数字
 * @category type
 * @param {any} val
 * @return boolean
 * */
export const isNumber = (val: unknown): boolean => typeFactory(val, 'number');

/**
 * @description 是否是数字
 * @category type
 * @param {any} val
 * @return boolean
 * */
export const isBoolean = (val: unknown): boolean => typeFactory(val, 'boolean');

/**
 * @description 是否是字符串
 * @category type
 * @param {any} val
 * @return boolean
 * */
export const isString = (val: unknown): boolean => typeFactory(val, 'string');

/**
 * @description 是否是undefined
 * @category type
 * @param {any} val
 * @return boolean
 * */
export const isUndefined = (val: unknown): boolean => typeFactory(val, 'undefined');

/**
 * @description 是否是数组
 * @category type
 * @param {any} val
 * @return boolean
 * */
export const isArray = (val: unknown): boolean => typeFactory(val, 'array');

/**
 * @description 是否是null
 * @category type
 * @param {any} val
 * @return boolean
 * */
export const isNull = (val: unknown): boolean => typeFactory(val, 'null');

/**
 * @description 是否是object，不包含null
 * @category type
 * @param {any} val
 * @return boolean
 * */
export const isObject = (val: unknown): boolean => typeFactory(val, 'object');

/**
 * @description 是否是function
 * @category type
 * @param {any} val
 * @return boolean
 * */
export const isFunction = (val: unknown): boolean => typeFactory(val, 'function');

/**
 * @description 是否是html对象
 * @category type
 * @param {any} val
 * @return boolean
 * */
export const isHtmlElement = (val: unknown): boolean => typeFactory(val, 'element');

/**
 * @description 是否为空，其中undefined、null、空字符串、空数组都会判断为空
 * @category type
 * @param val 需要判断的数据
 * @return boolean
 * */
export const isEmpty = (val: unknown | unknown[]): boolean => {
  if (val instanceof Array) {
    return val.length === 0;
  }
  return val === undefined || val === null || val === '';
};

/**
 * @description 是否是空对象
 * @category type
 * @param  {Object} val 需要判断的数据源
 * @return boolean
 * */
export const isEmptyObject = (
  val: Record<string | number | symbol, unknown>,
): boolean => {
  if (!isObject(val)) return false;

  return Object.keys(val).length === 0;
};
