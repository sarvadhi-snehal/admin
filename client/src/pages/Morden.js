import React from "react";
import Visit from "../components/visit";
import Sales from "../components/Salse";
import Weather from "../components/Weather2";
import UserActivity from "../components/UserActivity/Activity";
import OrderStatus from "../components/OrderStatus";
import Feeds from "../components/Feeds/Feeds";
import Card from "../components/UI/ThreeCard";
const Morden = () => {
  return (
    <section className="container-fluid">
      <Visit />
      <Sales />
      <section className="row px-3 ">
        <Weather />

        <UserActivity />

        <Feeds />
      </section>
      <OrderStatus />
    </section>
  );
};

export default Morden;
