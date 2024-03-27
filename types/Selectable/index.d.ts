declare module 'selectable.js' {

  type SelectableEvents = import('./types').SelectableEvents;
  type SelectableOptions = import('./types').SelectableOptions;

  /**
   * selectable.js
   * - version: 0.22.0
   * - https://www.npmjs.com/package/selectable.js
   */
  class Selectable {

    constructor(options: SelectableOptions);

    // Methods
    // - 2023-10-13
    // - https://mobius-studios.gitbook.io/selectable/api/methods

    add(items: any): void;
    attachEvents(): void;
    clear(): void;
    deselect(): void;
    destroy(): void;
    detachEvents(): void;
    disable(): void;
    enable(): void;
    getItems(): any[];
    getNodes(): any[];
    getSelectedItems(): any[];
    getUnSelectedItems(): any[];
    getSelectedNodes(): any[];
    getUnSelectedNodes(): any[];
    getFirstSelectedItem(): object;
    getFirstSelectedNode(): HTMLElement;
    init(): void;
    invert(): void;
    off(eventName: keyof SelectableEvents, callback: Function): void;
    on(eventName: keyof SelectableEvents, callback: Function): void;
    once(eventName: keyof SelectableEvents, callback: Function): void;
    redo(): void;
    refresh(): void;
    remove(): void;
    select(param: any): void;
    selectAll(): void;
    setContainer(container: string | HTMLElement): void;
    state(type: 'save' | 'undo' | 'redo' | 'clear'): void;
    toggle(choice: any, bool: Boolean): void;
    undo(): void;
    update(): void;

    // Properties
    // - 2023-10-13
    // - https://mobius-studios.gitbook.io/selectable/api/properties

    /** Is autoscroll enabled */
    autoscroll: boolean;

    /** Is the container property also document.body */
    bodyContainer: boolean;

    /** The DOMRect of the container */
    boundingRect: object;

    /** The callbacks used by the instance */
    callbacks: object;

    /** Can the Ctrl key be used */
    canCtrl: boolean;

    /** Can the Meta key be used */
    canMeta: boolean;

    /** Can the Shift key be used */
    canShift: boolean;

    /** The clientHeight of the container */
    clientHeight: number;

    /** The clientWidth of the container */
    clientWidth: number;

    /** The configuration options used by the instance */
    config: object;

    /** The main container element defined by the container option */
    container: HTMLElement;

    /** The current state index */
    currentState: number;

    /** Is the instance enabled */
    enabled: boolean;

    /** Are the items utilising handles defined by the handle option */
    hasHandle: boolean;

    /** Is the instance initialised */
    initialised: boolean;

    /** The selectable items */
    items: any[];

    /** The lasso element */
    lasso: HTMLElement;

    /** The custom event handlers add with the on() and once() methods */
    listeners: object;

    /** The selectable element node */
    nodes: any[];

    /** The offsetHeight of the container */
    offsetHeight: number;

    /** The offsetWidth of the container */
    offsetWidth: number;

    /** The scrollHeight of the container */
    scrollHeight: number;

    /** The scrollWidth of the container */
    scrollWidth: number;

    /** The save states */
    states: any[];

    /** Are touch controls enabled */
    touch: boolean;

  }

  export default Selectable;

}
