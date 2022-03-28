
import * as types from '../ActionTypes';

let initialState = [];

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_BEST_SELLER:
      state = [];
      state = action.bestseller;
      return [...state];
    default:
      return state;
  }
};

export default reducer;