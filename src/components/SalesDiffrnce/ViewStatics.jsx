import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  maintainAspectRatio: false,
  responsive: true,
  labels: ["cyan", "white", "violet"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["#7D5AB6", "white", "#4DC0C8"],
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
    <div style={{ height: 230 }} className="mt-4 bg-danger w-100">
      <div
        className=" h-100 w-100 p-4  flex-between text-white "
        style={{ backgroundColor: "#AB8CE4" }}
      >
        <div className="flex-between w-100  h-100">
          <div className=" h-100 flex-column">
            <h6>SALES DIFFERENCE</h6>

            <h1 className="mt-auto">$647</h1>
            <p>APRIL 2017</p>
            <h6>(150 Sales)</h6>
          </div>
        </div>
        <div className="ms-auto">
          <Pie width={100} data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SalseDiif;
