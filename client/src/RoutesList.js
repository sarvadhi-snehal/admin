import ContactGrid from "./pages/ContactGrid";
import ContactDetail from "./pages/ContactDetail";
import Inbox from "./pages/Inbox";
import MailBoxDetail from "./pages/MailBoxDetail";
import ComposeMail from "./pages/ComposeMail";
import Demographical from "./pages/Demographical";
import Morden from "./pages/Morden";
import Chat from "./pages/Chat";
import SupportTickets from "./pages/SupportTickets";
import ContactEmployee from "./pages/ContactEmployee";
import Minimal from "./pages/Minimal";
import Analytical from "./pages/Analytical";
import Calender from "./pages/Calender";
import Usermanagement from "./pages/UerList";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";
const RoutesList = () => {
  const state = useSelector((state) => state);
  console.log(state);

  if (state.loading) <Spinner />;
  return (
    <>
      <Route exact path="/">
        <Minimal />
      </Route>

      <Route path="/analytical">
        <Analytical />
      </Route>

      <Route exact path="/demographical">
        <Demographical />
      </Route>
      <Route exact path="/morden">
        <Morden />
      </Route>
      <Route exact path="/chat">
        <Chat />
      </Route>
      <Route exact path="/support">
        <SupportTickets />
      </Route>

      <Route exact path="/contact">
        <ContactEmployee />
      </Route>
      <Route exact path="/contact2">
        <ContactGrid />
      </Route>
      <Route exact path="/contact3">
        <ContactDetail />
      </Route>
      <Route exact path="/mailbox">
        <Inbox />
      </Route>
      <Route exact path="/mailboxdetail">
        <MailBoxDetail />
      </Route>
      <Route exact path="/composemail">
        <ComposeMail />
      </Route>
      <Route exact path="/calender">
        <Calender />
      </Route>
      <Route exact path="/users">
        <Usermanagement />
      </Route>
    </>
  );
};

export default RoutesList;
