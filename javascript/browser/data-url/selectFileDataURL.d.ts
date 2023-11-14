declare type Messages = {
  '': string;
  CANCELLED: string;
  INVALID_FORMAT: string;
  NO_FILE: string;
  READER_ERROR: string;
  SIZE_EXCEEDED: string;
  SUCCESS: string;
};

declare type Returns = {
  dataURL: string;
  error: Error | null;
  file: File | null;
  message: keyof Messages;
  success: boolean;
};

/**
 * @description 选择单个文件，获取 Base64
 * @param mimeList MIME 类型列表
 * - 用于检测文件格式，若为空，则允许所有格式
 * - 例：`['application/json', 'image/jpeg']`
 * @param maxSize  文件大小最大值（单位：B）
 */
declare function selectFileDataURL(mimeList?: string[], maxSize?: number): Promise<Returns>;

export type {
  Messages,
  Returns,
};

export default selectFileDataURL;
