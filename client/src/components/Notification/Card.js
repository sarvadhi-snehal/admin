import React from "react";

const Card = ({ children, title }) => {
  return (
    <div className="col col-sm-12 col-md-3 col-lg-3 col-xs-12 p-4">
      <p className="text-dark  lead">{title}</p>
      {children}
    </div>
  );
};

export default Card;
