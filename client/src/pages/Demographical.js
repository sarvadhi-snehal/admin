import React from "react";
import Visits from "../components/Visits";
import ClientProject from "../components/ClientProject";
import GraphContainer from "../components/SalesDiffrnce/GrapContainer";
const Demographical = () => {
  return (
    <section className="container-fluid  px-4  w-100">
      <Visits />
      <ClientProject />
      <GraphContainer className="flex-column-reverse" />
    </section>
  );
};

export default Demographical;
