import React from "react";

import { Plus } from "react-bootstrap-icons";
const BreadCumb = ({ link }) => {
  return (
    <div
      aria-label="breadcrumb"
      className="bg-white align-items-center  fleex-wrap flex-center p-3"
    >
      <h5 className="text-capitalize fw-normal">{link}</h5>
      <div className="breadcrumb ms-auto flex-center  my-auto ">
        <li className="breadcrumb-item">
          <span className="fw-normal">Home</span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <span className="fw-normal text-orange text-capitalize">{link}</span>
        </li>
      </div>
      <button className="btn btn-primary  d-md-block d-lg-block d-none mx-3">
        <Plus className="text-primary bg-white rounded-circle " size={20} />{" "}
        create new
      </button>
    </div>
  );
};

export default BreadCumb;
