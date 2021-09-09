import React, { useReducer, createContext, useCallback } from "react";

const loginContext = createContext(null);
export default loginContext;

export const ContextProvider = loginContext.Provider;

export const initialState = {
  token: null,
  isAuthenticated: null,
  loading: true,
  user: null,
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "login":
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

// function ProfileContextProvider(props) {
//   let [profile, profileR] = React.useReducer(reducer, initialState);

//   const onReloadNeeded = useCallback(async () => {
//     const profileData = await reloadProfile();
//     profileR({
//       type: "profileReady",
//       payload: profileData
//     });
//   }, []);

//   useEffect(() => {
//     onReloadNeeded();
//   }, []);

//   return (
//     <ProfileContext.Provider value={{ onReloadNeeded, profile }}>
//       {props.children}
//     </ProfileContext.Provider>
//   );
// }
