import React from "react";
import CardItem from "./CardItem";
import { Display } from "react-bootstrap-icons";
import { PencilSquare } from "react-bootstrap-icons";
import { FileEarmark } from "react-bootstrap-icons";
import { Bag } from "react-bootstrap-icons";

let data = [
  {
    title: "MYNEW CLIENT",
    numbers: 23,
    icon: Display,
    type: "warning",
  },
  {
    title: "NEW PROJECT",
    numbers: 169,
    icon: PencilSquare,
    type: "info",
  },
  {
    title: "NEW INVOICES",
    numbers: 157,
    icon: FileEarmark,
    type: "primary",
  },
  {
    title: "ALL PROJECTS",
    numbers: 431,
    icon: Bag,
    type: "success",
  },
];

const Summary = () => {
  return (
    <section className="col  flex-center mx-1 ">
      {data.map((item, index) => (
        <CardItem
          key={index}
          title={item.title}
          Icon={item.icon}
          number={item.numbers}
          type={item.type}
        />
      ))}
    </section>
  );
};

export default Summary;
