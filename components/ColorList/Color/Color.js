"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _StarRating = _interopRequireDefault(require("../../StarRating/StarRating"));

require("./Color.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Color extends _react.default.Component {
  render() {
    const {
      id,
      title,
      color,
      rating,
      time,
      onRemove,
      onRate,
      history
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("section", {
      className: "colorSection",
      style: this.style
    }, /*#__PURE__*/_react.default.createElement("h1", {
      ref: "title",
      onClick: () => history.push(`/${id}`)
    }, title), /*#__PURE__*/_react.default.createElement("div", null, "date: ", time), /*#__PURE__*/_react.default.createElement("button", {
      onClick: onRemove
    }, "delete"), /*#__PURE__*/_react.default.createElement("div", {
      className: "color",
      onClick: () => history.push(`/${id}`),
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_StarRating.default, {
      starsSelected: rating,
      onRate: onRate
    })));
  }

}

var _default = (0, _reactRouter.withRouter)(Color);

exports.default = _default;