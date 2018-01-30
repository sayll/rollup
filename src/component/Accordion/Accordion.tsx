import * as React from 'react'

class Accordion extends React.Component {
  renderList = (...item) => (
    <div className="list accordion-list">
      {...item}
    </div>
  )

  renderItem = () => (
    <div className="accordion-item">
      <a href="" className="item-content item-link">
        <div className="item-inner">
          <div className="item-title">Item 1</div>
        </div>
      </a>
      <div className="accordion-item-content">
        <div className="block">
          ...
        </div>
      </div>
    </div>
  )

  render() {
    return (
      <div>
        {this.renderList(this.renderItem())}
      </div>
    )
  }
}

export default Accordion