import { FileSuffixEnum } from './type';

/**
 * @description 图片文件后缀
 * @category file
 * @constant {string[]} imageFileSuffix
 * */
export const imageFileSuffix = [
  FileSuffixEnum.jpg,
  FileSuffixEnum.jpeg,
  FileSuffixEnum.png,
  FileSuffixEnum.gif,
  FileSuffixEnum.bmp,
  FileSuffixEnum.webp,
  FileSuffixEnum.svg,
  FileSuffixEnum.tiff,
  FileSuffixEnum.ico,
  FileSuffixEnum.heic,
  FileSuffixEnum.heif,
  FileSuffixEnum.raw,
  FileSuffixEnum.psd,
  FileSuffixEnum.ai,
  FileSuffixEnum.eps,
  FileSuffixEnum.pdf,
  FileSuffixEnum.jfif,
  FileSuffixEnum.avif,
];

/**
 * @description 视频文件后缀
 * @category file
 * @constant {string[]} videoFileSuffix
 * */
export const videoFileSuffix = [
  FileSuffixEnum.mp4,
  FileSuffixEnum.avi,
  FileSuffixEnum.mov,
  FileSuffixEnum.flv,
  FileSuffixEnum.mpg,
  FileSuffixEnum.mkv,
  FileSuffixEnum.rm,
  FileSuffixEnum.rmvb,
  FileSuffixEnum['3gp'],
  FileSuffixEnum.m4v,
  FileSuffixEnum.f4v,
  FileSuffixEnum.ogv,
  FileSuffixEnum.asf,
  FileSuffixEnum.divx,
  FileSuffixEnum.h264,
  FileSuffixEnum.h265,
  FileSuffixEnum.hevc,
  FileSuffixEnum.mts,
  FileSuffixEnum.m2ts,
  FileSuffixEnum.dv,
  FileSuffixEnum.mod,
];

/**
 * @description 音频文件后缀
 * @category file
 * @constant {string[]} audioFileSuffix
 * */
export const audioFileSuffix = [
  FileSuffixEnum.mp3,
  FileSuffixEnum.wav,
  FileSuffixEnum.m4a,
  FileSuffixEnum.aac,
  FileSuffixEnum.flac,
  FileSuffixEnum.wma,
  FileSuffixEnum.midi,
  FileSuffixEnum.mid,
  FileSuffixEnum.amr,
  FileSuffixEnum.opus,
  FileSuffixEnum.ra,
  FileSuffixEnum.rm,
  FileSuffixEnum.wv,
  FileSuffixEnum.dts,
  FileSuffixEnum.ac3,
  FileSuffixEnum.mka,
  FileSuffixEnum.au,
  FileSuffixEnum.aiff,
  FileSuffixEnum.pcm,
  FileSuffixEnum.mpc,
  FileSuffixEnum.voc,
  FileSuffixEnum.tta,
  FileSuffixEnum.spx,
  FileSuffixEnum.gsm,
  FileSuffixEnum.alac,
  FileSuffixEnum.cda,
];

/**
 * @description 文档文件后缀
 * @category file
 * @constant {string[]} documentFileSuffix
 * */
export const documentFileSuffix = [
  FileSuffixEnum.doc,
  FileSuffixEnum.docx,
  FileSuffixEnum.xls,
  FileSuffixEnum.xlsx,
  FileSuffixEnum.ppt,
  FileSuffixEnum.pptx,
  FileSuffixEnum.pdf,
];

/**
 * @description 压缩文件后缀
 * @category file
 * @constant {string[]} zipFileSuffix
 * */
export const zipFileSuffix = [
  FileSuffixEnum.zip,
  FileSuffixEnum.rar,
  FileSuffixEnum['7z'],
  FileSuffixEnum.tar,
  FileSuffixEnum.bz2,
  FileSuffixEnum.xz,
  FileSuffixEnum.tgz,
  FileSuffixEnum.tbz2,
  FileSuffixEnum.lz,
  FileSuffixEnum.lzma,
  FileSuffixEnum.lzo,
  FileSuffixEnum.z,
  FileSuffixEnum.arj,
  FileSuffixEnum.cab,
  FileSuffixEnum.iso,
  FileSuffixEnum.jar,
  FileSuffixEnum.war,
  FileSuffixEnum.ear,
  FileSuffixEnum.lha,
  FileSuffixEnum.lzh,
  FileSuffixEnum.uue,
  FileSuffixEnum.bz,
  FileSuffixEnum.rz,
  FileSuffixEnum.pak,
  FileSuffixEnum.arc,
  FileSuffixEnum.gzip,
  FileSuffixEnum.zipx,
  FileSuffixEnum.sit,
  FileSuffixEnum.sitx,
  FileSuffixEnum.sea,
  FileSuffixEnum.zst,
  FileSuffixEnum.br,
];

