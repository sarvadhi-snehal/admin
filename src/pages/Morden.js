import React from "react";
import Visit from "../components/visit";
import Sales from "../components/Salse";
import Weather from "../components/Weather2";
import UserActivity from "../components/UserActivity/Activity";
const Morden = () => {
  return (
    <section className="container-fluid bg-light px-4 pb-4">
      <Visit />
      <Sales />
      <section className="row d-flex  h-100 mx-2">
        <Weather />
        <UserActivity />
        <Weather />
      </section>
    </section>
  );
};

export default Morden;
