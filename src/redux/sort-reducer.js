import C from "./constants";

export const sort = (state = "SORTED_BY_DATE", action) => {
  switch (action.type) {
    case C.SORT_COLORS:
      return action.sortBy;
    default:
      return state;
  }
};

export const sortColors = sortedBy =>
  sortedBy === "SORTED_BY_RATING"
    ? {
        type: C.SORT_COLORS,
        sortBy: "SORTED_BY_RATING"
      }
    : sortedBy === "SORTED_BY_TITLE"
    ? {
        type: C.SORT_COLORS,
        sortBy: "SORTED_BY_TITLE"
      }
    : {
        type: C.SORT_COLORS,
        sortBy: "SORTED_BY_DATE"
      };
