import * as Types from "../types";
import API from "../../Services/Api.services";
import { getQueryParams } from "../../utils";

let CACHED_STORE = {};

export const fetchProductsPending = isFetchMoreRequest => ({
  type: isFetchMoreRequest
    ? Types.FETCH_MORE_PRODUCTS_PENDING
    : Types.FETCH_PRODUCTS_PENDING
});

export const fetchProductsError = error => ({
  type: Types.FETCH_PRODUCTS_ERROR,
  error
});

export const fetchProductsFulfilled = (payload, isFetchMoreRequest) => ({
  type: isFetchMoreRequest
    ? Types.FETCH_MORE_PRODUCTS_FULFILLED
    : Types.FETCH_PRODUCTS_FULFILLED,
  payload
});

function loadMoreDataPreemptively(params) {
  API({
    params: { ...params, _page: params._page + 1 }
  }).then(_response => {
    CACHED_STORE[
      getQueryParams({ ...params, _page: params._page + 1 })
    ] = _response;
  });
}

export const fetchProducts = (params, isFetchMoreRequest) => dispatch => {
  dispatch(fetchProductsPending(isFetchMoreRequest));

  let key = getQueryParams(params);
  !isFetchMoreRequest && (CACHED_STORE = {});

  if (key in CACHED_STORE) {
    dispatch(fetchProductsFulfilled(CACHED_STORE[key], isFetchMoreRequest));
    loadMoreDataPreemptively(params);
  } else {
    return API({ params })
      .then(data => {
        loadMoreDataPreemptively(params);
        dispatch(fetchProductsFulfilled(data, isFetchMoreRequest));
      })
      .catch(error => dispatch(fetchProductsError(error)));
  }
};
