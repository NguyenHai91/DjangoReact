
import * as types from '../ActionTypes';

let initialState = [];

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_FEATURED:
      state = [];
      state = action.featured;
      return [...state];
    default:
      return state;
  }
};

export default reducer;