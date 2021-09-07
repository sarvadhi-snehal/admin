import React from "react";
import SiteTraffic from "../components/SiteTraffic/SiteTraffic";
import Map from "../components/SiteVisit/Map";
import List from "../components/SiteVisit/List";
import Summary from "../components/SiteVisit/Summary";
import SmallCard from "../components/UI/SmallCard";
const Analytical = () => {
  return (
    <section className="container-fluid bg-light ">
      <SiteTraffic />
      <div className="row mx-4 bg-white ">
        <Map />
        <SmallCard>
          <List />
          <Summary />
        </SmallCard>
      </div>
    </section>
  );
};

export default Analytical;
