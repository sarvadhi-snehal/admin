import React from "react";

const data = [
  {
    from: "Inida",
    visitor: "6350",
    percent: "48%",
    type: "success",
  },
  {
    from: "UAE",
    visitor: "3250",
    percent: "98%",
    type: "dark",
  },
  {
    from: "Australia",
    visitor: "1250",
    percent: "75%",
    type: "danger",
  },

  {
    from: "USA",
    visitor: "1350",
    percent: "48%",
    type: "primary",
  },
  {
    from: "UK",
    visitor: "350",
    percent: "68%",
    type: "info",
  },
];

const List = () => {
  return (
    <div style={{ height: 300 }} className="scroll">
      {data.map((item) => (
        <div className="p-3 flex-column" key={item.from}>
          <h3 className="text-dark">{item.visitor}</h3>
          <span className="fw-normal">from {item.from}</span>
          <p className="fw-normal">{item.percent}</p>
          <div className="progress" style={{ height: 5 }}>
            <div
              className={`progress-bar bg-${item.type}`}
              role="progressbar"
              style={{ width: item.percent }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
