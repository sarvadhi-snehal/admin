import React from "react";

const HalfCard = ({ children }) => {
  return (
    <div className="col col-sm-12 col-md-6 col-lg-6  ">
      <div className="bg-white  mt-4 ">{children}</div>
    </div>
  );
};

export default HalfCard;
