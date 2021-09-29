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
import PrivateRoute from "./pages/PrivateRoute";
const PrivateRoutesList = () => {
  const state = useSelector((state) => state);

  if (state.loading) <Spinner />;
  return (
    <>
      <PrivateRoute exact path="/">
        <Minimal />
      </PrivateRoute>

      <PrivateRoute path="/analytical">
        <Analytical />
      </PrivateRoute>

      <PrivateRoute exact path="/demographical">
        <Demographical />
      </PrivateRoute>
      <PrivateRoute exact path="/morden">
        <Morden />
      </PrivateRoute>
      <PrivateRoute exact path="/chat">
        <Chat />
      </PrivateRoute>
      <PrivateRoute exact path="/support">
        <SupportTickets />
      </PrivateRoute>

      <PrivateRoute exact path="/contact">
        <ContactEmployee />
      </PrivateRoute>
      <PrivateRoute exact path="/contact2">
        <ContactGrid />
      </PrivateRoute>
      <PrivateRoute exact path="/contact3">
        <ContactDetail />
      </PrivateRoute>
      <PrivateRoute exact path="/mailbox">
        <Inbox />
      </PrivateRoute>
      <PrivateRoute exact path="/mailboxdetail">
        <MailBoxDetail />
      </PrivateRoute>
      <PrivateRoute exact path="/composemail">
        <ComposeMail />
      </PrivateRoute>
      <PrivateRoute exact path="/calender">
        <Calender />
      </PrivateRoute>
      <PrivateRoute exact path="/users">
        <Usermanagement />
      </PrivateRoute>
    </>
  );
};

export default PrivateRoutesList;
