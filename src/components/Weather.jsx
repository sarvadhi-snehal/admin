import React, { useEffect, useState } from "react";

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
        console.log(data);
        setWeather({
          temp: data.main.temp.toFixed(1),
          icon: data.weather[0].icon,
        });
      });
  }, []);
  let d = new Date();
  return (
    <div style={{ height: 230 }} className="mt-4 bg-danger w-100">
      <div className="violet-color h-100 w-100 text-white p-4  flex-between text-white ">
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
      </div>
    </div>
  );
}
