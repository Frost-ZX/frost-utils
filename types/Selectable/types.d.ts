/**
 * selectable.js - Events
 * - 2023-10-13
 * - https://mobius-studios.gitbook.io/selectable/api/events
 */
export interface SelectableEvents {

  /** The instance is ready. */
  init: void;

  /** The instance has been destroyed */
  destroyed: void;

  /** An item was added to the instance. */
  add: void;

  /** An item was removed from the instance. */
  remove: void;

  /** mousedown / touchstart. */
  start: void;

  /** mousemove / touchmove. */
  drag: void;

  /** mouseup / touchend. */
  end: void;

  /** An item was selected. */
  select: void;

  /** An item was deselected. */
  deselect: void;

  /** An item has been marked for selection. */
  selecting: void;

  /** An item has been marked for deselection. */
  deselecting: void;

  /** Save state change. */
  state: void;

  /** The instance was enabled. */
  enabled: void;

  /** The instance was disabled. */
  disabled: void;

}

/**
 * selectable.js - Options
 * - 2023-10-13
 * - https://mobius-studios.gitbook.io/selectable/api/options
 */
export interface SelectableOptions {
  autoRefresh: boolean;
  autoScroll: {
    threshold: number;
    increment: number;
  };
  classes: {
    lasso: string;
    handle: string;
    focused: string;
    selected: string;
    container: string;
    selecting: string;
    selectable: string;
    deselecting: string;
  };
  container: HTMLElement;
  filter: string;
  handle: boolean;
  ignore: boolean;
  keys: string[];
  lasso: CSSStyleDeclaration;
  /**
   * @description Set the selecting sequence for the lasso.
   * - Set to `sequential` to allow the lasso to select items sequentially instead of only the ones within the lasso.
   * @default 'normal'
   */
  lassoSelect: 'normal' | 'sequential';
  maxSelectable: boolean;
  saveState: boolean;
  throttle: number;
  toggle: boolean;
  toggleTouch: boolean;
  /**
   * @description Defines how far the lasso overlaps a selectable element before that element is highlighted for selection.
   * - `touch` - the lasso only needs to touch the item to highlight it for selection
   * - `fit` - the item needs to be completely within the lasso to be highlighted for selection
   * @default 'touch'
   */
  tolerance: 'fit' | 'touch';
  touch: boolean;
}
