
import * as types from '../ActionTypes';
import axios from 'axios';
import { apiURL } from '../../constants/config';
import { callApi } from '../../utils/apiServices';


export const requestListProducts = () => {
  return async dispatch => {
    return callApi(`${apiURL}products/list/`, 'GET',null).then(res => {
      dispatch({
        type: types.LIST_PRODUCT,
        products: res.data,
      });
    }).catch(error => {});
  }
};

export const getProduct = (id) => {
  return async dispatch => {
    return callApi(`${apiURL}products/${id}/`, 'GET',null).then(res => {
      dispatch({
        type: types.GET_PRODUCT,
        product: res.data,
      });
    }).catch(error => {});
  }
};


export const getProductsWithCategory = (id_category) => {
  return async dispatch => {
    return callApi(`${apiURL}products/category/${id_category}/details/`, 'GET',null).then(res => {
      dispatch({
        type: types.GET_PRODUCTS_WITH_CATEGORY,
        products: res.data
      })
    });
  }
};

export const getProductWithNameCategory = (name_category) => {
  return async dispatch => {
    return callApi(`${apiURL}products/category/${name_category}/`, 'GET',null).then(res => {
      dispatch({
        type: types.GET_PRODUCTS_WITH_CATEGORY,
        products: res.data
      });
    });
  }
};

export const getDifferProductWithCategory = (id_category) => {
  return async dispatch => {
    return callApi(`${apiURL}products/category/${id_category}/`, 'GET',null).then(res => {
      dispatch({
        type: types.GET_DIFFER_PRODUCTS_WITH_CATEGORY,
        products: res.data
      })
    });
  }
};


export const getProductsTrend = () => {
  return async dispatch => {
    return callApi(`${apiURL}products/high-view/`, 'GET',null).then(res => {
      dispatch({
        type: types.GET_PRODUCTS_HIGH_VIEW,
        trend: res.data
      });
    });
  };
};

export const getProductsBestSeller = () => {
  return async dispatch => {
    return callApi(`${apiURL}products/bestseller/`, 'GET',null).then(res => {
      dispatch({
        type: types.GET_PRODUCTS_BEST_SELLER,
        bestseller: res.data
      });
    });
  };
};

export const getProductsFeatured = () => {
  return async dispatch => {
    return callApi(`${apiURL}products/newest/`, 'GET',null).then(res => {
      dispatch({
        type: types.GET_PRODUCTS_FEATURED,
        featured: res.data
      });
    });
  };
};