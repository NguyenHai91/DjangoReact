
import * as types from '../ActionTypes';
import axios from 'axios';
import { apiURL } from '../../constants/config';
import { callApi } from '../../utils/apiServices';



export const getListCategory = () => {
  return async dispatch => {
    return callApi(`${apiURL}category/list/`, 'GET',null).then(res => {
      dispatch({
        type: types.GET_LIST_CATEGORY,
        data: res.data
      });
    });
  }
};

export const getSubCategories = (id_category) => {
  return async dispatch => {
    return callApi(`${apiURL}category/${id_category}/subs/`, 'GET',null).then(res => {
      dispatch({
        type: types.GET_LIST_CATEGORY,
        data: res.data
      });
    });
  }
};