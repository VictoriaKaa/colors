"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Color.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ColorDetails = ({
  title,
  color,
  history,
  location
}) => /*#__PURE__*/_react.default.createElement("div", {
  className: "color-details",
  style: {
    backgroundColor: color
  },
  onClick: () => history.goBack()
}, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement("h1", null, color));

var _default = ColorDetails;
exports.default = _default;