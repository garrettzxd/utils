import {
  imageFileSuffix,
  videoFileSuffix,
  audioFileSuffix,
  documentFileSuffix,
  zipFileSuffix,
  base64FilePrefix,
} from '@b2b/constants';

/**
 * @description 复制文本函数(不支持非浏览器环境)
 * @category file
 * @param {string} text 元素选择器
 * @return {Promise} 复制成功的字符串
 * */
export const copyText = (text: string): Promise<void> => {
  if (!window) throw new Error('Not support non-browser environment！');
  return window.navigator.clipboard.writeText(text);
};

/**
 * @description 获取文件类型
 * @category file
 * @param {string} filePath 文件路径
 * @return {string} 文件类型
 * */
export const getFileTypeBySuffix = (filePath = ''): string => {
  if (!filePath) return '';
  return filePath.split('.').pop()?.toLowerCase() ?? '';
};

/**
 * @description 文件类型工厂
 * @category file
 * @param {string[]} fileTypes 文件类型
 * @return {((filePath?: string) => boolean)} 文件类型判断函数
 * */
export const fileTypeFactory = (
  fileTypes: string[] = [],
): ((filePath?: string) => boolean) => {
  return (filePath = ''): boolean => {
    const fileSuffix = getFileTypeBySuffix(filePath);
    return fileTypes.includes(fileSuffix);
  };
};

/**
 * @description 是否为图片
 * @category file
 * @param {string} filePath 文件路径
 * @return {boolean} 是否为图片
 * */
export const isImage = fileTypeFactory(imageFileSuffix);

/**
 * @description 是否为视频
 * @category file
 * @param {string} filePath 文件路径
 * @return {boolean} 是否为视频
 * */
export const isVideo = fileTypeFactory(videoFileSuffix);

/**
 * @description 是否为音频
 * @category file
 * @param {string} filePath 文件路径
 * @return {boolean} 是否为音频
 * */
export const isAudio = fileTypeFactory(audioFileSuffix);

/**
 * @description 是否为文档
 * @category file
 * @param {string} filePath 文件路径
 * @return {boolean} 是否为文档
 * */
export const isDocument = fileTypeFactory(documentFileSuffix);

/**
 * @description 是否为压缩文件
 * @category file
 * @param {string} filePath 文件路径
 * @return {boolean} 是否为压缩文件
 * */
export const isZip = fileTypeFactory(zipFileSuffix);

/**
 * @description 获取文件源前缀
 * @category file
 * @param {string} ext 文件扩展名
 * @return {string} 文件源前缀
 * */
export const getBase64FileSourcePrefix = (ext: string): string => {
  if (!ext) return '';
  return base64FilePrefix[ext as keyof typeof base64FilePrefix] ?? '';
};

/**
 * @description 下载base64文件
 * @category file
 * @param {string} base64 文件base64
 * @param {string} fileName 文件名
 * */
export const downloadBase64File = (base64: string, fileName: string): void => {
  const a = document.createElement('a');
  a.href = base64;
  a.download = fileName || 'file';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export default {
  copyText,
  getFileTypeBySuffix,
  fileTypeFactory,
  isImage,
  isVideo,
  isAudio,
  isDocument,
  isZip,
  getBase64FileSourcePrefix,
  downloadBase64File,
};
