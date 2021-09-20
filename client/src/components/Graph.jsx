import React from "react";
import { Line } from "react-chartjs-2";
import { Dot } from "react-bootstrap-icons";
import Card from "./UI/Col8Card";
const data = {
  labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
  datasets: [
    {
      label: "Iphone",
      data: [50, 130, 80, 70, 180, 150, 250],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
      cubicInterpolationMode: "monotone",
      tension: 0.4,
    },
    {
      label: "Ipad",
      data: [80, 100, 60, 200, 150, 100, 150],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
      cubicInterpolationMode: "monotone",
      tension: 0.4,
    },
    {
      label: "Ipod",
      data: [20, 80, 70, 140, 140, 80, 200],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
      cubicInterpolationMode: "monotone",
      tension: 0.4,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxes: {
      ticks: {
        beginAtZero: true,
      },
    },

    xAxes: {
      display: false,
    },
  },
};

const MultiAxisLine = () => {
  return (
    <Card>
      <div className="h-100 p-3 bg-white ">
        <div className="header flex-between ">
          <div className="flex-center ">
            <h6 className="graph-header">YEARLY SALES</h6>
          </div>
          <div className="flex-center ">
            <div>
              <Dot className="text-info" size={40} />
              <span>Iphone</span>
            </div>
            <div>
              <Dot className="text-secondary" size={40} />

              <span>Ipad</span>
            </div>
            <div>
              <Dot className="text-primary" size={40} />

              <span>Ipod</span>
            </div>
          </div>
        </div>
        <div className=" ">
          <Line data={data} height={410} options={options} />
        </div>
      </div>
    </Card>
  );
};

export default MultiAxisLine;
