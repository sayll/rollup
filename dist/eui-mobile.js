import { createElement, Component } from 'react'

var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, t) {r.__proto__ = t} || function (r, t) {for (var o in t) t.hasOwnProperty(o) && (r[o] = t[o])}

function __extends(r, t) {
  function o() {this.constructor = r}

  extendStatics(r, t), r.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
}

var ErrorBoundary = function (r) {
  function t() {
    var t = null !== r && r.apply(this, arguments) || this
    return t.state = { hasError: !1 }, t.renderError = function () {return t.props.Error ? t.props.Error() : createElement('h1', null, 'Error.')}, t
  }

  return __extends(t, r), t.prototype.componentDidCatch = function (r, t) {this.setState({ hasError: !0 })}, t.prototype.render = function () {return this.state.hasError ? this.renderError() : this.props.children}, t
}(Component)
export { ErrorBoundary }
//# sourceMappingURL=eui-mobile.js.map
