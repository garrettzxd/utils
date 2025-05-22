/**
 * @description 是否是小程序webview环境
 * */
export const isMiniProgramEnv = (): boolean => {
  if (!window?.navigator) return false;

  return (
    navigator.userAgent.toLowerCase().includes('miniprogram') ||
    // eslint-disable-next-line no-underscore-dangle
    (window as any)?.__wxjs_environment === 'miniprogram'
  );
};

/**
 * @description 是否是微信自带浏览器环境
 * */
export const isWechatEnv = (): boolean => {
  if (!window?.navigator) return false;
  return window.navigator.userAgent.toLowerCase().includes('micromessenger');
};
