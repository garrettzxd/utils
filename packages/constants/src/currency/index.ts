/**
 * @description 币种
 * */
export enum Currency {
  /** 人民币 */
  CNY = 'CNY',
  /** 美元 */
  USD = 'USD',
  /** 欧元 */
  EUR = 'EUR',
  /** 英镑 */
  GBP = 'GBP',
  /** 港币 */
  HKD = 'HKD',
  /** 离岸人民币 */
  CNH = 'CNH',
  /** 印尼盾 */
  IDR = 'IDR',
  /** 加元 */
  CAD = 'CAD',
  /** 新加坡元 */
  SGD = 'SGD',
  /** 日元 */
  JPY = 'JPY',
  /** 澳元 */
  AUD = 'AUD',
  /** 波兰兹罗提 */
  PLN = 'PLN',
  /** 韩元 */
  KRW = 'KRW',
  /** 瑞士法郎 */
  CHF = 'CHF',
  /** 新西兰元 */
  NZD = 'NZD',
  /** 阿联酋迪拉姆 */
  AED = 'AED',
  /** 泰铢 */
  THB = 'THB',
  /** 越南盾 */
  VND = 'VND',
  /** 沙特里亚尔 */
  SAR = 'SAR',
  /** 比索 */
  PHP = 'PHP',
  /** 台币 */
  TWD = 'TWD',
  /** 林吉特 */
  MYR = 'MYR',
  /** 捷克克朗 */
  CZK = 'CZK',
  /** 丹麦克朗 */
  DKK = 'DKK',
  /** 匈牙利福林 */
  HUF = 'HUF',
  /** 以色列新锡克尔 */
  ILS = 'ILS',
  /** 墨西哥元 */
  MXN = 'MXN',
  /** 挪威克朗 */
  NOK = 'NOK',
  /** 克罗地亚库纳 */
  HRK = 'HRK',
  /** 瑞典克朗 */
  SEK = 'SEK',
  /** 土耳其里拉 */
  TRY = 'TRY',
  /** 罗马尼亚列伊 */
  RON = 'RON',
  /** 南非兰特 */
  ZAR = 'ZAR',
  /** 尼日利亚奈拉 */
  NGN = 'NGN',
  /** 肯尼亚先令 */
  KES = 'KES',
  /** 中非金融合作法郎 */
  XAF = 'XAF',
  /** 坦桑尼亚先令 */
  TZS = 'TZS',
  /** 西非法郎 */
  XOF = 'XOF',
  /** 卢旺达法郎 */
  RWF = 'RWF',
  /** 赞比亚克瓦查 */
  ZMW = 'ZMW',
  /** 刚果法郎 */
  CDF = 'CDF',
  /** 乌干达先令 */
  UGX = 'UGX',
  /** 阿根廷比索 */
  ARS = 'ARS',
  /** 巴西雷亚尔 */
  BRL = 'BRL',
  /** 智利比索 */
  CLP = 'CLP',
  /** 哥伦比亚比索 */
  COP = 'COP',
  /** 埃及镑 */
  EGP = 'EGP',
  /** 印度卢比 */
  INR = 'INR',
  /** 俄罗斯卢布 */
  RUB = 'RUB',
  /** 乌克兰格里夫纳 */
  UAH = 'UAH',
  /** 阿尔及利亚第纳尔 */
  DZD = 'DZD',
  /** 玻利维亚诺 */
  BOB = 'BOB',
  /** 哥斯达黎加科朗 */
  CRC = 'CRC',
  /** 多米尼加比索 */
  DOP = 'DOP',
  /** 埃塞俄比亚比尔 */
  ETB = 'ETB',
  /** ���济元 */
  FJD = 'FJD',
  /** 加纳塞地 */
  GHS = 'GHS',
  /** 危地马拉格查尔 */
  GTQ = 'GTQ',
  /** 洪都拉斯伦皮拉 */
  HNL = 'HNL',
  /** 冰岛克朗 */
  ISK = 'ISK',
  /** 牙买加元 */
  JMD = 'JMD',
  /** 约旦第纳尔 */
  JOD = 'JOD',
  /** 哈萨克斯坦坚戈 */
  KZT = 'KZT',
  /** 黎巴嫩镑 */
  LBP = 'LBP',
  /** 马达加斯加阿里亚里 */
  MGA = 'MGA',
  /** 尼泊尔卢比 */
  NPR = 'NPR',
  /** 巴基斯坦卢比 */
  PKR = 'PKR',
  /** 巴拉圭瓜拉尼 */
  PYG = 'PYG',
  /** 斯里兰卡卢比 */
  LKR = 'LKR',
  /** 苏丹镑 */
  SDG = 'SDG',
  /** 叙利亚镑 */
  SYP = 'SYP',
  /** 乌拉圭比索 */
  UYU = 'UYU',
  /** 委内瑞拉玻利瓦尔 */
  VES = 'VES',
  /** 也门里亚尔 */
  YER = 'YER',
}
/**
 * @description 币种中文名映射
 * */
