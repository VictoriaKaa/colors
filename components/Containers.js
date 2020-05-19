"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorDetailsContainer = exports.NewColor = exports.Colors = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

var _arrayHelpers = require("../lib/array-helpers");

var _ColorList = _interopRequireDefault(require("./ColorList/ColorList"));

var _AddColorForm = _interopRequireDefault(require("./AddColorForm/AddColorForm"));

var _colorReducer = require("../redux/color-reducer");

var _rateReducer = require("../redux/rate-reducer");

var _SortMenu = _interopRequireDefault(require("./SortMenu/SortMenu"));

var _ColorDetails = _interopRequireDefault(require("./ColorList/Color/ColorDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Colors = (0, _reactRedux.connect)(({
  colors
}, {
  match
}) => ({
  colors: (0, _arrayHelpers.sortColors)(colors, match.params.sort)
}), dispatch => ({
  onRemove(id) {
    dispatch((0, _rateReducer.removeColor)(id));
  },

  onRate(id, rating) {
    dispatch((0, _rateReducer.rateColor)(id, rating));
  }

}))(_ColorList.default);
exports.Colors = Colors;
const NewColor = (0, _reactRedux.connect)(null, dispatch => ({
  onNewColor(title, color) {
    dispatch((0, _colorReducer.addColor)(title, color));
  }

}))(_AddColorForm.default);
exports.NewColor = NewColor;
const ColorDetailsContainer = (0, _reactRedux.connect)(({
  colors
}, {
  match
}) => (0, _arrayHelpers.findById)(colors, match.params.id))(_ColorDetails.default);
exports.ColorDetailsContainer = ColorDetailsContainer;