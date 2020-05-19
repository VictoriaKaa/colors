"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findById = exports.filterArrayById = exports.getFirstArrayItem = exports.sortColors = exports.sortFunction = void 0;

var _redux = require("redux");

const sortByDate = field => (a, b) => new Date(b[field]) - new Date(a[field]);

const sortByString = field => (a, b) => a[field].toLowerCase() < b[field].toLowerCase() ? -1 : 1;

const sortByNumber = field => (a, b) => b[field] - a[field];

const whichSort = (type, field) => type === "date" ? sortByDate(field) : type === "string" ? sortByString(field) : sortByNumber(field);

const sortFunction = sort => sort === "SORTED_BY_TITLE" ? whichSort("string", "title") : sort === "SORTED_BY_RATING" ? whichSort("number", "rating") : whichSort("date", "timestamp");

exports.sortFunction = sortFunction;

const getSortState = (sortBy = "date", stateHash = {
  date: "SORTED_BY_DATE",
  title: "SORTED_BY_TITLE",
  rating: "SORTED_BY_RATING"
}) => stateHash[sortBy];

const locateSortFunction = (0, _redux.compose)(sortFunction, getSortState);

const sortColors = (colors, sortBy) => (0, _redux.compose)(fn => [...colors].sort(fn), locateSortFunction)(sortBy);

exports.sortColors = sortColors;

const getFirstArrayItem = array => array[0];

exports.getFirstArrayItem = getFirstArrayItem;

const filterArrayById = (array, id) => array.filter(item => item.id === id);

exports.filterArrayById = filterArrayById;
const findById = (0, _redux.compose)(getFirstArrayItem, filterArrayById);
exports.findById = findById;