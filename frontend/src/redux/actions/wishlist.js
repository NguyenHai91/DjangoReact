
import * as types from '../ActionTypes';
import axios from 'axios';
import { apiURL } from '../../constants/config';
import { callApi } from '../../utils/apiServices';



export const getWishlist = () => {
  return async dispatch => {
    return callApi(`${apiURL}wishlist/`, 'GET',null).then(res => {
      dispatch({
        type: types.GET_WISHLIST,
        data: res.data
      })
    });
  }
};

export const addProductToWishlist = (idProduct) => {
  return async dispatch => {
    const data = { 'id': idProduct };
    return callApi(`${apiURL}wishlist/add/`, 'POST', data).then(res => {
      dispatch({
          type: types.ADD_PRODUCT_TO_WISHLIST,
          data: res.data,
        });
    });
  }
};

export const addWishlistToCart = (idProduct, idItem) => {
  return async dispatch => {
    const data = { 'id': idProduct };
    callApi(`${apiURL}cart/add/`, 'POST', data).then(res => {
      dispatch({
          type: types.ADD_PRODUCT_TO_CART,
          data: res.data,
      });
      const dataItem = {'id': idItem};
      callApi(`${apiURL}wishlist/delete/`, 'DELETE', dataItem).then(res => {
        dispatch({
            type: types.DELETE_ITEM_IN_WISHLIST,
            data: res.data,
        });
      });
    });
  }
};

export const deleteItemInWishlist = (idItem) => {
  return async dispatch => {
    const data = {'id': idItem };
    return callApi(`${apiURL}wishlist/delete/`, 'DELETE', data).then(res => {
      dispatch({
        type: types.DELETE_ITEM_IN_WISHLIST,
        data: res.data
      });
    });
  };
};