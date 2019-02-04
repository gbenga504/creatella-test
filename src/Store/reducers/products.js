import * as Types from "../types";

const initialState = {
  loading: false,
  error: null,
  fetchingMore: false,
  data: []
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        fetchingMore: false,
        data: state.data || []
      };
    case Types.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        fetchingMore: false,
        data: state.data || []
      };
    case Types.FETCH_PRODUCTS_FULFILLED:
      return {
        ...state,
        loading: false,
        error: null,
        fetchingMore: false,
        data: action.payload
      };
    default:
      return state;
  }
};
