import { useReducer, useEffect } from "react";
import "./custome.scss";
import "./App.scss";

import Layout from "./components/UI/Layout";
import Login from "./components/Login/Login";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import RoutesList from "./RoutesList";
import { loaduser } from "./Store";
// redux
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  useEffect(() => {
    store.dispatch(loaduser());
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />

            <Layout>
              <RoutesList />
            </Layout>
          </Switch>

          {/* <Route path="*" component={Login} /> */}
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
