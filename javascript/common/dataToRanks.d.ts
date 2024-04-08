declare type Returns<TData> = {
  data: TData[][];
  error: Error;
  success: boolean;
};

/** 将数据拆分为行列 */
declare function dataToRanks<TData>(options: {
  /** 需要处理的数据，一维数组 */
  data: TData[];
  /** 处理后的列数 */
  cols: number;
  /** 处理后的行数 */
  rows: number;
  /** 元素数量不足时，是否保持指定的行数 */
  keepRows: boolean;
}): Returns<TData>;

export type { Returns };

export default dataToRanks;
