import React from "react";
import MailMenu from "./MailMenu";
import Toolbar from "./ToolBar";
const MailLayout = ({ children, className }) => {
  return (
    <div className="container-fluid p-4">
      <div className="row   mx-1">
        <MailMenu />

        <div className="col-12 col-md-9 col-lg-9 col-sm-12  bg-light d-flex  flex-column p-4 ">
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
