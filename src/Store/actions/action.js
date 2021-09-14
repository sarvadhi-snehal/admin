import { LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT, LOAD_USER } from "./type";

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
