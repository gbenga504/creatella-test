import * as cart from "./cart";
import { combineReducers } from "redux";

export const appReducers = combineReducers({
  ...cart
});
