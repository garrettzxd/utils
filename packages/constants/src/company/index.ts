import { CompanyAttributes, CompanyRegisterTerm } from './types';

/**
 * @description 企业属性中文映射集合
 * */
export const companyAttributesMap = new Map([
  [CompanyAttributes.LIMITED_COMPANY, '有限公司'],
  [CompanyAttributes.SELF_EMPLOYED, '个体经营'],
  [CompanyAttributes.JOINT_STOCK, '股份公司'],
  [CompanyAttributes.STATE_OWNED, '国有企业'],
  [CompanyAttributes.PARTNERSHIP, '合伙经营'],
  [CompanyAttributes.LISTED_ENTERPRISES, '上市企业'],
  [CompanyAttributes.OTHER, '其他'],
]);

/**
 * @description 企业属性对象映射
 *
 * @example:
 * [{ name: '有限公司', value: 'LIMITED_COMPANY' }]
 * */
export const companyAttributesObj = Array.from(companyAttributesMap.entries()).map(
  ([key, value]) => ({ name: value, value: key }),
);

/**
 * @description 企业注册有效期中文映射集合
 * */
export const companyTermMap = new Map([
  [CompanyRegisterTerm.NON_LONG_TERM, '非长期'],
  [CompanyRegisterTerm.LONG_TERM, '长期'],
]);

/**
 * @description 企业注册有效期中文映射
 *
 * @example
 * [{name: '长期', value: 1'}]
 * */
export const companyTermObj = Array.from(companyTermMap.entries()).map(
  ([key, value]) => ({ name: value, value: key }),
);
