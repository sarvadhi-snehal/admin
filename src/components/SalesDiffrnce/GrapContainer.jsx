import SalseDiif from "./SalseDiif";
import ViewStatics from "./ViewStatics";
import Graph from "./SalesGraph";

const GraphContainer = (props) => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-8">
        <Graph />
      </div>
      <div className="col-sm-12 col-md-12 col-lg-4 ">
        <SalseDiif />

        <ViewStatics />
      </div>
    </div>
  );
};

export default GraphContainer;
