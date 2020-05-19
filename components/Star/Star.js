"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Star.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Star = ({
  selected = false,
  onClick = f => f
}) => /*#__PURE__*/_react.default.createElement("div", {
  className: selected ? "star selected" : "star",
  onClick: onClick
});

var _default = Star;
exports.default = _default;