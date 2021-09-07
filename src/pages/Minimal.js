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
const Minimal = () => {
  return (
    <main className="container-fluid bg-light px-4 pb-4">
      <Summary />
      <section className="row h-100">
        <Graph />

        <div className=" col col-sm-12 col-md-12  col-lg-4  ">
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
        <Message />
        <Chat />
      </section>
    </main>
  );
};

export default Minimal;
