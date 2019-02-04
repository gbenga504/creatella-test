import * as Types from "../types";
import API from "../../Services/Api.services";

export const fetchProductsPending = () => ({
  type: Types.FETCH_PRODUCTS_PENDING
});

export const fetchProductsError = error => ({
  type: Types.FETCH_PRODUCTS_ERROR,
  error
});

export const fetchProductsFulfilled = payload => ({
  type: Types.FETCH_PRODUCTS_FULFILLED,
  payload
});

export const fetchProducts = params => dispatch => {
  dispatch(fetchProductsPending());
  return API({ params })
    .then(data => dispatch(fetchProductsFulfilled(data)))
    .catch(error => dispatch(fetchProductsError(error)));
};
