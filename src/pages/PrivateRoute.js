import { useContext } from "react";
import { Route, useHistory, Redirect } from "react-router-dom";
import contextProvider from "../Store";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    state: { isAuthenticated },
  } = useContext(contextProvider);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
