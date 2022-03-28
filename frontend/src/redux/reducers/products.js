
import * as types from '../ActionTypes';

let initialState = [];

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_PRODUCT:
      state = [];
      state = action.products;
      return [...state];
    case types.GET_PRODUCTS_WITH_CATEGORY:
      state = [];
      state = action.products;
      return [...state];
    case types.GET_PRODUCTS_WITH_CATEGORY:
      state = [];
      state = action.products;
      return [...state];
    case types.GET_DIFFER_PRODUCTS_WITH_CATEGORY:
      state = [];
      state = action.products;
      return [...state];
    default:
      return state;
  }
};

export default reducer;