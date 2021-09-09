import React from "react";
import SiteTrafficItem from "./SiteTrafficItem";
import { Grid } from "@material-ui/core";
const SiteTraffic = () => {
  const data = [
    {
      name: "A",
      growth: "80.40%",
      daily: "5.40%",
      monthly: "20.40%",
      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
          {
            label: "Site A",
            data: [0, 130, 80, 70, 180, 150, 250],
            fill: true,

            backgroundColor: "green",
            borderColor: "green",
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
      growth: "80.40%",
      daily: "5.40%",
      monthly: "20.40%",
      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
          {
            label: "Site A",
            data: [0, 130, 80, 70, 180, 150, 250],
            fill: true,

            backgroundColor: "cyan",
            borderColor: "cyan",
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

            backgroundColor: "yellow",
            borderColor: "yellow",
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
    <article className="row flex-between mt-4 mx-2 ">
      {data.map((item) => (
        <SiteTrafficItem
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
