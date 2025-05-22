/**
 * @description 企业属性枚举
 * */
export const enum CompanyAttributes {
  /** 有限公司 */
  LIMITED_COMPANY = 'LIMITED_COMPANY',
  /** 个体经营 */
  SELF_EMPLOYED = 'SELF_EMPLOYED',
  /** 股份公司 */
  JOINT_STOCK = 'JOINT_STOCK',
  /** 国有企业 */
  STATE_OWNED = 'STATE_OWNED',
  /** 合伙经营 */
  PARTNERSHIP = 'PARTNERSHIP',
  /** 上市企业 */
  LISTED_ENTERPRISES = 'LISTED_ENTERPRISES',
  /** 其他 */
  OTHER = 'OTHER',
}

/**
 * @description 企业注册期限
 * */
export const enum CompanyRegisterTerm {
  /** 非长期 */
  NON_LONG_TERM = 0,
  /** 长期 */
  LONG_TERM = 1,
}
