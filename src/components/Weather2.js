import React from "react";
import Card from "./UI/ThreeCard";
const Weather2 = () => {
  return (
    <Card title="WEATHER">
      <div className="bg-light flex-between ">
        <div className="date p-4">
          <h1>Monday</h1>
          <span>7th May 2017</span>
        </div>
        <div className="temp p-4">
          <img src="" alt="temp" />
          <h1>
            32
            <sup>
              <sup>°</sup>F
            </sup>
          </h1>
        </div>
      </div>
      <div className="h-100 bg-white">hllo</div>
    </Card>
  );
};
export default Weather2;
