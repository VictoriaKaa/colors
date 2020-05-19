"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Star = _interopRequireDefault(require("../Star/Star"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StarRating = ({
  starsSelected = 0,
  totalStars = 5,
  onRate = f => f
}) => /*#__PURE__*/_react.default.createElement("div", {
  className: "star-rating"
}, [...Array(totalStars)].map((n, i) => /*#__PURE__*/_react.default.createElement(_Star.default, {
  key: i,
  selected: i < starsSelected,
  onClick: () => onRate(i + 1)
})), /*#__PURE__*/_react.default.createElement("p", null, starsSelected, " of ", totalStars, " stars"));

var _default = StarRating;
exports.default = _default;