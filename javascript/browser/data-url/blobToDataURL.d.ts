/**
 * @description 转换二进制（Blob）为 Base64
 * @returns `resolve(string)` `reject(Error)`
 */
declare function blobToDataURL(blob: Blob): Promise<string>;

export default blobToDataURL;
