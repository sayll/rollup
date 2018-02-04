import {f7} from 'utils'
import * as React from 'react'
import cls from 'classnames'
import './accordion.css'

interface PropsEntry {
  children: any

  /** 是否允许同时开多个面板 */
  multiply?: boolean

  /** 切换折叠事件 */
  onCollapseChange?: (e: JSX.Element) => void

  /** 选中的索引 */
  selectedIndex?: number
}

class Accordion extends React.PureComponent<PropsEntry, {}> {
  self: Node

  componentDidMount() {
    const {selectedIndex} = this.props

    // 默认展开项
    selectedIndex && f7.accordion.open(this.self.childNodes[selectedIndex])

    // 切换折叠事件
    if (this.props.onCollapseChange) {
      f7.on('accordionOpen', e => {
        this.handleCollapseChange(e)
      })
    }

  }

  // 切换折叠事件
  handleCollapseChange = (e) => {
    this.props.onCollapseChange(e)
  }

  render() {
    return (
      <div ref={e => this.self = e} className={cls('list', {'accordion-list': !this.props.multiply})}>
        {this.props.children}
      </div>
    )
  }
}

export default Accordion