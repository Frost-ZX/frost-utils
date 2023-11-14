declare type CallbackData = {
  target: Target;
  visible: boolean;
};

declare type CallbackFn = (data: CallbackData) => void;

declare type Target = HTMLElement;

/**
 * @description 检测元素显示隐藏
 * - 使用 `IntersectionObserver` API
 * - 需要调用 `.disconnect()` 以结束监听
 * @param target 需要检测的元素
 * @param cb     回调函数
 */
declare function observeElementVisible(target: Target, cb: CallbackFn): IntersectionObserver;

export default observeElementVisible;
