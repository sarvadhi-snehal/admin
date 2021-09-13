import { useReducer, useEffect } from "react";
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
import Chat from "./pages/Chat";
import SupportTickets from "./pages/SupportTickets";
import ContactEmployee from "./pages/ContactEmployee";

import { ContextProvider, reducer, initialState } from "./Store";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";
import ContactGrid from "./pages/ContactGrid";
import ContactDetail from "./pages/ContactDetail";
import { Loading } from "./pages/Loading";
import Inbox from "./pages/Inbox";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const responseGoogle = (response) => {
    console.log(response);
    const userObj = {
      token: response.Zb,
      user: response.profileObj,
    };
    dispatch({ type: "login", payload: userObj });
  };
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider value={{ state, dispatch, responseGoogle }}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/loading" component={Loading} />
            <Layout>
              <PrivateRoute exact path="/" component={Minimal} />
              <PrivateRoute exact path="/analytical" component={Analytical} />
              <PrivateRoute
                exact
                path="/demographical"
                component={Demographical}
              />
              <PrivateRoute exact path="/morden" component={Morden} />
              <PrivateRoute exact path="/chat" component={Chat} />
              <PrivateRoute exact path="/support" component={SupportTickets} />
              <PrivateRoute exact path="/contact" component={ContactEmployee} />
              <PrivateRoute exact path="/contact2" component={ContactGrid} />
              <PrivateRoute exact path="/contact3" component={ContactDetail} />
              <PrivateRoute exact path="/mailbox" component={Inbox} />
            </Layout>
          </Switch>

          {/* <Route path="*" component={Login} /> */}
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
