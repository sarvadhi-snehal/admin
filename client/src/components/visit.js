import React from "react";
import { Bar } from "react-chartjs-2";
import { ArrowUp } from "react-bootstrap-icons";
const visits = [
  {
    name: "Total Visit",
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
const Visit = () => {
  return (
    <article className="row   mx-1">
      {visits.map((item, i) => (
        <div
          className=" border-0 col-sm-12 col-xs-12 col-md-6 col-lg-3  mt-4 "
          key={i}
        >
          <div className=" bg-white w-100 p-2 pb-5 pt-3">
            <div className="d-flex flex-column text-start align-items-center   ">
              <h6 className="w-100 ps-4 graph-header">{item.name}</h6>
              <div className="flex-between w-100 px-4 flex-row-reverse ps-4">
                <h2>
                  <ArrowUp className={`text-${item.type}`} />
                  {item.number}
                </h2>
                <div className="">
                  <Bar data={data} options={options} width={50} height={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Visit;
