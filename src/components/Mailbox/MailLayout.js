import React from "react";
import MailMenu from "./MailMenu";
import Toolbar from "./ToolBar";
const MailLayout = ({ children, className }) => {
  return (
    <div className="container-fluid ">
      <div className="row bg-light ">
        <MailMenu />

        <div className="col col-md-8 col-lg-8 col-sm-12 col-xs-12  bg-light d-flex  flex-column p-4 ">
          <div className="">
            <Toolbar className={className} />
            <>{children}</>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailLayout;
