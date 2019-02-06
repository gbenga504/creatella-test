import * as Types from "../types";
import API from "../../Services/Api.services";
import { getQueryParams } from "../../utils";

/**
 * This is a mini global store which we use in our application to store pre-emptive data
 * that would later be used by the application
 */
let CACHED_STORE = {};

/**
 * -----***----- CORE CONCEPT OF THE PRE-EMPTIVE FETCH MORE DATA FUNCTION -----***------
 * Initially, we should use the Link (preload) functionality native to browsers with the as attribute set to "fetch"
 * However, the potential problem with this approach is that
 *
 * -> The problems of CORS
 * -> Not supported by all browsers
 *
 * Therefore we resort to solving this problem using the JavaScript fetch API
 * So anytime a user scrolls to the bottom of the page, loads the page or chooses a sort, we load the next page data
 * preemptively. After which we save the loaded data in a local cache (CACHED_STORE).
 *
 * We reset CACHED_STORE everytime a page is loaded or a new sort item is choosen
 * N:B -> Attempting not to store the preemptive loaded data in a local cache still forces the browser to send
 * a query to the server. However, the server returns a 304(not modified) and 204(no content) HTTP header
 * We consider this to be wasteful since a query is still being sent to the server, so we curb this using a local cache
 */

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

/**
 * This function helps in loading the next data preemptively by sending a query and
 * rewiriting content to Cached store
 * @param {object} params
 */
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

  //reset cached store if the request is not a load more request
  let key = getQueryParams(params);
  !isFetchMoreRequest && (CACHED_STORE = {});

  //check if the query has been loaded preemptively and load from cached store if true
  //else attempt to send a query to the API
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
