import React from "react";
import { Line } from "react-chartjs-2";
import { Dot } from "react-bootstrap-icons";

const Graph = ({ className, graphHeader, tension }) => {
  const data = {
    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
    datasets: [
      {
        label: "Site A",
        data: [0, 130, 80, 70, 180, 150, 250],
        fill: true,
        lineTension: tension,
        backgroundColor: "#9EF1F4",
        borderColor: "#9EF1F4",
      },
      {
        label: "Site B",
        data: [0, 100, 60, 200, 150, 100, 150],
        fill: true,
        lineTension: tension,
        backgroundColor: "#F3F5F7",
        borderColor: "#F3F5F7",
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

    title: {
      display: true,
      position: "top",
      text: "SALES DIFFERENCE",
      align: "start",
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
  return (
    <div className="h-100 p-3 bg-white">
      <div className={graphHeader}>
        <div className={`flex-center ${className} `}>
          <h6 className="graph-header">SALES DIFFERENCE</h6>
        </div>
        <div className="flex-center ">
          <div>
            <Dot className="text-info" size={40} />
            <span>SITE A</span>
          </div>
          <div>
            <Dot className="text-secondary" size={40} />

            <span>SITE B</span>
          </div>
        </div>
      </div>
      <div>
        <Line data={data} height={410} options={options} />
      </div>
    </div>
  );
};

export default Graph;
