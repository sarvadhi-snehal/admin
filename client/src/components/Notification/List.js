import React from "react";
const data = [
  "You can give link",
  "give link",
  "Another linl",
  "link continue",
  "Another fifth linl",
];
const List = () => {
  return (
    <div>
      {data.map((item) => (
        <p className="p-2 fs-6 hover-orange" key={item}>
          <span className="text-success">&#10003;</span> {item}
        </p>
      ))}
    </div>
  );
};

export default List;
