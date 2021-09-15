import React from "react";

const ThreeCard = ({ title, children, header }) => {
  return (
    <div
      className="col col-sm-12 col-md-4 col-ls-4 col-xs-12 mt-4  "
      style={{ height: "75vh" }}
    >
      <div className="h-100 bg-white">
        <div className=" p-3 ">
          <h6 className="text-uppercase graph-header">{title}</h6>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ThreeCard;
