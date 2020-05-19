"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./App.scss");

require("./fonts/fonts.css");

var _Containers = require("./components/Containers");

var _SortMenu = _interopRequireDefault(require("./components/SortMenu/SortMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = () => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/:id",
  component: _Containers.ColorDetailsContainer
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/",
  component: () => /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, "COLORS"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    component: _SortMenu.default
  }), /*#__PURE__*/_react.default.createElement(_Containers.NewColor, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: _Containers.Colors
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/sort/:sort",
    component: _Containers.Colors
  })))
}));

var _default = App;
exports.default = _default;