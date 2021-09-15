import {
  LOGIN_SUCCESS,
  LOG_OUT,
  LOAD_USER,
  HEADER_COLOR,
  SIDEBAR_COLOR,
} from "./type";

export const loaduser = () => (dispatch) => {
  if (localStorage.getItem("userObj")) {
    let userObj = localStorage.getItem("userObj");

    dispatch({
      type: LOAD_USER,
      payload: JSON.parse(userObj),
    });
  } else {
    return;
  }
};

export const login = (userObj) => (dispatch) => {
  localStorage.setItem("userObj", JSON.stringify(userObj));
  dispatch({
    type: LOGIN_SUCCESS,
    payload: userObj,
  });
  dispatch(loaduser());
};

export const logout = (userObj) => (dispatch) => {
  localStorage.removeItem("userObj");
  dispatch({
    type: LOG_OUT,
  });
};

export const panelColor = (getColor) => (dispatch) => {
  dispatch({
    type: HEADER_COLOR,
    payload: getColor,
  });
};

export const sideBar = (getColor) => (dispatch) => {
  dispatch({
    type: SIDEBAR_COLOR,
    payload: getColor,
  });
};
