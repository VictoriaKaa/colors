// import { createStoree, combineReducers } from "redux";
// import { color } from "./color-reducer";
// import { colors } from "./rate-reducer";
// import { sort } from "./sort-reducer";
import storeFactory from "./storeFactory";

// const store = createStore(
//   combineReducers({ colors, sort }),
//   localStorage["redux-store"] ? JSON.parse(localStorage["redux-store"]) : {}
// );

// store.subscribe(() => {
//   localStorage["redux-store"] = JSON.stringify(store.getState());
// });

// const store = createStore( combineReducers({color, colors, sort}), initialState);

// store.subscribe(() =>
//  console.log('color count:', store.getState().colors.length)
// )

const store = storeFactory(true)
