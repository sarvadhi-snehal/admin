import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT,
  LOAD_USER,
  HEADER_COLOR,
  SIDEBAR_COLOR,
  OPEN_NOTIFICATION,
} from "../actions/type";

const initialState = {
  token: null,
  isAuthenticated: false,
  loading: true,
  user: null,
  headerColor: "#F39678",
  sidebarColor: "#ffffff",
  open: false,
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
    case OPEN_NOTIFICATION:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default reducer;
