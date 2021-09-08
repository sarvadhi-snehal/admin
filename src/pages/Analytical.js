import React from "react";
import SiteTraffic from "../components/SiteTraffic/SiteTraffic";
import Map from "../components/SiteVisit/Map";
import List from "../components/SiteVisit/List";
import Summary from "../components/SiteVisit/Summary";
import SmallCard from "../components/UI/SmallCard";
import BrowserState from "../components/BrowserState";
import Cpu from "../components/Cpu";
import ContactCard from "../components/ContactCard";
const Analytical = () => {
  return (
    <section className="container-fluid bg-light ">
      <SiteTraffic />
      <div className="row mx-4 bg-white mt-4">
        <Map />
        <SmallCard>
          <List />
          <Summary />
        </SmallCard>
      </div>
      <div className="row  mx-2  d-flex">
        <BrowserState />
        <Cpu />
        <ContactCard />
      </div>
    </section>
  );
};

export default Analytical;
