"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _initialState = require("../data/initialState");

var _rateReducer = require("./rate-reducer");

var _sortReducer = require("./sort-reducer");

const logger = store => next => action => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log("prev state", store.getState());
  console.log("action", action);
  result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
};

const saver = store => next => action => {
  let result = next(action);
  localStorage["redux-store"] = JSON.stringify(store.getState());
  return result;
};

const storeFactory = (initialState = _initialState.initialStateData) => (0, _redux.applyMiddleware)(logger, saver)(_redux.createStore)((0, _redux.combineReducers)({
  colors: _rateReducer.colors
}), localStorage["redux-store"] ? JSON.parse(localStorage["redux-store"]) : _initialState.initialStateData);

var _default = storeFactory;
exports.default = _default;