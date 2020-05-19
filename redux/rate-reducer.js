"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rateColor = exports.removeColor = exports.colors = void 0;

var _constants = _interopRequireDefault(require("./constants"));

var _colorReducer = require("./color-reducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const colors = (state = [], action) => {
  switch (action.type) {
    case _constants.default.ADD_COLOR:
      return [...state, (0, _colorReducer.color)({}, action)];

    case _constants.default.RATE_COLOR:
      return state.map(c => (0, _colorReducer.color)(c, action));

    case _constants.default.REMOVE_COLOR:
      return state.filter(c => c.id !== action.id);

    default:
      return state;
  }
};

exports.colors = colors;

const removeColor = id => ({
  type: _constants.default.REMOVE_COLOR,
  id
});

exports.removeColor = removeColor;

const rateColor = (id, rating) => ({
  type: _constants.default.RATE_COLOR,
  id,
  rating
});

exports.rateColor = rateColor;