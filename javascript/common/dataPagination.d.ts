declare type Returns<TData> = {
  data: TData[];
  error: Error;
  pageNext: number;
  pageSize: number;
  pageSum: number;
  success: boolean;
};

/** 分页处理 */
declare function dataPagination<TData>(options: {
  /** 全部数据 */
  data: TData[];
  /** 数据为空时的页数 */
  pageInit: number;
  /** 当前页数 / 设置页数 */
  pageNum: number;
  /** 分页大小 */
  pageSize: number;
  /** 操作类型 */
  type: 'next' | 'prev' | 'set';
}): Returns<TData>;

export type { Returns };

export default dataPagination;
