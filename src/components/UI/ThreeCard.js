import React from "react";

const ThreeCard = ({ title, children }) => {
  return (
    <div className="col col-sm-12 col-md-4 col-ls-4 col-xs-12 ">
      <div className="bg-white p-4 ">
        <h6 className="text-uppercase">{title}</h6>
      </div>
      {children}
    </div>
  );
};

export default ThreeCard;
