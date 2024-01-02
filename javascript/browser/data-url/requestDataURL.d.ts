declare type Returns = {
  dataURL: string;
  error: Error | null;
  success: boolean;
  timeout: boolean;
};

/**
 * @description 请求获取文件，转换为 Base64
 * @param fileURL 文件请求地址
 * @param timeout 请求超时毫秒数
 * @param init    传递到 `fetch()`
 */
declare function requestDataURL(fileURL: string, timeout?: number, init?: RequestInit): Promise<Returns>;

export type { Returns };

export default requestDataURL;
