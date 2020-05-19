import { createStore, combineReducers, applyMiddleware } from "redux";
import { initialStateData } from "../data/initialState";
import { colors } from "./rate-reducer";
import { sort } from "./sort-reducer";

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

const storeFactory = (initialState = initialStateData) =>
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({ colors }),
    localStorage["redux-store"]
      ? JSON.parse(localStorage["redux-store"])
      : initialStateData
  );

  
export default storeFactory;
