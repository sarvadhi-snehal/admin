import React from "react";

const SmallCard = ({ children, className }) => {
  return (
    <div className="bg-light mt-4 w-100" style={{ height: 235 }}>
      <div className={`${className} h-100  w-100     p-4`}>{children}</div>
    </div>
  );
};
export default SmallCard;
