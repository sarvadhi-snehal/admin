import SalseDiif from "./SalseDiif";
import ViewStatics from "./ViewStatics";
import Graph from "./SalesGraph";
import BigCard from "../UI/Col8Card";
const GraphContainer = (props) => {
  return (
    <section className="row flex-between ">
      <BigCard>
        <Graph />
      </BigCard>
      <div className="col col-sm-12 col-md-12 col-lg-4 flex-column-between">
        <SalseDiif />

        <ViewStatics />
      </div>
    </section>
  );
};

export default GraphContainer;
