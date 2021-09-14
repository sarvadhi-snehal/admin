import React from "react";
import PrivateRoute from "./pages/PrivateRoute";
import ContactGrid from "./pages/ContactGrid";
import ContactDetail from "./pages/ContactDetail";
import { Loading } from "./pages/Loading";
import Inbox from "./pages/Inbox";
import MailBoxDetail from "./pages/MailBoxDetail";
import ComposeMail from "./pages/ComposeMail";
import Demographical from "./pages/Demographical";
import Morden from "./pages/Morden";
import Chat from "./pages/Chat";
import SupportTickets from "./pages/SupportTickets";
import ContactEmployee from "./pages/ContactEmployee";
import Minimal from "./pages/Minimal";
import Home from "./pages/Home";
import Analytical from "./pages/Analytical";
import Footer from "./components/Footer";
const RoutesList = () => {
  return (
    <>
      <PrivateRoute exact path="/">
        <Minimal />
      </PrivateRoute>

      <PrivateRoute exact path="/analytical">
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
    </>
  );
};

export default RoutesList;
