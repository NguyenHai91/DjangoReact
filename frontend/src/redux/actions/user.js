
import * as types from '../ActionTypes';
import axios from 'axios';
import { apiURL } from '../../constants/config';
import { callApi } from '../../utils/apiServices';



export const login = (user) => {
  return async dispatch => {
    return callApi(`${apiURL}users/login/`, 'POST', user).then(res => {
      if (res.status === 200) {
        dispatch({
          type: types.LOGIN,
          data: res.data,
        });
        callApi(`${apiURL}cart/`, 'GET', null).then(res => {
          dispatch({
            type: types.GET_CART,
            data: res.data,
          });
        }).catch(error => {});
        callApi(`${apiURL}wishlist/`, 'GET', null).then(res => {
          dispatch({
            type: types.GET_WISHLIST,
            data: res.data,
          });
        }).catch(error => {});
      }
    }).catch(error => {});
  }
};

export const logout = () => {
  return async dispatch => {
    return callApi(`${apiURL}users/logout/`, 'PUT', null).then(res => {
      if (res.status === 200) {
        dispatch({
          type: types.LOGOUT,
        });
        dispatch({
          type: types.GET_CART,
          data: {'items': [], 'totalAmount': 0, 'numItems': 0},
        });
        dispatch({
          type: types.GET_WISHLIST,
          data: {'wishlist_items': [], 'count_items': 0},
        });
      }
    }).catch(error => {});
  }
};