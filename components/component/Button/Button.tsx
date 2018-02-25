import * as React from 'react'
import cls from 'classnames'

interface ButtonEntry {
  /** 加大padding的按钮*/
  big?: boolean,
  /** 按钮圆角*/
  round?: boolean,
  /** 是否处于选中状态*/
  active?: boolean,
  /** 针对安卓，添加边框*/
  outline?: boolean
}

class Button extends React.PureComponent<ButtonEntry> {
  render() {
    return (
      <div className="block">
        <button className={cls('button', {})}>test</button>
      </div>
    )
  }
}

export default Button