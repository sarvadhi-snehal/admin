import { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { handleClick } from "../Store/actions/action";
import Spinner from "../components/Spinner";
import * as toastr from "toastr";
const Minimal = () => {
  const fourbyTwelve = "col-12 col-sm-12 col-md-4 ";
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  const notify = () => toastr["info"]("lorem ipsum est lt ist", "Welcome");
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: true,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  useEffect(() => {
    notify();
  }, []);
  if (state.loading) <Spinner />;

  return (
    <section className="container-fluid  px-4 pb-4">
      <>
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
          <Message className={`mt-4 ${fourbyTwelve}`} />
          <Chat className={fourbyTwelve} list="d-none" />
        </section>
      </>
    </section>
  );
};

export default Minimal;
