import C from "./constants";
import { v4 } from "uuid";

export const color = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_COLOR:
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        time: action.time,
        rating: 0,
      };
    case C.RATE_COLOR:
      return state.id !== action.id
        ? state
        : {
            ...state,
            rating: action.rating,
          };
    default:
      return state;
  }
};

export const addColor = (title, color) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title,
  color,
  time: new Date().toLocaleString(),
});
