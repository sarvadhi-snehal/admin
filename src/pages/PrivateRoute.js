import { useContext } from "react";
import { Route, useLocation, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({ children, ...rest }) => {
  const state = useSelector((state) => state);
  const { isAuthenticated, loading } = state;
  console.log(isAuthenticated);
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
