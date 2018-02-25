import {f7} from '_utils'
import cls from 'classnames'
import * as React from 'react'

interface Props {
  /** 表示类节点标题 */
  title: JSX.Element | string | number

  /** 表示类节点内容 */
  children?: JSX.Element | string | number | boolean

  /** 是否已折叠 */
  collapsed?: boolean,

  /** 是否可折叠 */
  collapsable?: boolean

  /** 即将切换折叠事件 */
  onCollapseChange?: () => void
}

class Panel extends React.PureComponent<Props> {
  self: Node

  componentWillMount() {
    const {onCollapseChange} = this.props
    onCollapseChange && f7.on('accordionOpen', onCollapseChange)
  }

  componentDidMount() {
    // 是否展开
    this.props.collapsed && f7.accordion.open(this.self)
  }

  render() {
    const {title, children, collapsable} = this.props

    return (
      <div ref={e => this.self = e} className={'list accordion-item'}>
        <a className={cls('item-content', {'item-link': !collapsable})}>
          <div className="item-inner">
            <div className="item-title">{title}</div>
          </div>
        </a>
        <div className="accordion-item-content">
          <div className="block">
            <p>{children}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Panel