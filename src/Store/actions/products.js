import * as Types from "../types";
import API from "../../Services/Api.services";

export const fetchProductsPending = isFetchRequest => ({
  type: isFetchRequest
    ? Types.FETCH_MORE_PRODUCTS_PENDING
    : Types.FETCH_PRODUCTS_PENDING
});

export const fetchProductsError = error => ({
  type: Types.FETCH_PRODUCTS_ERROR,
  error
});

export const fetchProductsFulfilled = (payload, isFetchRequest) => ({
  type: isFetchRequest
    ? Types.FETCH_MORE_PRODUCTS_FULFILLED
    : Types.FETCH_PRODUCTS_FULFILLED,
  payload
});

export const fetchProducts = (params, isFetchRequest) => dispatch => {
  dispatch(fetchProductsPending(isFetchRequest));
  return API({ params })
    .then(data => dispatch(fetchProductsFulfilled(data, isFetchRequest)))
    .catch(error => dispatch(fetchProductsError(error)));
};
