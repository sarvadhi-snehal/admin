import React from "react";
import Card from "./UI/ThreeCard";
import Rain from "./WeatherIcons/Rain";
import Clear from "./WeatherIcons/ClearDay";
import PartlyCloud from "./WeatherIcons/PartlyCloud";
import Cloudy from "./WeatherIcons/Cloudy";
import Hail from "./WeatherIcons/Hail";
import Wind from "./WeatherIcons/Wind";
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

  const weeeks = [
    {
      weeek: "Tue",
      temp: 32,
      Component: Rain,
    },
    {
      weeek: "Wed",
      temp: 34,
      Component: Clear,
    },
    {
      weeek: "Thu",
      temp: 31,
      Component: PartlyCloud,
    },
    {
      weeek: "Fri",
      temp: "32",
      Component: Cloudy,
    },
    {
      weeek: "sat",
      temp: 31,
      Component: Hail,
    },
    {
      weeek: "sat",
      temp: 31,
      Component: Wind,
    },
  ];
  return (
    <Card title="WEATHER">
      <div className=" bg-white">
        <div className="bg-light flex-between w-100 p-3">
          <div className="date">
            <h3>Monday</h3>
            <span>7th May 2017</span>
          </div>
          <div className="d-flex temp">
            <div className="">
              <Rain height={80} width={80} />
            </div>
            <div className="flex-center">
              <h1 className="ms-auto flex-center">
                32
                <sup>
                  <sup>°</sup>F
                </sup>
              </h1>
            </div>
          </div>
        </div>
        <div className=" bg-white py-4">
          <div className=" row flex-between  flex-wrap px-3">
            {data.map((item, i) => (
              <div
                className="col-12 col-lg-6 col-sm-12 col-xs-12 d-flex p-3 "
                key={i}
              >
                <p className="text-start text-nowrap">
                  <label className="text-secondary">{Object.keys(item)} </label>
                  <label className="fs-6  fw-normal ms-2">
                    {" "}
                    {Object.values(item)}
                  </label>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="weeks w-100 d-flex justify-content-evenly align-items-center px-2 ">
          {weeeks.map((item, i) => (
            <div key={i} className="d-flex flex-column  ">
              <h5 className="fw-light">{item.weeek}</h5>
              <div className="flex-column ">
                <item.Component />

                <h5 className="fw-light mt-2">
                  {item.temp}
                  <sup>
                    <sup>o</sup>F
                  </sup>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
export default Weather2;
