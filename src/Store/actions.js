import * as Types from "./types";

export const addFacesToCart = id => ({
  type: Types.ADD_TO_CART,
  id
});

export const removeFacesFromCart = id => ({
  type: Types.REMOVE_FROM_CART,
  id
});
