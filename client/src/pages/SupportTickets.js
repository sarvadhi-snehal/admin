import React from "react";
import SupportTable from "../components/SupportTickets/SupportTable";
const data = [
  {
    name: "Total Tickets",
    number: 2064,
    type: "primary",
  },
  {
    name: "Responded",
    number: 1738,
    type: "info",
  },
  {
    name: "Resolve",
    number: 1100,
    type: "success",
  },
  {
    name: "Pending",
    number: 964,
    type: "dark",
  },
];
const SupportTickets = () => {
  return (
    <section className="container-fluid pb-0  p-4">
      <div className="row bg-white mx-1">
        <div className="col p-4">
          <h6>Support Ticket List</h6>
          <p className="text-secondary">List of ticket opend by customers</p>
        </div>
      </div>
      <div className="row  bg-white mx-1 p-2 ">
        {data.map((item, i) => (
          <div
            className="col-sm-12 col-xs-12 col-md-6 col-lg-3 bg-white "
            key={i}
          >
            <div
              className={`flex-column text-white mt-4  bg-${item.type} text-center py-4 rounded-3`}
            >
              <h1 className="m-0">{item.number}</h1>
              <p className="m-0">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="row mx-1">
        <SupportTable />
      </div>
    </section>
  );
};

export default SupportTickets;
