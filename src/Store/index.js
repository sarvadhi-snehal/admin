import React, { useReducer, createContext } from "react";

const loginContext = createContext(null);
export default loginContext;

export const ContextProvider = loginContext.Provider;

export const initialState = {
  token: null,
  isAuthenticated: false,
  loading: true,
  user: null,
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "login":
      payload.history.push("/minimal");
      return {
        token: payload.token,
        user: payload.user,
        isAuthenticated: true,
        loading: false,
      };
    case "login_fail":
    case "logout":
      // payload.history.push("/");
      return {
        token: null,
        isAuthenticated: false,
        loading: true,
        user: null,
      };
    default:
      return state;
  }
};
