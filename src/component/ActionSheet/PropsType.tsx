/** 节点选择器，类似$() */
type DOMSelect = string
type HTMLElement = JSX.Element | Node | DOMSelect

/** 按钮配置项 */
export interface ButtonEntry {
  /**
   * 渲染为标题而不是按钮
   * @default false
   * */
  label?: boolean

  /** 按钮的文本，可以是HTML模版字符串 */
  text?: string

  /** 图标的HTML模版字符串，如<img /> <svg /> */
  icon?: string

  /**
   * 按钮文本是否加粗
   * @default false
   * */
  bold?: boolean

  /** 按钮文本颜色,目前仅支持色值的英文：如red,blue...（日后改写） */
  color?: string

  /** 预留接口，按钮背景色 */
  bg?: string

  /**
   * 按钮是否被禁用
   * @default false
   * */
  disabled?: boolean

  /**
   * 如果启用，点击按钮将关闭操作表
   * @default true
   * */
  close?: boolean

  /** 点击按钮的回调 */
  onClick?: () => void
}

export interface BaseSheetEntry {
  // el?: HTMLElement // 预留，实现多个ActionSheet共存

  /**
   * 启用遮罩
   * @default true
   * */
  backdrop?: boolean

  /**
   * 启用后，点击背景关闭窗口
   * @default true
   * */
  closeByBackdropClick?: boolean

  /**
   * 启用动画
   * @default true
   * */
  animate?: boolean

  /** 窗口中的按钮配置 */
  buttons?: ButtonEntry[]

  /**
   * 启用网格布局，分享窗口请设置为true
   * @default false
   * */
  grid?: boolean

  /**
   * 启用后，操作表将在大屏幕上转换为Popover
   * @default true
   * */
  convertToPopover?: boolean

  /**
   * 启用后，将始终转换为Popover
   * @default false
   * */
  forceToPopover?: boolean

  /** 事件处理程序 */
  on?: any

  /** 所有按钮被点击时，都会触发该函数*/
  onClick?: () => void

  /** 自定义HTML弹窗元素,通过实例化的dom或字符模版来生成自定义弹窗（不适用JS，等待重构） */
  render?: (() => Node | string)

  /**  @internal 自定义HTML图表元素 */
  content?: HTMLElement,
}

// 基础参数
export interface SheetEntry extends BaseSheetEntry {
  forceToPopover?: false
}

// Popover参数
export interface PopoverEntry extends BaseSheetEntry {
  forceToPopover?: true

  /** Popover定位的基准元素 */
  targetEl: HTMLElement

  /** @internal 定位X */
  targetX?: any

  /** @internal 定位Y */
  targetY?: number

  /** @internal 弹窗宽 */
  targetWidth?: number

  /** @internal 弹窗高 */
  targetHeight?: number
}

// 入参
export type ActionSheetEntry = SheetEntry | PopoverEntry

// event
type event = 'open' | 'opened' | 'close' | 'closed' | 'beforeDestroy'

// ActionSheet返回的实例
export interface ReturnEntry {
  /** 打开窗口 */
  open?: () => void

  /** 关闭窗口 */
  close?: () => void

  /** 销毁窗口，失去绑定事件 */
  destroy?: () => void

  /** 添加事件监听 */
  on? (event: event, handler: () => void): void

  /** 添加定义emit事件监听 */
  on? (event: string, handler: Function): void

  /** 事件触发后，立即移除事件 */
  once?: (event: event | string, handler: Function) => void

  /** 移除事件监听,handler参数将针对移除某个方法 */
  off?: (event: event | string, handler?: Function) => void

  /** 事件触发委托给应用实例触发 */
  emit?: (event: string, ...args) => void
}
