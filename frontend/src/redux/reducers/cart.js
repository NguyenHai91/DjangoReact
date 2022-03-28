
import * as types from '../ActionTypes';


let updateCart = (cart_data) => {
  let cart = {'items': [], 'totalAmount': 0.0, 'numItems': 0, 'totalTax': 0.0};
  cart.items = cart_data.cart_items;
  cart.totalAmount = cart_data.total_amount;
  cart.numItems = cart_data.num_item;
  cart.totalTax = cart_data.tax_total;
  return cart;
};

let initialState = {'items': [], 'totalAmount': 0.0, 'numItems': 0, 'totalTax': 0.0};

let reducer = (state = initialState, action) => {

  switch (action.type) {
    case types.GET_CART:
      if (action.data) {
        state = updateCart(action.data);
      }
      return {...state};
    case types.ADD_PRODUCT_TO_CART:
      if (action.data) {
        state = updateCart(action.data);
      }
      return {...state};
    case types.DELETE_ITEM_IN_CART:
      if (action.data) {
        state = updateCart(action.data);
      }
      return {...state};
    case types.UPDATE_QUANTITY_ITEM:
      if (action.data) {
        state = updateCart(action.data);
      }
      return {...state};
    case types.CHECKOUT_SUCCESS:
      state.items = [];
      state.totalAmount = 0.0;
      state.numItems = 0;
      return {...state};
    default:
      return state;
  }
};

export default reducer;