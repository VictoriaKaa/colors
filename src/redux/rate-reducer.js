import C from "./constants";
import { color } from "./color-reducer";

export const colors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_COLOR:
      return [...state, color({}, action)];
    case C.RATE_COLOR:
      return state.map(c => color(c, action));
    case C.REMOVE_COLOR:
      return state.filter(c => c.id !== action.id);
    default:
      return state;
  }
};

export const removeColor = id => ({
  type: C.REMOVE_COLOR,
  id
});
export const rateColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id,
  rating
});
