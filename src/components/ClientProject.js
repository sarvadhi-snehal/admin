import React from "react";
import { People } from "react-bootstrap-icons";
import { Wallet } from "react-bootstrap-icons";
import { Folder } from "react-bootstrap-icons";
import { Folder2 } from "react-bootstrap-icons";

const data = [
  {
    name: "NEW CLIENTS",
    Icon: People,
    number: 23,
    type: "info",
  },
  {
    name: "NEW PROJECTS",
    Icon: Folder,
    number: 169,
    type: "primary",
  },
  {
    name: "OPEN PROJECTS",
    Icon: Folder2,
    number: 311,
    type: "danger",
  },
  {
    name: "NEW INVOICES",
    Icon: Wallet,
    number: 23,
    type: "warning",
  },
];
const ClientProject = () => {
  return (
    <div className="container-fluid ">
      <div className="row ">
        <div className="col-md-6 col-lg-6 col col-sm-12 d-flex flex-wrap bg-dark">
          {data.map((item) => (
            <div className="w-50 w-sm-100  w-xs-100">
              <div className="bg-white ">
                <h6>{item.name}</h6>
                <div className="body flex-between ">
                  <item.Icon size={50} className={`text-${item.type}`} />
                  <h1>{item.number}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* *TODO : need  change to collaser */}
        <div className="col-md-6 col-lg 6 col col-sm-12">
          <div
            className="info h-100 flex-center flex-column p-5 text-center"
            style={{
              backgroundImage: `url('http://eliteadmin.themedesigner.in/demos/bt4/assets/images/news/slide1.jpg') `,
              backgroundSize: "cover",
            }}
          >
            <button className="btn-s bg-danger mt-auto">primary</button>
            <p className="text-white">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <a href="nowhre">read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProject;
