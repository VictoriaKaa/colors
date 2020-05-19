"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortColors = exports.sort = void 0;

var _constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sort = (state = "SORTED_BY_DATE", action) => {
  switch (action.type) {
    case _constants.default.SORT_COLORS:
      return action.sortBy;

    default:
      return state;
  }
};

exports.sort = sort;

const sortColors = sortedBy => sortedBy === "SORTED_BY_RATING" ? {
  type: _constants.default.SORT_COLORS,
  sortBy: "SORTED_BY_RATING"
} : sortedBy === "SORTED_BY_TITLE" ? {
  type: _constants.default.SORT_COLORS,
  sortBy: "SORTED_BY_TITLE"
} : {
  type: _constants.default.SORT_COLORS,
  sortBy: "SORTED_BY_DATE"
};

exports.sortColors = sortColors;