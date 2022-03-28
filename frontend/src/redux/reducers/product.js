
import * as types from '../ActionTypes';

let initialState = null;

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT:
      state = action.product;
      return state;
    default:
      return state;
  }
};

export default reducer;