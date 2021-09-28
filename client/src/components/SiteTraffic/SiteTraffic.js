import React from "react";
import SiteTrafficItem from "./SiteTrafficItem";
const SiteTraffic = () => {
  const data = [
    {
      name: "A",

      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
          {
            label: "Site A",
            data: [0, 4, 8, 4, 6, 2, 5],
            fill: true,

            backgroundColor: "#99D683",
            borderColor: "#99D683",
          },
        ],
      },

      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          xAxis: {
            display: false,
          },
          yAxis: {
            display: false,
          },
        },
      },
    },
    {
      name: "B",

      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
          {
            label: "Site A",
            data: [0, 4, 8, 4, 6, 2, 5],

            fill: true,

            backgroundColor: "#5DDAFE",
            borderColor: "#5DDAFE",
          },
        ],
      },

      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          xAxis: {
            display: false,
          },
          yAxis: {
            display: false,
          },
        },
      },
    },
    {
      name: "C",
      growth: "80.40%",
      daily: "5.40%",
      monthly: "20.40%",
      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
          {
            label: "Site A",
            data: [0, 100, 60, 200, 150, 100, 150],
            fill: true,

            backgroundColor: "#F7DB4B",
            borderColor: "#F7DB4B",
          },
        ],
      },

      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          xAxis: {
            display: false,
          },
          yAxis: {
            display: false,
          },
        },
      },
    },
  ];

  return (
    <article className="row flex-between mt-4  ">
      {data.map((item) => (
        <SiteTrafficItem
          key={item.name}
          name={item.name}
          growth={item.growth}
          daily={item.daily}
          monthly={item.monthly}
          data={item.data}
          options={item.options}
        />
      ))}
    </article>
  );
};

export default SiteTraffic;
