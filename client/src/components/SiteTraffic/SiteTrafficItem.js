import React from "react";
import { Line } from "react-chartjs-2";
const SiteTrafficItem = ({ name, growth, monthly, daily, data, options }) => {
  return (
    <div className=" col-sm-12 col-md-4 col-lg-4   mt-4">
      <div className="bg-white  p-2">
        <div className="w-100 ">
          <h6 className="graph-header">Site {name} Traffic</h6>
          <div className="flex-between w-100">
            <div className="m-2">
              <p>Growth</p>
              <h6>{growth}</h6>
            </div>

            <div className="border-start border-end m-2 px-2">
              <p>Monthly</p>
              <h6>{monthly}</h6>
            </div>

            <div className="m-2">
              <p>Daily</p>
              <h6>{daily}</h6>
            </div>
          </div>
          <div className="w-100">
            <Line height={60} data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteTrafficItem;
