import React, { useEffect, useState } from "react";
import Card from "./UI/SmallCard";

export default function OutlinedCard({ className }) {
  const [weather, setWeather] = useState({
    temp: null,
    icon: null,
  });
  useEffect(() => {
    let apiKey = "9f87375ab8e759c8b3ec2e7a9fb9469a";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Surat&units=imperial&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather({
          temp: data.main.temp.toFixed(1),
          icon: data.weather[0].icon,
        });
      });
  }, []);
  let d = new Date();
  return (
    <Card className="violet-color text-white flex-between">
      <div className="mt-auto ">
        <p className="fs-1  m-0">
          {weather.temp}
          <sup>
            <sup>o</sup>F
          </sup>
        </p>
        <p>Surat,india</p>
      </div>
      <div className="mb-auto">
        <img
          className="m-0 p-0 text-white"
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt=""
          srcset=""
        />
        <p className="m-0 ">
          {d.toLocaleString("en-us", { month: "long" })} {d.getDate()}
        </p>
      </div>
    </Card>
  );
}
