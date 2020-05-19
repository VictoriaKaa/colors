"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addColor = exports.color = void 0;

var _constants = _interopRequireDefault(require("./constants"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const color = (state = {}, action) => {
  switch (action.type) {
    case _constants.default.ADD_COLOR:
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        time: action.time,
        rating: 0
      };

    case _constants.default.RATE_COLOR:
      return state.id !== action.id ? state : { ...state,
        rating: action.rating
      };

    default:
      return state;
  }
};

exports.color = color;

const addColor = (title, color) => ({
  type: _constants.default.ADD_COLOR,
  id: (0, _uuid.v4)(),
  title,
  color,
  time: new Date().toLocaleString()
});

exports.addColor = addColor;