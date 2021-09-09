import GoogleLogin from "react-google-login";
import { useContext } from "react";
import { withRouter, useLocation } from "react-router-dom";
import React from "react";
import ContextProvider from "../../Store";
function GoogleSignin({ history }) {
  const location = useLocation();
  const { dispatch } = useContext(ContextProvider);

  const responseGoogle = (response) => {
    console.log(response);
    const userObj = {
      token: response.Zb,
      user: response.profileObj,
      history,
      pathname: location.pathname,
    };
    dispatch({ type: "login", payload: userObj });
  };
  const responseGoogleError = (response) => {
    alert(`Something went wrong, login again`);
  };
  return (
    <GoogleLogin
      clientId="962281289281-o8jti4ni3imnsljch6j4i4pqp6ppb4mb.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogleError}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
}

export default withRouter(GoogleSignin);
