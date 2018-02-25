(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom'), require('react-router-dom'), require('react-router-transition')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom', 'react-router-dom', 'react-router-transition'], factory) :
	(factory(global.React,global.ReactDOM,global.ReactRouterDOM,global.ReactRouterTransition));
}(this, (function (React,ReactDOM,reactRouterDom,reactRouterTransition) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        _this.renderError = function () { return _this.props.Error ?
            _this.props.Error() : (React.createElement("h1", null, "Error.")); };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error, info) {
        this.setState({ hasError: true });
    };
    ErrorBoundary.prototype.render = function () {
        return (this.state.hasError ? this.renderError() : this.props.children);
    };
    return ErrorBoundary;
}(React.Component));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".switch-wrapper {\n  position: relative; }\n\n.switch-wrapper > div {\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxtQkFBbUIsRUFBRSIsImZpbGUiOiJzdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXRjaC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5zd2l0Y2gtd3JhcHBlciA+IGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuIl19 */";
styleInject(css);

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
    return reactRouterTransition.spring(val, {
        stiffness: 330,
        damping: 22
    });
}
// child matches will...
var bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
        opacity: 0,
        scale: 1.2
    },
    // leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.3)
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce(1),
        scale: bounce(1)
    }
};
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Test.prototype.render = function () {
        return (React.createElement("div", null, "test2"));
    };
    return Test;
}(React.Component));
var Test2 = /** @class */ (function (_super) {
    __extends(Test2, _super);
    function Test2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Test2.prototype.render = function () {
        return (React.createElement(ErrorBoundary, null,
            React.createElement("h2", null, "\u6211\u662F\u4E3B\u89C6\u56FE\u5185\u5BB9")));
    };
    return Test2;
}(React.Component));
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    View.prototype.render = function () {
        return (React.createElement(reactRouterDom.HashRouter, null,
            React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement(reactRouterDom.Link, { to: "/" }, "/"),
                    React.createElement(reactRouterDom.Link, { to: "/p1/" }, "p1"),
                    React.createElement(reactRouterDom.Link, { to: "/p2/" }, "p2")),
                React.createElement(reactRouterTransition.AnimatedRoute, { path: "/p1/", component: Test2, atEnter: { offset: 110 }, atLeave: { offset: -100 }, atActive: { offset: 0 }, mapStyles: function (styles) { return ({
                        transform: "translateX(" + styles.offset + "%)"
                    }); } }))));
    };
    return View;
}(React.Component));
ReactDOM.render(React.createElement(View, null), document.getElementById('app'));

})));
//# sourceMappingURL=eui-mobile.js.map
