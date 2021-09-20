import React from "react";

const CardItem = ({ title, Icon, number, type }) => {
  return (
    <div className="bg-white border col-sm-12 col-xs-12 col-md-6 col-lg-3 mt-4 ">
      <div className="flex-between pt-3 px-3 ">
        <div className="">
          <Icon size={25} className="d-block mb-2" />
          <p className="text-secondary" style={{ fontSize: "0.9rem" }}>
            {title}
          </p>
        </div>
        <h1 className={`text-${type}`}>{number}</h1>
      </div>
      <div className="progress mx-3 mb-3" style={{ height: "5px" }}>
        <div
          className={`progress-bar bg-${type} `}
          role="progressbar"
          style={{ width: "75%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default CardItem;
