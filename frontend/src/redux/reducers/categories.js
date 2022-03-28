import * as types from '../ActionTypes';

let initialState = null;

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LIST_CATEGORY:
      state = action.data;
      return [...state];
    default:
      return state;
  }
};

export default reducer;