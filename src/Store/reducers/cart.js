import * as Types from "../types";

export const cart = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_TO_CART:
      return [...state, action.id];
    case Types.REMOVE_FROM_CART:
      let index = state.indexOf(action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
};
