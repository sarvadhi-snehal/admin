import React from "react";
import { Line } from "react-chartjs-2";
const data = {
  labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
  datasets: [
    {
      label: "Iphone",
      data: [50, 130, 80, 70, 180, 150, 250],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "Ipad",
      data: [80, 100, 60, 200, 150, 100, 150],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
    },
    {
      label: "Ipod",
      data: [20, 80, 70, 140, 140, 80, 200],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          show: false,
        },
      },
    ],
  },
};

const MultiAxisLine = () => {
  return (
    <div className="col  p-3 bg-white col-md-12 col-lg-8 max-height  col-sm-12 mt-4 ">
      <Line data={data} options={options} />
    </div>
  );
};

export default MultiAxisLine;
