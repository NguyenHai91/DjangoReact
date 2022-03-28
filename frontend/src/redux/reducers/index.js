
import { combineReducers } from 'redux';

import products from './products';
import product from './product';
import cart from './cart';
import user_data from './user';
import wishlist from './wishlist';
import categories from './categories';
import trend from './trend';
import featured from './featured';
import bestseller from './bestseller';


const reducer = combineReducers({
  products: products,
  product: product,
  cart: cart,
  wishlist: wishlist,
  user_data: user_data,
  categories: categories,
  trend: trend,
  bestseller: bestseller,
  featured: featured,
});

export default reducer;