
import { apiURL } from '../constants/config';
import axios from 'axios';


export function callApi(endpoint, method='GET', data) {
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.defaults.withCredentials = true;
  return axios({
    method: method,
    url: `${endpoint}`,
    data: data
  }).catch(error => {});
};
