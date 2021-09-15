import React from "react";

const Cpu = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-4 h-100 ">
      <div className="mt-4 bg-white flex-column " style={{ height: "75vh" }}>
        <h6 className="p-3 graph-header">CPU Load</h6>
        <div className="d-flex">
          <div className="m-2">
            <p>Usage</p>
            <h6>60 GB</h6>
          </div>

          <div className="border-start border-end m-2 px-2">
            <p>Space</p>
            <h6>32 GB</h6>
          </div>

          <div className="m-2">
            <p>CPU</p>
            <h6>50 %</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cpu;