export const CURRENCY_CHINESE_CHARACTER = {
  [Currency.CNY]: '人民币',
  [Currency.USD]: '美元',
  [Currency.EUR]: '欧元',
  [Currency.GBP]: '英镑',
  [Currency.HKD]: '港币',
  [Currency.CNH]: '离岸人民币',
  [Currency.IDR]: '印尼盾',
  [Currency.CAD]: '加元',
  [Currency.SGD]: '新加坡元',
  [Currency.JPY]: '日元',
  [Currency.AUD]: '澳元',
  [Currency.PLN]: '波兰兹罗提',
  [Currency.KRW]: '韩元',
  [Currency.CHF]: '瑞士法郎',
  [Currency.NZD]: '新西兰元',
  [Currency.AED]: '阿联酋迪拉姆',
  [Currency.THB]: '泰铢',
  [Currency.VND]: '越南盾',
  [Currency.SAR]: '沙特里亚尔',
  [Currency.PHP]: '比索',
  [Currency.TWD]: '台币',
  [Currency.MYR]: '林吉特',
  [Currency.CZK]: '捷克克朗',
  [Currency.DKK]: '丹麦克朗',
  [Currency.HUF]: '匈牙利福林',
  [Currency.ILS]: '以色列新锡克尔',
  [Currency.MXN]: '墨西哥元',
  [Currency.NOK]: '挪威克朗',
  [Currency.HRK]: '克罗地亚库纳',
  [Currency.SEK]: '瑞典克朗',
  [Currency.TRY]: '土耳其里拉',
  [Currency.RON]: '罗马尼亚列伊',
  [Currency.ZAR]: '南非兰特',
  [Currency.NGN]: '尼日利亚奈拉',
  [Currency.KES]: '肯尼亚先令',
  [Currency.XAF]: '中非金融合作法郎',
  [Currency.TZS]: '坦桑尼亚先令',
  [Currency.XOF]: '西非法郎',
  [Currency.RWF]: '卢旺达法郎',
  [Currency.ZMW]: '赞比亚克瓦查',
  [Currency.CDF]: '刚果法郎',
  [Currency.UGX]: '乌干达先令',
  [Currency.ARS]: '阿根廷比索',
  [Currency.BRL]: '巴西雷亚尔',
  [Currency.CLP]: '智利比索',
  [Currency.COP]: '哥伦比亚比索',
  [Currency.EGP]: '埃及镑',
  [Currency.INR]: '印度卢比',
  [Currency.RUB]: '俄罗斯卢布',
  [Currency.UAH]: '乌克兰格里夫纳',
  [Currency.DZD]: '阿尔及利亚第纳尔',
  [Currency.BOB]: '玻利维亚诺',
  [Currency.CRC]: '哥斯达黎加科朗',
  [Currency.DOP]: '多米尼���比索',
  [Currency.ETB]: '埃塞俄比亚比尔',
  [Currency.FJD]: '斐济元',
  [Currency.GHS]: '加纳塞地',
  [Currency.GTQ]: '危地马拉格查尔',
  [Currency.HNL]: '洪都拉斯伦皮拉',
  [Currency.ISK]: '冰岛克朗',
  [Currency.JMD]: '牙买加元',
  [Currency.JOD]: '约旦第纳尔',
  [Currency.KZT]: '哈萨克斯坦坚戈',
  [Currency.LBP]: '黎巴嫩镑',
  [Currency.MGA]: '马达加斯加阿里亚里',
  [Currency.NPR]: '尼泊尔卢比',
  [Currency.PKR]: '巴基斯坦卢比',
  [Currency.PYG]: '巴拉圭瓜拉尼',
  [Currency.LKR]: '斯里兰卡卢比',
  [Currency.SDG]: '苏丹镑',
  [Currency.SYP]: '叙利亚镑',
  [Currency.UYU]: '乌拉圭比索',
  [Currency.VES]: '委内瑞拉玻利瓦尔',
  [Currency.YER]: '也门里亚尔',
};

/**
 * 币种符号
 */
