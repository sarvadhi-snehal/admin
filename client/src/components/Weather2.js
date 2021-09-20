import React from "react";
import Card from "./UI/ThreeCard";
const Weather2 = () => {
  const data = [
    {
      Wind: " ESE 17 mph",
    },
    {
      Humidity: "83%",
    },
    {
      Pressure: "28.56 in",
    },

    { Cloud: "78%" },
    { Ceiling: "25760 ft" },
  ];
  return (
    <Card title="WEATHER">
      <div className=" bg-white">
        <div className="bg-light flex-between  ">
          <div className="date p-3">
            <h1>Monday</h1>
            <span>7th May 2017</span>
          </div>
          <div className="temp p-3">
            <img src="" alt="temp" />
            <h1>
              32
              <sup>
                <sup>°</sup>F
              </sup>
            </h1>
          </div>
        </div>
        <div className=" bg-white">
          <div className=" row flex-between  flex-wrap p-2">
            {data.map((item, i) => (
              <div className="col col-lg-6 col-sm-12 col-xs-12 d-flex p-2 ">
                <p className="text-start">{Object.keys(item)} : </p>
                <p className="fw-bolder ms-2"> {Object.values(item)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
export default Weather2;
