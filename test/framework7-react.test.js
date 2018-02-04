(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('framework7'), require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['framework7', 'react', 'react-dom'], factory) :
	(factory(global.Framework7,global.React,global.ReactDOM));
}(this, (function (Framework7,React,ReactDom) { 'use strict';

function __$$styleInject(css, ref) {
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

Framework7 = Framework7 && Framework7.hasOwnProperty('default') ? Framework7['default'] : Framework7;

var f7 = new Framework7({
    root: 'body',
    name: 'f7-react',
    id: 'f7-react',
    theme: 'auto',
    panel: {
        swipe: 'left',
        leftBreakpoint: 768,
        rightBreakpoint: 1024
    },
    methods: {
        alert: function (msg) { return f7.dialog.alert(msg); }
    },
    touch: {
        tapHold: true,
        tapHoldDelay: 2000,
        fastClicks: true,
        tapHoldPreventClicks: true,
        fastClicksDistanceThreshold: 10,
        activeState: true,
        fastClicksDelayBetweenClicks: 200 // 在多次点击之间允许的最小延迟
    },
    on: {
        touchmove: function () {
        },
        pageInit: function (page) {
            console.log('初始化页面：%o', page);
        },
        popupOpen: function (popup) {
            console.log('页面弹窗：%o', popup);
        }
    }
});

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

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel.prototype.componentWillMount = function () {
        var onCollapseChange = this.props.onCollapseChange;
        onCollapseChange && f7.on('accordionOpen', onCollapseChange);
    };
    Panel.prototype.componentDidMount = function () {
        // 是否展开
        this.props.collapsed && f7.accordion.open(this.self);
    };
    Panel.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, children = _a.children, collapsable = _a.collapsable;
        return (React.createElement("div", { ref: function (e) { return _this.self = e; }, className: 'list accordion-item' },
            React.createElement("a", { className: classnames('item-content', { 'item-link': !collapsable }) },
                React.createElement("div", { className: "item-inner" },
                    React.createElement("div", { className: "item-title" }, title))),
            React.createElement("div", { className: "accordion-item-content" },
                React.createElement("div", { className: "block" },
                    React.createElement("p", null, children)))));
    };
    return Panel;
}(React.PureComponent));

var css = ".list .list {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0NBQ1giLCJmaWxlIjoiYWNjb3JkaW9uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IC5saXN0IHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
__$$styleInject(css);

var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 切换折叠事件
        _this.handleCollapseChange = function (e) {
            _this.props.onCollapseChange(e);
        };
        return _this;
    }
    Accordion.prototype.componentDidMount = function () {
        var _this = this;
        var selectedIndex = this.props.selectedIndex;
        // 默认展开项
        selectedIndex && f7.accordion.open(this.self.childNodes[selectedIndex]);
        // 切换折叠事件
        if (this.props.onCollapseChange) {
            f7.on('accordionOpen', function (e) {
                _this.handleCollapseChange(e);
            });
        }
    };
    Accordion.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { ref: function (e) { return _this.self = e; }, className: classnames('list', { 'accordion-list': !this.props.multiply }) }, this.props.children));
    };
    return Accordion;
}(React.PureComponent));

function createActionSheet(arg) {
    // TODO 自定义模版，无法使用JSX语法，等待重构
    if (arg.render) {
        var DOM = arg.render();
        if (DOM instanceof HTMLElement) {
            DOM.className = 'actions-modal';
            arg.content = DOM;
        }
        else {
            arg.content = "<div class=\"actions-modal\">" + DOM + "</div>";
        }
        delete arg.render;
    }
    return f7.actions.create(arg);
}
var ActionSheet = {
    /** 基础窗口 */
    showActionSheetWithOptions: function (arg) { return createActionSheet(__assign({}, arg)); }
};

var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            act: null
        };
        _this.handleClick = function () {
            _this.state.act.open();
        };
        _this.handleRemove = function () {
            _this.state.act.destroy();
        };
        _this.renderHeader = function () { return (React.createElement("div", { className: "navbar" },
            React.createElement("div", { className: "navbar-inner" },
                React.createElement("div", { className: "left link" }, "Left"),
                React.createElement("div", { className: "title" }, "Page Title"),
                React.createElement("div", { className: "right link" }, "Right")))); };
        // 手风琴
        _this.renderAccordion = function () { return (React.createElement(Accordion, { selectedIndex: 1, onCollapseChange: function (e) { return console.log(e); } },
            React.createElement(Panel, { title: "test" }, "\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0"),
            React.createElement(Panel, { title: "test" }, "\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0"))); };
        return _this;
    }
    View.prototype.componentDidMount = function () {
        var act = ActionSheet.showActionSheetWithOptions({
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
                    onClick: function () {
                        console.log(act, 1);
                    }
                }
            ],
            on: {
                beforeDestroy: function () {
                    console.log(2333);
                }
            }
        });
        this.setState({ act: act });
    };
    View.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "box" },
            this.renderHeader(),
            React.createElement("div", { ref: function (e) { return _this.button = e; }, className: "button", onClick: this.handleClick }, "handleClick"),
            React.createElement("button", { onClick: this.handleRemove, className: "button" }, "remove")));
    };
    return View;
}(React.PureComponent));

ReactDom.render(React.createElement(View, null), document.getElementById('app'));

})));
