import React from "react";
import Card from "./UI/ThreeCard";

const Cpu = () => {
  return (
    <Card title="CPU Load">
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
    </Card>
  );
};

export default Cpu;
