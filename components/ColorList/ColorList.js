"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Color = _interopRequireDefault(require("./Color/Color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ColorList = ({
  colors = [],
  onRate = f => f,
  onRemove = f => f
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "color-list"
  }, colors.length === 0 ? /*#__PURE__*/_react.default.createElement("p", null, "No Colors Listed. (Add a Color)") : colors.map(color => /*#__PURE__*/_react.default.createElement(_Color.default, _extends({
    key: color.id
  }, color, {
    onRate: rating => onRate(color.id, rating),
    onRemove: () => onRemove(color.id)
  }))));
};

var _default = ColorList;
exports.default = _default;