import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
  datasets: [
    {
      label: "Site A",
      data: [0, 1130, 4980, 3707, 6810, 4150, 15590, 0],
      fill: true,

      backgroundColor: "rgb(220,239,232)",
      borderColor: "rgb(220,239,232)",
      lineTension: 0.4,
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

const Salse = () => {
  return (
    <article className="row mt-4 mx-3 bg-white p-4 ">
      <h6 className="graph-header"> SALES IN 2018 </h6>
      <div className="col col-sm-12 col-md-4 col-lg-4 pt-5 ">
        <p>
          Lorem ipsum dolor sit amet, ectetur adipiscing elit. viverra tellus.
          ipsumdolorsitda amet, ectetur adipiscing elit.
        </p>
        <p className="pt-4">
          Ectetur adipiscing elit. viverra tellus.ipsum dolor sit amet, dag adg
          ecteturadipiscingda elitdglj. vadghiverra tellus.
        </p>
      </div>
      <div className="col col-sm-12 col-md-8 col-lg-8">
        <div className="h-100">
          <Line data={data} options={options} />
        </div>
      </div>
    </article>
  );
};

export default Salse;
