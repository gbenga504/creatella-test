import * as Types from "../types";

const initialState = {
  loading: false,
  error: null,
  fetchingMore: false,
  data: [],
  hasEndBeenReached: false,
  advertTargetIndex: 20
};

const advert = {
  title: "Products Grid",
  isAdvert: true,
  description:
    "Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.",
  sponsorsText: "But first, a word from our sponsors:"
};

function insertAdvert(state, action, isInitialFetch) {
  let data = isInitialFetch
      ? action.payload
      : [...state.data, ...action.payload],
    advertTargetIndex = isInitialFetch ? 20 : state.advertTargetIndex;

  if (data.length >= state.advertTargetIndex) {
    data = [
      ...data.slice(0, state.advertTargetIndex),
      { ...advert, generatedImageRef: Math.floor(Math.random() * 1000) },
      ...data.slice(state.advertTargetIndex)
    ];
    advertTargetIndex = state.advertTargetIndex + 20;
  }

  return { data, advertTargetIndex };
}

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
      let { data: _data, advertTargetIndex: _advertTargetIndex } = insertAdvert(
        state,
        action,
        true
      );
      return {
        ...state,
        loading: false,
        error: null,
        fetchingMore: false,
        hasEndBeenReached: action.payload.length === 0 ? true : false,
        data: _data,
        advertTargetIndex: _advertTargetIndex
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
      let { data, advertTargetIndex } = insertAdvert(state, action);
      return {
        ...state,
        loading: false,
        error: null,
        fetchingMore: false,
        hasEndBeenReached: action.payload.length === 0 ? true : false,
        data,
        advertTargetIndex
      };
    default:
      return state;
  }
};
