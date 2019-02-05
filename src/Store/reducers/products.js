import * as Types from "../types";

const initialState = {
  loading: false,
  error: null,
  fetchingMore: false,
  data: [],
  hasEndBeenReached: false
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        fetchingMore: false,
        hasEndBeenReached: false,
        data: state.data || []
      };
    case Types.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        fetchingMore: false,
        hasEndBeenReached: state.hasEndBeenReached,
        data: state.data || []
      };
    case Types.FETCH_PRODUCTS_FULFILLED:
      return {
        ...state,
        loading: false,
        error: null,
        fetchingMore: false,
        hasEndBeenReached: action.payload.length === 0 ? true : false,
        data: action.payload
      };
    case Types.FETCH_MORE_PRODUCTS_PENDING:
      return {
        ...state,
        loading: false,
        error: null,
        hasEndBeenReached: state.hasEndBeenReached,
        fetchingMore: true,
        data: state.data
      };
    case Types.FETCH_MORE_PRODUCTS_FULFILLED:
      return {
        ...state,
        loading: false,
        error: null,
        fetchingMore: false,
        hasEndBeenReached: action.payload.length === 0 ? true : false,
        data: [...state.data, ...action.payload]
      };
    default:
      return state;
  }
};
