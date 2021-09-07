import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
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
    <div className=" mt-4 bg-white ">
      <h6>SALES DIFFERENCE</h6>
      <div className="flex-between">
        <div>
          <h4>$647</h4>
          <p>APRIL 2017</p>
          <h6>(150 Sales)</h6>
        </div>
        <div>
          <Pie width={100} data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SalseDiif;
