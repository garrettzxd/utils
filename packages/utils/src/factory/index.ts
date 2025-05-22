/**
 * @description 更新vuex工厂函数
 * @category factory
 * @param {string} key 要更新state目标key
 * @param {boolean} isPersistence 是否本地持久化该值
 * @returns 更新state函数
 *
 * @example
 * ```
 * updateStateFactory('step');
 * ```
 * */
export const updateStateFactory = (key: string, isPersistence = false) =>
  // eslint-disable-next-line func-names
  function (state: Record<string, unknown>, val: unknown): void {
    Object.assign(state, { [key]: val });
    if (isPersistence) window.localStorage.setItem(key, JSON.stringify(val));
  };
