import { useContext, useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import contextProvider from "../Store";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(contextProvider);
  const { isAuthenticated } = state;
  const history = useHistory();
  console.log(state);

  !isAuthenticated && history.push("/");

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRoute;
