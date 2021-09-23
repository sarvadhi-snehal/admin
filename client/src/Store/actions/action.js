import axios from "axios";
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

export const handleClick = (newState) => (dispatch) => {
  dispatch({
    type: OPEN_NOTIFICATION,
  });
};

export const signup = (formData, history) => async (dispatch) => {
  console.log(formData);
  try {
    //sed to server config
    history.push("/");
  } catch (error) {}
};
export const signin = (formData, history) => async (dispatch) => {
  console.log(formData);
  try {
    //sed to server config
    history.push("/");
  } catch (error) {}
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
    const res = await axios.post(
      "http://localhost:4000/api/users/create",
      formData
    );
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
    await axios.delete(`http://localhost:4000/api/users/${id}`);

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
    const res = await axios.post(
      "http://localhost:4000/api/users/editUser",
      updatedUser
    );
    console.log("response", res.data);
    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    });
  } catch (error) {}
};

export const getUsers = () => async (dispatch) => {
  const res = await axios.get("http://localhost:4000/api/users");
  console.log(res.data);
  try {
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (error) {}
};
