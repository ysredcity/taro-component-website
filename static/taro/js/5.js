webpackJsonp([5],{"126":function(e,t,a){var i=a(127);"string"==typeof i&&(i=[[e.i,i,""]]);var r={"hmr":!0,"transform":void 0,"insertInto":void 0};a(62)(i,r);i.locals&&(e.exports=i.locals)},"127":function(e,t,a){(e.exports=a(61)(!1)).push([e.i,'.switch-list{position:relative;padding:0 .32rem;background-color:#fff}.switch-list__item{position:relative;display:-webkit-flex;display:flex;padding:.21333rem 0}.switch-list__item:not(:first-child)::before{content:"";position:absolute;left:.32rem;right:-.32rem;top:0;height:.02133rem;border-top:.02133rem solid #e5e5e5;color:#e5e5e5}.switch-list__text{display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;-webkit-align-items:center;align-items:center;padding-left:.32rem}',""])},"81":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var i=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}();a(126);var r=a(12),n=_interopRequireDefault(a(5)),l=a(11),c=_interopRequireDefault(a(90));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var s=function(e){function PageSwitch(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageSwitch);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageSwitch.__proto__||Object.getPrototypeOf(PageSwitch)).apply(this,arguments));return e.state={"isChecked":!1},e.setIsChecked=function(t){var a=t.detail;e.setState({"isChecked":a.value})},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageSwitch,r.Component),i(PageSwitch,[{"key":"render","value":function render(){return n.default.createElement(l.View,{"className":"container"},n.default.createElement(c.default,{"title":"Switch"}),n.default.createElement(l.View,{"className":"page-body"},n.default.createElement(l.View,{"className":"page-section"},n.default.createElement(l.View,{"className":"page-section-title"},n.default.createElement(l.Text,null,"静态展示")),n.default.createElement(l.View,{"className":"switch-list"},n.default.createElement(l.View,{"className":"switch-list__item"},n.default.createElement(l.View,{"className":"switch-list__text"},"关闭"),n.default.createElement(l.Switch,null)),n.default.createElement(l.View,{"className":"switch-list__item"},n.default.createElement(l.View,{"className":"switch-list__text"},"开启中"),n.default.createElement(l.Switch,{"checked":!0})),n.default.createElement(l.View,{"className":"switch-list__item"},n.default.createElement(l.View,{"className":"switch-list__text"},"更换颜色"),n.default.createElement(l.Switch,{"checked":!0,"color":"#6190E8"})),n.default.createElement(l.View,{"className":"switch-list__item"},n.default.createElement(l.View,{"className":"switch-list__text"},"CheckBox形式"),n.default.createElement(l.Switch,{"type":"checkbox"})))),n.default.createElement(l.View,{"className":"page-section"},n.default.createElement(l.View,{"className":"page-section-title"},n.default.createElement(l.Text,null,"数据绑定")),n.default.createElement(l.View,{"className":"switch-list"},n.default.createElement(l.View,{"className":"switch-list__item"},n.default.createElement(l.View,{"className":"switch-list__text"},"开启中"),n.default.createElement(l.Switch,{"onChange":this.setIsChecked,"checked":this.state.isChecked}))))))}}]),PageSwitch}();t.default=s},"90":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var i=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=a(12),n=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(a(5)),l=a(11);var c=function(e){function Head(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Head),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Head.__proto__||Object.getPrototypeOf(Head)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Head,r.Component),i(Head,[{"key":"render","value":function render(){return n.default.createElement(l.View,{"className":"page-head"},n.default.createElement(l.View,{"className":"page-head-title"},this.props.title),n.default.createElement(l.View,{"className":"page-head-line"}),this.props.desc&&n.default.createElement(l.View,{"className":"page-head-desc"},this.props.desc))}}]),Head}();t.default=c}});