import { Certificate } from './types';

/**
 * @description 证件中文集合
 * */
export const certificateMap = new Map([
  [Certificate.ID_CARD, '身份证'],
  [Certificate.PASSPORT, '护照'],
  [Certificate.HK_ID_CARD, '香港永久居民身份证'],
]);
