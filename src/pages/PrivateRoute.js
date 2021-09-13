import { useContext } from "react";
import { Route, useHistory, Redirect } from "react-router-dom";
import contextProvider from "../Store";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(contextProvider);
  console.log(state);
  const { isAuthenticated, loading } = state;

  return (
    <Route
      {...rest}
      render={(props) => (
        // loading ? (
        //   <Redirect to="/loading" />
        // ) :
        <Component {...props} />
      )}
    />
  );
};

export default PrivateRoute;
