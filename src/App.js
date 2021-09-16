import { useEffect } from "react";
import "./custome.scss";
import ".//../node_modules/toastr/build/toastr.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Minimal from "./pages/Minimal";
import Layout from "./components/UI/Layout";
import Login from "./components/Login/Login";
import NotFound from "./pages/NotFound";
import RoutesList from "./RoutesList";
// redux
import { Provider } from "react-redux";
import store from "./Store";
import { loaduser } from "./Store";
import Spinner from "./components/Spinner";
function App() {
  useEffect(() => {
    store.dispatch(loaduser());
  }, []);
  return (
    <Provider store={store}>
      <div className="App bg-light">
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />

            <Layout>
              <RoutesList />
            </Layout>
            <Route exact path="/notfound" component={NotFound} />
            <Route path="*" component={NotFound} />
          </Switch>

          {/* <Route path="*" component={Login} /> */}
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