/**
 * @description base64文件源前缀
 * @category file
 * @constant {Object} base64FilePrefix
 * */
export const base64FilePrefix = {
  [FileSuffixEnum.jpg]: 'data:image/jpeg;base64,',
  [FileSuffixEnum.jpeg]: 'data:image/jpeg;base64,',
  [FileSuffixEnum.png]: 'data:image/png;base64,',
  [FileSuffixEnum.gif]: 'data:image/gif;base64,',
  [FileSuffixEnum.zip]: 'data:application/x-zip-compressed;base64,',
  [FileSuffixEnum.rar]: 'data:application/octet-stream;base64,',
  [FileSuffixEnum.doc]: 'data:application/msword;base64,',
  [FileSuffixEnum.docx]:
    'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,',
  [FileSuffixEnum.xls]: 'data:application/vnd.ms-excel;base64,',
  [FileSuffixEnum.xlsx]:
    'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,',
  [FileSuffixEnum.ppt]: 'data:application/vnd.ms-powerpoint;base64,',
  [FileSuffixEnum.pptx]:
    'data:application/vnd.openxmlformats-officedocument.presentationml.presentation;base64,',
  [FileSuffixEnum.pdf]: 'data:application/pdf;base64,',
  [FileSuffixEnum.csv]: 'data:text/csv;base64,',
  [FileSuffixEnum.avi]: 'data:video/avi;base64,',
  [FileSuffixEnum.mov]: 'data:video/mov;base64,',
  [FileSuffixEnum.flv]: 'data:video/flv;base64,',
  [FileSuffixEnum.mpg]: 'data:video/mpeg;base64,',
  [FileSuffixEnum.mkv]: 'data:video/x-matroska;base64,',
  [FileSuffixEnum.mp4]: 'data:video/mp4;base64,',
  [FileSuffixEnum.m4v]: 'data:video/x-m4v;base64,',
  [FileSuffixEnum.f4v]: 'data:video/x-f4v;base64,',
  [FileSuffixEnum.ogv]: 'data:video/ogg;base64,',
  [FileSuffixEnum.asf]: 'data:video/x-ms-asf;base64,',
  [FileSuffixEnum.divx]: 'data:video/divx;base64,',
  [FileSuffixEnum.h264]: 'data:video/h264;base64,',
  [FileSuffixEnum.h265]: 'data:video/h265;base64,',
  [FileSuffixEnum.hevc]: 'data:video/hevc;base64,',
  [FileSuffixEnum.mts]: 'data:video/mpeg;base64,',
  [FileSuffixEnum.m2ts]: 'data:video/mpeg;base64,',
  [FileSuffixEnum.dv]: 'data:video/dv;base64,',
  [FileSuffixEnum.mod]: 'data:video/mod;base64,',
  [FileSuffixEnum.tod]: 'data:video/tod;base64,',
  [FileSuffixEnum.ts]: 'data:video/mpeg;base64,',
  [FileSuffixEnum.tta]: 'data:audio/tta;base64,',
  [FileSuffixEnum.wav]: 'data:audio/wav;base64,',
  [FileSuffixEnum.wma]: 'data:audio/x-ms-wma;base64,',
  [FileSuffixEnum.aac]: 'data:audio/aac;base64,',
  [FileSuffixEnum.flac]: 'data:audio/flac;base64,',
  [FileSuffixEnum.mp3]: 'data:audio/mpeg;base64,',
  [FileSuffixEnum.m4a]: 'data:audio/m4a;base64,',
  [FileSuffixEnum.opus]: 'data:audio/opus;base64,',
  [FileSuffixEnum.ra]: 'data:audio/x-realaudio;base64,',
  [FileSuffixEnum.rm]: 'data:audio/x-pn-realaudio;base64,',
  [FileSuffixEnum.wv]: 'data:audio/x-wav;base64,',
  [FileSuffixEnum.mpc]: 'data:audio/mpc;base64,',
  [FileSuffixEnum.voc]: 'data:audio/voc;base64,',
  [FileSuffixEnum.spx]: 'data:audio/x-speex;base64,',
  [FileSuffixEnum.gsm]: 'data:audio/x-gsm;base64,',
  [FileSuffixEnum.alac]: 'data:audio/alac;base64,',
  [FileSuffixEnum.cda]: 'data:audio/cda;base64,',
  [FileSuffixEnum.midi]: 'data:audio/midi;base64,',
  [FileSuffixEnum.mka]: 'data:audio/x-matroska;base64,',
  [FileSuffixEnum.au]: 'data:audio/basic;base64,',
  [FileSuffixEnum.aiff]: 'data:audio/aiff;base64,',
  [FileSuffixEnum.pcm]: 'data:audio/pcm;base64,',
};
