import React from "react";
import SiteTraffic from "../components/SiteTraffic/SiteTraffic";
import Map from "../components/SiteVisit/Map";
import List from "../components/SiteVisit/List";
import Summary from "../components/SiteVisit/Summary";
import BrowserState from "../components/BrowserState";
import Cpu from "../components/Cpu";
import ContactCard from "../components/ContactCard";
import { useSelector } from "react-redux";
const Analytical = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <section className="container-fluid bg-light px-4 ">
      <SiteTraffic />
      <div className="row mx-1 bg-white mt-4">
        <Map />
        <div className="col col-sm-12 col-md-12 col-lg-4 p-4  ">
          <List />
          <Summary />
        </div>
      </div>
      <div className="row    d-flex">
        <BrowserState />
        <Cpu />
        <ContactCard />
      </div>
    </section>
  );
};

export default Analytical;
