"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const selectedStyle = {
  color: "#FFFACD",
  backgroundColor: "#0047AB"
};

const Menu = ({
  match
}) => /*#__PURE__*/_react.default.createElement("nav", {
  className: "menu"
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
  to: "/",
  style: match.isExact && selectedStyle
}, "date"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
  to: "/sort/title",
  activeStyle: selectedStyle
}, "title"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
  to: "/sort/rating",
  activeStyle: selectedStyle
}, "rating"));

var _default = Menu;
exports.default = _default;