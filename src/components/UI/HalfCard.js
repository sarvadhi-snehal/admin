import React from "react";

const HalfCard = ({ children, title, className }) => {
  return (
    <div className="col col-sm-12 col-md-6 col-lg-6  mt-4 ">
      <div className="bg-white h-100 ">
        <div className={`bg-white p-4 ${className}`}>
          <h6 className="graph-header">{title}</h6>
        </div>
        {children}
      </div>
    </div>
  );
};

export default HalfCard;
