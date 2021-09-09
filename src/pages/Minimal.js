import { useContext } from "react";
import Summary from "../components/Summary/Summary";
import Graph from "../components/Graph";
import Weather from "../components/Weather";
import Quotes from "../components/Quotes";
import RecentComments from "../components/Comments/RecentComments";
import SalesOverview from "../components/Comments/SalesOverview";
import Todo from "../components/todo/Todo";
import Message from "../components/Messages/Message";
import Chat from "../components/Chat/Chat";
import GraphContainer from "../components/SalesDiffrnce/GrapContainer";
import contextProvider from "../Store";
import { Redirect } from "react-router-dom";
const Minimal = () => {
  const {
    state: { isAuthenticated },
  } = useContext(contextProvider);
  console.log(isAuthenticated);

  return (
    <section className="container-fluid bg-light px-4 pb-4">
      <Summary />
      <section className="row ">
        <Graph />

        <div className="col col-sm-12 col-md-12 col-lg-4 flex-column-between">
          <Weather />
          <Quotes />
        </div>
      </section>
      <section className="row ">
        <RecentComments />
        <SalesOverview />
      </section>
      <GraphContainer />
      <section className="row  h-100">
        <Todo />
        <Message className="col col-sm-12 col-md-4 mt-4" />
        <Chat />
      </section>
    </section>
  );
};

export default Minimal;
