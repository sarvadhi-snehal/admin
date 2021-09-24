import GoogleLogin from "react-google-login";
import { withRouter } from "react-router-dom";
import React from "react";
// import ContextProvider from "../../Store";
function GoogleSignin({ responseGoogle }) {
  const responseGoogleError = (_response) => {
    alert(`Something went wrong, login again`);
  };

  return (
    <GoogleLogin
      clientId="962281289281-o8jti4ni3imnsljch6j4i4pqp6ppb4mb.apps.googleusercontent.com"
      buttonText="Login with Google"
      render={(renderProps) => (
        <button className="btn btn-white shadow " onClick={renderProps.onClick}>
          Login with Google
        </button>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogleError}
      cookiePolicy={"single_host_origin"}
      // isSignedIn={true}
    />
  );
}

export default withRouter(GoogleSignin);
