import * as React from 'react'

export default class Demo extends React.Component {
  render() {
    return (
      <div className="page" data-name="/test/">
        <div className="page-content">
          ... scrollable page content goes here ...
        </div>
      </div>
    )
  }
}