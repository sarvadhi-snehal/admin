import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT,
  LOAD_USER,
  HEADER_COLOR,
  SIDEBAR_COLOR,
  OPEN_NOTIFICATION,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_USERS,
} from "../actions/type";

const initialState = {
  loading: true,
  user: [],
  isAuthenticated: false,

  headerColor: "#F39678",
  sidebarColor: "#ffffff",
  open: false,
  users: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("profile", JSON.stringify(action.data));
      return {
        ...state,
        user: action.data,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAILURE:
    case LOG_OUT:
      localStorage.removeItem("profile");
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
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case UPDATE_USER:
      console.log("updateduser", payload);
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === payload._id ? payload : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== payload),
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};

export default reducer;
