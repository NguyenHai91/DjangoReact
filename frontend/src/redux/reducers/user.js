
import * as types from '../ActionTypes';


const user = localStorage.getItem('user');
const token = localStorage.getItem('token') ;
const refresh = localStorage.getItem('refresh');
let user_data = {'user': null, 'token': null, 'refresh': null};
if (user && token && refresh) {
 user_data.user = user;
 user_data.token = token;
 user_data.refresh = refresh;
}
let initialState = user_data;

let reducer = (state = initialState, action) => {
  switch (action.type)
  {
    case types.LOGIN:
      const data = action.data;
      localStorage.setItem('user', data.user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('refresh', data.refresh);
      
      state.user = data.user;
      state.token = data.token;
      state.refresh = data.refresh;
      return {...state};
    case types.LOGOUT:
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('refresh');

      state.user = null;
      state.token = null;
      state.refresh = null;
      return {...state};
    default:
      return state;
  }
}

export default reducer;