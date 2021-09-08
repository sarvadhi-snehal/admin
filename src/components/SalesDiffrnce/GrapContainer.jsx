import SalseDiif from "./SalseDiif";
import ViewStatics from "./ViewStatics";
import Graph from "./SalesGraph";

const GraphContainer = (props) => {
  return (
    <section className="row flex-between ">
      <div
        className="col col-md-12 col-lg-8 col-sm-12  mt-4 "
        style={{ height: 500 }}
      >
        <Graph />
      </div>
      <div className=" col col-sm-12 col-md-12 col-lg-4 flex-column-between">
        <SalseDiif />

        <ViewStatics />
      </div>
    </section>
  );
};

export default GraphContainer;
