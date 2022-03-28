
import * as types from '../ActionTypes';
import axios from 'axios';
import Cookies from 'js-cookie';
import { apiURL } from '../../constants/config';
import { callApi } from '../../utils/apiServices';



export const getCart = () => {

  return async dispatch => {
    // return callApi(`${apiURL}cart/`, 'GET', null).then(res => {
    //   dispatch({
    //     type: types.GET_CART,
    //     data: res.data,
    //   });
    // }).catch(error => {});
    return axios.get(`${apiURL}cart/`,  null).then(res => {
      dispatch({
        type: types.GET_CART,
        data: res.data
      });
    }).catch(error => {});
  };
};

export const deleteItemInCart = (id_item) => {
  const data = {'id_item': id_item};
  return async dispatch => {
    return callApi(`${apiURL}cart/delete/`, 'DELETE', data).then(res => {
      dispatch({
        type: types.DELETE_ITEM_IN_CART,
        data: res.data,
      });
    }).catch(error => {});
  };
};

export const addProductToCart = (id) => {
  return async dispatch => {
    const data = {
      'id': id,
      'quantity': 1,
    };
    return callApi(`${apiURL}cart/add/`, 'POST', data).then(res => {
      if (res && res.data) {
        dispatch({
          type: types.ADD_PRODUCT_TO_CART,
          data: res.data,
        });
      }
    }).catch(error => {});
  };
};

export const updateQuantityItem = (id_item, quantity) => {
  return async dispatch => {
    const data = {
      'id_item': id_item,
      'quantity': quantity,
    };
    return callApi(`${apiURL}cart/update/`, 'PUT', data).then(res => {
      dispatch({
        type: types.UPDATE_QUANTITY_ITEM,
        data: res.data,
      });
    }).catch(error => {});
  }
};

export const checkout = (data) => {
  return dispatch => {
    return callApi(`${apiURL}checkout/`, 'POST',data).then(res => {
      dispatch({
        type: types.CHECKOUT_SUCCESS,
      })
    });
  }
};