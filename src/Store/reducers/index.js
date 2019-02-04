import * as cart from "./cart";
import * as products from "./products";
import { combineReducers } from "redux";

export const appReducers = combineReducers({
  ...cart,
  ...products
});
