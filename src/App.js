import { useReducer } from "react";
import "./custome.scss";
import "./App.scss";
import Minimal from "./pages/Minimal";
import Home from "./pages/Home";
import Analytical from "./pages/Analytical";
import Footer from "./components/Footer";
import Layout from "./components/UI/Layout";
import Login from "./components/Login/Login";
import Demographical from "./pages/Demographical";
import Morden from "./pages/Morden";
import { ContextProvider, reducer, initialState } from "./Store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isAuthenticated } = state;
  console.log(isAuthenticated);

  return (
    <BrowserRouter>
      <ContextProvider value={{ state, dispatch }}>
        <Switch>
          <Route exact path="/" component={Login} />

          <Layout>
            <PrivateRoute exact path="/minimal" component={Minimal} />
            <PrivateRoute exact path="/analytical" component={Analytical} />
            <PrivateRoute
              exact
              path="/demographical"
              component={Demographical}
            />
            <PrivateRoute exact path="/morden" component={Morden} />
            {/* <Footer /> */}
          </Layout>
        </Switch>

        {/* <Route path="*" component={Login} /> */}
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
