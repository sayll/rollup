import * as React from 'react'
import Panel from './component/Panel'
import Accordion from './component/Accordion'
import ActionSheet from './component/ActionSheet'

class View extends React.PureComponent {
  state = {
    act: null
  }
  button: Node
  test: Node

  componentDidMount() {
    const act = ActionSheet.showActionSheetWithOptions({
      // forceToPopover: true,
      targetEl: '.button',
      buttons: [
        {
          text: 'Title',
          label: true
        },
        {
          text: '点我',
          bold: true,
          onClick: () => {
            console.log(act, 1)
          }
        }
      ],
      on: {
        beforeDestroy: () => {
          console.log(2333)
        }
      }
    })
    this.setState({act})
  }

  handleClick = () => {
    this.state.act.open()
  }

  handleRemove = () => {
    this.state.act.destroy()
  }

  renderHeader = () => (
    <div className="navbar">
      <div className="navbar-inner">
        <div className="left link">Left</div>
        <div className="title">Page Title</div>
        <div className="right link">Right</div>
      </div>
    </div>
  )

  // 手风琴
  renderAccordion = () => (
    <Accordion selectedIndex={1} onCollapseChange={e => console.log(e)}>
      <Panel title="test">描述描述描述描述</Panel>
      <Panel title="test">描述描述描述描述</Panel>
    </Accordion>
  )

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <h2>我是主视图内容</h2>
          <a className="link" href="/test/">前往其他视图</a>
        </div>
      </div>
    )
  }
}

export default View