import { LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT } from "./type";

export const login = (userObj) => async (dispatch) => {
  console.log(userObj);
  try {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: userObj,
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const logout = (userObj) => async (dispatch) => {
  try {
    dispatch({
      type: LOG_OUT,
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};
