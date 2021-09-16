import React from "react";

const ThreeCard = ({ title, children, header, className }) => {
  return (
    <div
      className="col-12 col-sm-12 col-md-4 col-ls-4 col-xs-12 mt-4  "
      style={{ maxheight: 600, minHeight: 500 }}
    >
      <div className="h-100 bg-white">
        <div className={` p-3  ${className}`}>
          <h6 className="text-uppercase graph-header">{title}</h6>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ThreeCard;
