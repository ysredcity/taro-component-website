webpackJsonp([14],{"114":function(e,t,o){var a=o(115);"string"==typeof a&&(a=[[e.i,a,""]]);var l={"hmr":!0,"transform":void 0,"insertInto":void 0};o(62)(a,l);a.locals&&(e.exports=a.locals)},"115":function(e,t,o){(e.exports=o(61)(!1)).push([e.i,'.checkbox-list{position:relative;padding:.21333rem .32rem;background-color:#fff}.checkbox-list::before{content:" ";position:absolute;left:0;top:0;right:0;height:.02133rem;border-top:.02133rem solid #e5e5e5;color:#e5e5e5}.checkbox-list::after{content:" ";position:absolute;left:0;bottom:0;right:0;height:.02133rem;border-top:.02133rem solid #e5e5e5;color:#e5e5e5}.checkbox-list__label{position:relative;display:-webkit-flex;display:flex;padding:.21333rem .32rem}.checkbox-list__label:not(:first-child)::before{content:"";position:absolute;left:0;top:0;right:0;height:.02133rem;border-top:.02133rem solid #e5e5e5;color:#e5e5e5;left:.32rem}',""])},"74":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}();o(114);var l=o(12),r=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(o(5)),c=o(11);var n=function(e){function PageCheckbox(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageCheckbox);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageCheckbox.__proto__||Object.getPrototypeOf(PageCheckbox)).apply(this,arguments));return e.state={"list":[{"value":"美国","text":"美国","checked":!1},{"value":"中国","text":"中国","checked":!0},{"value":"巴西","text":"巴西","checked":!1},{"value":"日本","text":"日本","checked":!1},{"value":"英国","text":"英国","checked":!1},{"value":"法国","text":"法国","checked":!1}]},e.checkboxChange=function(e){console.log(e)},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageCheckbox,l.Component),a(PageCheckbox,[{"key":"render","value":function render(){return r.default.createElement(c.View,{"className":"container"},r.default.createElement(c.View,{"className":"page-body"},r.default.createElement(c.View,{"className":"page-section"},r.default.createElement(c.View,{"className":"page-section-title"},r.default.createElement(c.Text,null,"默认样式")),r.default.createElement(c.View,{"className":"page-section-spacing-reset"},r.default.createElement(c.Checkbox,{"value":"\\u9009\\u4E2D","checked":!0},"选中"),r.default.createElement(c.Checkbox,{"style":"margin-left: 20px","value":"\\u672A\\u9009\\u4E2D"},"未选中"))),r.default.createElement(c.View,{"className":"page-section"},r.default.createElement(c.View,{"className":"page-section-title"},r.default.createElement(c.Text,null,"推荐展示样式")),r.default.createElement(c.View,null,r.default.createElement(c.View,{"className":"checkbox-list"},r.default.createElement(c.CheckboxGroup,{"name":"checkbox","onChange":this.checkboxChange},this.state.list.map(function(e){return r.default.createElement(c.Label,{"className":"checkbox-list__label","for":e.value,"key":e.value},r.default.createElement(c.Checkbox,{"className":"checkbox-list__checkbox","value":e.value,"checked":e.checked},e.text))})))))))}}]),PageCheckbox}();t.default=n}});