export const CURRENCY_SYNTAX = {
  /** 人民币 */
  [Currency.CNY]: '￥',
  /** 美元 */
  [Currency.USD]: '$',
  /** 欧元 */
  [Currency.EUR]: '€',
  /** 英镑 */
  [Currency.GBP]: '£',
  /** 港币 */
  [Currency.HKD]: 'HK$',
  /** 离岸人民币 */
  [Currency.CNH]: '￥',
  /** 印尼盾 */
  [Currency.IDR]: 'Rp',
  /** 加元 */
  [Currency.CAD]: 'C$',
  /** 新加坡元 */
  [Currency.SGD]: '$S',
  /** 日元 */
  [Currency.JPY]: 'J¥',
  /** 澳元 */
  [Currency.AUD]: 'A$',
  /** 波兰兹罗提 */
  [Currency.PLN]: 'zł',
  /** 韩元 */
  [Currency.KRW]: '₩',
  /** 瑞士法郎 */
  [Currency.CHF]: 'SFr',
  /** 新西兰元 */
  [Currency.NZD]: '＄NZ',
  /** 阿联酋迪拉姆 */
  [Currency.AED]: 'د.إ',
  /** 泰铢 */
  [Currency.THB]: '฿',
  /** 越南盾 */
  [Currency.VND]: '₫',
  /** 沙特里亚尔 */
  [Currency.SAR]: '﷼',
  /** 比索 */
  [Currency.PHP]: '₱',
  /** 台币 */
  [Currency.TWD]: 'NT$',
  /** 林吉特 */
  [Currency.MYR]: 'RM',
  /** 捷克克朗 */
  [Currency.CZK]: 'Kč',
  /** 丹麦克朗 */
  [Currency.DKK]: 'D.Kr',
  /** 匈牙利福林 */
  [Currency.HUF]: 'Ft',
  /** 以色列新锡克尔 */
  [Currency.ILS]: '₪',
  /** 墨西哥元 */
  [Currency.MXN]: 'Mex.＄',
  /** 挪威克朗 */
  [Currency.NOK]: 'N.Kr.',
  /** 克罗地亚库纳 */
  [Currency.HRK]: 'kn',
  /** 瑞典克朗 */
  [Currency.SEK]: 'S.Kr',
  /** 土耳其里拉 */
  [Currency.TRY]: '₺',
  /** 罗马尼亚列伊 */
  [Currency.RON]: 'lei',
  /** 南非兰特 */
  [Currency.ZAR]: 'R',
  /** 尼日利亚奈拉 */
  [Currency.NGN]: '₦',
  /** 肯尼亚先令 */
  [Currency.KES]: 'KSh',
  /** 中非金融合作法郎 */
  [Currency.XAF]: 'FCFA',
  /** 坦桑尼亚先令 */
  [Currency.TZS]: 'TSh',
  /** 西非法郎 */
  [Currency.XOF]: 'CFA',
  /** 卢旺达法郎 */
  [Currency.RWF]: 'FRw',
  /** ���比亚克瓦查 */
  [Currency.ZMW]: 'ZK',
  /** 刚果法郎 */
  [Currency.CDF]: 'FC',
  /** 乌干达先令 */
  [Currency.UGX]: 'USh',
  /** 阿根廷比索 */
  [Currency.ARS]: '$',
  /** 巴西雷亚尔 */
  [Currency.BRL]: 'R$',
  /** 智利比索 */
  [Currency.CLP]: '$',
  /** 哥伦比亚比索 */
  [Currency.COP]: '$',
  /** 埃及镑 */
  [Currency.EGP]: '£',
  /** 印度卢比 */
  [Currency.INR]: '₹',
  /** 俄罗斯卢布 */
  [Currency.RUB]: '₽',
  /** 乌克兰格里夫纳 */
  [Currency.UAH]: '₴',
  /** 阿尔及利亚第纳尔 */
  [Currency.DZD]: 'دج',
  /** 玻利维亚诺 */
  [Currency.BOB]: 'Bs.',
  /** 哥斯达黎加科朗 */
  [Currency.CRC]: '₡',
  /** 多米尼加比索 */
  [Currency.DOP]: 'RD$',
  /** 埃塞俄比亚比尔 */
  [Currency.ETB]: 'Br',
  /** 斐济元 */
  [Currency.FJD]: '$',
  /** 加纳塞地 */
  [Currency.GHS]: '₵',
  /** 危地马拉格查尔 */
  [Currency.GTQ]: 'Q',
  /** 洪都拉斯伦皮拉 */
  [Currency.HNL]: 'L',
  /** 冰岛克朗 */
  [Currency.ISK]: 'kr',
  /** 牙买加元 */
  [Currency.JMD]: 'J$',
  /** 约旦第纳尔 */
  [Currency.JOD]: 'د.ا',
  /** 哈萨克斯坦坚戈 */
  [Currency.KZT]: '₸',
  /** 黎巴嫩镑 */
  [Currency.LBP]: 'ل.ل',
  /** 马达加斯加阿里亚里 */
  [Currency.MGA]: 'Ar',
  /** 尼泊尔卢比 */
  [Currency.NPR]: '₨',
  /** 巴基斯坦卢比 */
  [Currency.PKR]: '₨',
  /** 巴拉圭瓜拉尼 */
  [Currency.PYG]: '₲',
  /** 斯里兰卡卢比 */
  [Currency.LKR]: '₨',
  /** 苏丹镑 */
  [Currency.SDG]: 'ج.س.',
  /** 叙利亚镑 */
  [Currency.SYP]: '£',
  /** 乌拉圭比索 */
  [Currency.UYU]: '$U',
  /** 委内瑞拉玻利瓦尔 */
  [Currency.VES]: 'Bs.',
  /** 也门里亚尔 */
  [Currency.YER]: '﷼',
};
