import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT,
  LOAD_USER,
  HEADER_COLOR,
  SIDEBAR_COLOR,
} from "../actions/type";

const initialState = {
  token: null,
  isAuthenticated: false,
  loading: true,
  user: null,
  headerColor: "#F39678",
  sidebarColor: "#ffffff",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,

        token: payload.token,
        user: payload.user,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAILURE:
    case LOG_OUT:
      return {
        ...state,

        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case HEADER_COLOR:
      return {
        ...state,
        headerColor: payload,
      };
    case SIDEBAR_COLOR:
      return {
        ...state,
        sidebarColor: payload,
      };
    default:
      return state;
  }
};

export default reducer;
