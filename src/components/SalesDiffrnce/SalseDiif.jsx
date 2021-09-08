import React from "react";
import { Bar, defaults } from "react-chartjs-2";

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

const SalseDiif = () => {
  return (
    <div style={{ height: 230 }} className="mt-4 bg-danger w-100">
      <div className="bg-white h-100 w-100 p-4  flex-between text-dark ">
        <div className="flex-between w-100  h-100">
          <div className=" h-100 flex-column">
            <h6>SALES DIFFERENCE</h6>
            <h1 className="mt-auto text-primary">$647</h1>
            <p className="text-secondary">APRIL 2017</p>
            <h6>(150 Sales)</h6>
          </div>
          <div className="ms-auto">
            <Bar width={100} data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalseDiif;
