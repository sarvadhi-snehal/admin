import { LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT } from "../actions/type";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      console.log(payload);
      return {
        ...state,
        // user: payload.user,
        // isAuthenticated: true,
        // loading: false,
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
