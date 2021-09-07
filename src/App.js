import "./custome.scss";
import "./App.scss";
import Minimal from "./pages/Minimal";
import Analytical from "./pages/Analytical";
import Footer from "./components/Footer";
import Layout from "./components/UI/Layout";
import Login from "./components/Login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route exact path="/minimal" component={Minimal} />
          <Route exact path="/analytical" component={Analytical} />
          <Footer />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
