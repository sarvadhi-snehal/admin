import React from "react";
import { Bar, defaults } from "react-chartjs-2";
import { ArrowUp } from "react-bootstrap-icons";
import Graph from "./SalesDiffrnce/SalesGraph";
const visits = [
  {
    name: "visit",
    number: "1064",
    type: "success",
  },
  {
    name: "Total Page Views",
    number: "5064",
    type: "primary",
  },
  {
    name: "Unique Vistor",
    number: "664",
    type: "info",
  },
  {
    name: "Bounce Rate",
    number: "50%",
    type: "danger",
  },
];

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgba(54, 162, 235, 1)",
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,
      borderWidth: 1,
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
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    },
  },
};
const Visits = () => {
  return (
    <section className="container-fluid ">
      <div className="row mx-1 ">
        {visits.map((item) => (
          <div className="bg-white border-0 col-sm-12 col-xs-12 col-md-6 col-lg-3  mt-4">
            <div className="d-flex flex-column justify-content-center align-items-center   p-2">
              <span>{item.name}</span>
              <h2>
                <ArrowUp className={`text-${item.type}`} />
                {item.number}
              </h2>
              <div className="">
                <Bar data={data} options={options} width={150} height={50} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col col-lg-12" style={{ height: 500 }}>
        <div className="mx-1">
          <Graph />
        </div>
      </div>
    </section>
  );
};

export default Visits;
