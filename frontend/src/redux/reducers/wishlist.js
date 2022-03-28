import * as types from '../ActionTypes';


let updateWishlist = (wishlist_data) => {
  let wishlist = {'items': [], 'count': 0};
  wishlist.items = wishlist_data.wishlist_items;
  wishlist.count = wishlist_data.count_items;
  return wishlist;
};

let initialState = {'items': [], 'count': 0};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WISHLIST:
      if (action.data) {
        state = updateWishlist(action.data);
      }
      return {...state};
    case types.ADD_PRODUCT_TO_WISHLIST:
      if (action.data) {
        state = updateWishlist(action.data);
      }
      return {...state};
    case types.DELETE_ITEM_IN_WISHLIST:
      if (action.data) {
        state = updateWishlist(action.data);
      }
      return {...state};
    default:
      return state;
  }
};

export default reducer;