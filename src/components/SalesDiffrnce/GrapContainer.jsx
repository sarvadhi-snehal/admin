import SalseDiif from "./SalseDiif";
import ViewStatics from "./ViewStatics";
import Graph from "./SalesGraph";
import BigCard from "../UI/Col8Card";
const GraphContainer = ({ className }) => {
  return (
    <section className="row flex-between  ">
      <BigCard>
        <Graph graphHeader="flex-between" />
      </BigCard>
      <div
        className={`col col-sm-12 col-md-12 col-lg-4 flex-column-between ${className}`}
      >
        <SalseDiif />

        <ViewStatics />
      </div>
    </section>
  );
};

export default GraphContainer;
