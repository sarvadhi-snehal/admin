import React from "react";

const Col8Card = ({ children }) => {
  return (
    <div
      className="col col-md-12 col-lg-8 col-sm-12  mt-4 "
      style={{ height: 500 }}
    >
      {children}
    </div>
  );
};
export default Col8Card;
