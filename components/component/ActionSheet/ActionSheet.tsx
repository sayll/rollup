import {f7} from '_utils'
import * as React from 'react'
import {ActionSheetEntry, ReturnEntry} from './PropsType'

function createActionSheet(arg: ActionSheetEntry) {
  // TODO 自定义模版，无法使用JSX语法，等待重构
  if (arg.render) {
    const DOM = arg.render() as any

    if (DOM instanceof HTMLElement) {
      DOM.className = 'actions-modal'
      arg.content = DOM
    }
    else {
      arg.content = `<div class="actions-modal">${DOM}</div>`
    }
    delete arg.render
  }

  return f7.actions.create(arg)
}

export default {
  /** 基础窗口 */
  showActionSheetWithOptions: (arg: ActionSheetEntry):ReturnEntry => createActionSheet({...arg})
}