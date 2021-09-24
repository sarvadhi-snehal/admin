import axios from "axios";
import * as api from "../../API/index";
import {
  LOGIN_SUCCESS,
  LOG_OUT,
  LOAD_USER,
  HEADER_COLOR,
  SIDEBAR_COLOR,
  OPEN_NOTIFICATION,
  SIGN_UP,
  DELETE_USER,
  UPDATE_USER,
  CREATE_USER,
  GET_USERS,
} from "./type";

export const loadUser = () => (dispatch) => {
  if (localStorage.getItem("profile")) {
    let userObj = JSON.parse(localStorage.getItem("profile"));
    console.log(userObj);
    dispatch({
      type: LOAD_USER,
      payload: userObj,
    });
  } else {
    return;
  }
};

export const logout = (history) => (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
  history.push("/login");
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

export const handleClick = (newState) => (dispatch) => {
  dispatch({
    type: OPEN_NOTIFICATION,
  });
};

export const signup = (values, history) => async (dispatch) => {
  const formData = new FormData();
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("password", values.password);
  formData.append("password2", values.password2);
  formData.append("avatar", values.avatar);

  try {
    const { data } = await api.signup(formData);

    console.log("action", data);
    dispatch({
      type: LOGIN_SUCCESS,
      data,
    });
    history.push("/");
  } catch (error) {
    console.error(error);
  }
};
export const signin =
  (formData, history, isGoogleSignin = false) =>
  async (dispatch) => {
    console.log("google login", formData);

    try {
      let data;
      if (isGoogleSignin) {
        data = formData;
      } else {
        const res = await api.signin(formData);
        data = res.data;
      }
      dispatch({
        type: LOGIN_SUCCESS,
        data,
      });
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

export const createUser = (user) => async (dispatch) => {
  try {
    //to server

    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("age", user.age);
    formData.append("avatar", user.avatar);
    // console.log(formData.get("avatar"));
    const res = await axios.post("/api/users/create", formData);
    console.log("datar", res.data);
    dispatch({
      type: CREATE_USER,
      payload: res.data.user,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/users/${id}`);

    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const editUser = (user) => async (dispatch) => {
  const updatedUser = new FormData();
  Object.entries(user).forEach(([key, value]) => {
    updatedUser.append(key, value);
  });

  try {
    const res = await axios.post("/api/users/editUser", updatedUser);
    console.log("response", res.data);
    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    });
  } catch (error) {}
};

export const getUsers = () => async (dispatch) => {
  const res = await axios.get("/api/users");
  console.log(res.data);
  try {
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (error) {}
};
