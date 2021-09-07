import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import React from "react";
// import {login} from '../../Store/actions/action'
function GoogleSignin() {
  const history = useHistory();
  // const dispatch = useDispatch();
  const responseGoogle = (response) => {
    console.log(response);
    const userObj = {
      token: response.Zb,
      user: response.profileObj,
    };
    // dispatch(login(userObj))
    history.push({
      pathname: "/dashboard",
    });
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

export default GoogleSignin;
