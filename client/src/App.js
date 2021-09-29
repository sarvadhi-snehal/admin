import { useEffect } from "react";
import "./custome.scss";
import ".//../node_modules/toastr/build/toastr.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/UI/Layout";
import Login from "./components/Login/Login";
import NotFound from "./pages/NotFound";
import RoutesList from "./RoutesList";
// redux
import { useDispatch } from "react-redux";
import { loadUser } from "./Store/actions/action";

import Signup from "./components/Login/SignUp";
// import PrivateRoute from "./pages/PrivateRoute";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <div className="App  ">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Layout>
            <RoutesList />
          </Layout>
          <Route exact path="/notfound" component={NotFound} />
          <Route path="*" component={NotFound} />
        </Switch>

        {/* <Route path="*" component={Login} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
