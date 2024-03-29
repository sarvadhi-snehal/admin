import React from "react";
import { People, Wallet, Folder, Folder2 } from "react-bootstrap-icons";

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
    <article className="row  d-flex">
      {/* need to align with grid */}
      <div
        className="col-12 col-md-6 col-lg-6 col col-sm-12 flex-between flex-wrap  h-100 p-0"
        style={{ height: 400 }}
      >
        {data.map((item) => (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-6  mt-4 h-100"
            key={item.name}
          >
            <div className="bg-white  mx-2 p-4">
              <h6 className="">{item.name}</h6>
              <div className="body flex-between py-4 ">
                <item.Icon size={50} className={`text-${item.type}`} />
                <h1>{item.number}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* *TODO : need  change to collaser */}
      <div
        className="col col-md-6 col-lg-6 col col-sm-12 col-xs-12 mt-4 "
        style={{ height: 380 }}
      >
        <div
          className="info h-100 flex-center flex-column  text-center  px-4 pb-5 "
          style={{
            backgroundImage: `url('http://eliteadmin.themedesigner.in/demos/bt4/assets/images/news/slide1.jpg') `,
            backgroundSize: "cover",
          }}
        >
          <button className="btn-s bg-danger mt-auto text-capitalize d-grid place-items-center">
            primary
          </button>
          <p className="text-white">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <label to="nowhre" className="text-orange text-capitalize text">
            read more
          </label>
        </div>
      </div>
    </article>
  );
};

export default ClientProject;
