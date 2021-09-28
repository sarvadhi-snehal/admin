import React from "react";
import { Bar } from "react-chartjs-2";
import { ArrowUp } from "react-bootstrap-icons";
import Graph from "./SalesDiffrnce/SalesGraph";
const visits = [
  {
    name: "visit",
    number: "1064",
    type: "success",
    options: {
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
    },
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: "rgb(76,175,81)",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          borderWidth: 1,
        },
      ],
    },
  },
  {
    name: "Total Page Views",
    number: "5064",
    type: "violet",
    options: {
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
    },
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: "rgb(150,117,206)",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          borderWidth: 1,
        },
      ],
    },
  },
  {
    name: "Unique Vistor",
    number: "664",
    type: "primary",
    options: {
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
    },
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: "rgb(78,169,243)",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          borderWidth: 1,
        },
      ],
    },
  },
  {
    name: "Bounce Rate",
    number: "50%",
    type: "danger",
    options: {
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
    },
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: "rgb(241,97,98)",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          borderWidth: 1,
        },
      ],
    },
  },
];

const Visits = () => {
  return (
    <article className="row ">
      <div className="d-flex w-100 flex-wrap  mt-4">
        {visits.map((item) => (
          <div
            className="col bg-white border-0 col-sm-12 col-xs-12 col-md-6 col-lg-3"
            key={item.name}
          >
            <div className="d-flex flex-column justify-content-center align-items-center    p-2">
              <span className="fw-normal">{item.name}</span>
              <h2>
                <ArrowUp className={`text-${item.type}`} />
                {item.number}
              </h2>
              <div className="">
                <Bar
                  data={item.data}
                  options={item.options}
                  width={150}
                  height={50}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col col-lg-12 " style={{ height: 500 }}>
        <Graph className="d-none" tension={0.4} />
      </div>
    </article>
  );
};

export default Visits;
