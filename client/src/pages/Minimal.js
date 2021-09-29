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
// import toastr from "toastr";
// import "toastr/build/toastr.min.css";
import { ToastContainer, toast } from "react-toastify";
const Minimal = () => {
  const fourbyTwelve = "col-12 col-sm-12 col-md-4 ";
  const Msg = ({ closeToast }) => (
    <div className="">
      <p className="fs-6 fw-normal"> Welcome Admin</p>
      <p>lorem Ips idfd djf dfddc d f dbdf dfb ddfgdfg df</p>
    </div>
  );
  const notify = () => toast.info(<Msg />);
  // toastr.options = {
  //   closeButton: true,
  //   newestOnTop: true,
  //   progressBar: true,
  //   positionClass: "toast-top-right",
  //   preventDuplicates: true,
  //   showDuration: "300",
  //   hideDuration: "1000",
  //   timeOut: "5000",
  //   extendedTimeOut: "1000",
  //   showEasing: "swing",
  //   hideEasing: "linear",
  //   showMethod: "show",
  //   hideMethod: "fadeOut",
  // };
  // const notify = () => toastr.info("lorem ipsum est lt ist", "Welcome");

  useEffect(() => {
    notify();
  }, []);

  return (
    <section className="container-fluid  px-4 ">
      <ToastContainer />
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
    </section>
  );
};

export default Minimal;
