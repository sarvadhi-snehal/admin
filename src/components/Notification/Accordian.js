import React from "react";

const data = [
  {
    name: "collapse Group item #1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eaque?",
    target: "first",
  },
  {
    name: "collapse Group item #2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eaque?",
    target: "second",
  },
  {
    name: "collapse Group item #3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eaque?",
    target: "third",
  },
];

const Accordian = () => {
  return (
    <div className="">
      {data.map((item) => {
        const { name, text, target } = item;

        return (
          <div className="">
            <label
              className="btn text-danger"
              data-bs-toggle="collapse"
              data-bs-target={`#${target}`}
              type="button"
              aria-expanded="false"
              aria-controls={target}
            >
              {name}
            </label>
            <div className="collapse multi-collapse" id={target}>
              <div className=" card-body text-dark">{text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
