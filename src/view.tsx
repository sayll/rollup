import * as React from 'react'
import Panel from './component/Panel'

class View extends React.Component {
  render() {
    return (
      <div style={{height: '100vh'}}>
        <div className="navbar">
          <div className="navbar-inner">
            <div className="left link">Left</div>
            <div className="title">Page Title</div>
            <div className="right link">Right</div>
          </div>
        </div>

        <Panel
          title="test"
          collapsed
          collapsable
          onCollapseChange={() => {console.log(11)}}
        >
          <div>
            描述描述描述描述
            <div>
              描述描述描述描述
            </div>
            <div>
              描述描述描述描述
            </div>
          </div>

        </Panel>
        <Panel
          title="test"
          collapsed
          onCollapseChange={() => {console.log(2222)}}
        >
          描述描述描述描述
        </Panel>

      </div>
    )
  }
}

export default View