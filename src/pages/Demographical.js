import React from "react";
import Visits from "../components/Visits";
import ClientProject from "../components/ClientProject";
import GraphContainer from "../components/SalesDiffrnce/GrapContainer";
const Demographical = () => {
  return (
    <div className="container-fluid bg-light">
      <Visits />
      <ClientProject />
      <GraphContainer />
    </div>
  );
};

export default Demographical;
