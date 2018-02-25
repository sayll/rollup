import * as React from 'react'

class ErrorBoundary extends React.Component<any> {
  state = {hasError: false}

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  renderError = () => this.props.Error ?
    this.props.Error() : (<h1>Error.</h1>)

  render() {
    return (this.state.hasError ? this.renderError() : this.props.children)
  }
}

export default ErrorBoundary