import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT,
  LOAD_USER,
} from "../actions/type";

const initialState = {
  token: null,
  isAuthenticated: false,
  loading: true,
  user: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      console.log(payload);
      return {
        token: payload.token,
        user: payload.user,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      console.log(payload);
      return {
        token: payload.token,
        user: payload.user,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAILURE:
    case LOG_OUT:
      return {
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
