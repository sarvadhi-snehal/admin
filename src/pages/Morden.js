import React from "react";
import Visit from "../components/visit";
import Sales from "../components/Salse";
import Weather from "../components/Weather2";
import UserActivity from "../components/UserActivity/Activity";
import OrderStatus from "../components/OrderStatus";
const Morden = () => {
  return (
    <section className="container-fluid bg-light  pb-4">
      <Visit />
      <Sales />
      <section className="row px-3 ">
        <Weather />
        <UserActivity />
        <Weather />
      </section>
      <OrderStatus />
    </section>
  );
};

export default Morden;
