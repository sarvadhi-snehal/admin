import React from "react";
import SmallCard from "../UI/SmallCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./Summary.scss";

const Summary = () => {
  const data = [
    {
      name: "New User Visited",
      percent: 75,
      type: "success",
    },
    {
      name: "Returning Users",
      percent: 65,
      type: "info",
    },
    {
      name: "Bounce Rate",
      percent: 25,
      type: "primary",
    },
  ];
  return (
    <div style={{ height: 150 }}>
      <div className="flex-between  w-100 text-center">
        {data.map((item) => (
          <div className="lines">
            <div className={`outer bg-${item.type}`}>
              <div className="inner">{item.percent}%</div>
            </div>
            <h5 className="">{item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
