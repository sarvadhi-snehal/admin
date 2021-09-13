import React from "react";
import MailMenu from "./MailMenu";
import Toolbar from "./ToolBar";
const MailLayout = ({ children }) => {
  return (
    <>
      <MailMenu />
      <div className="col col-md-8 col-lg-8 col-sm-12 col-xs-12  bg-light d-flex  flex-column p-4">
        <Toolbar />
        <>{children}</>
      </div>
    </>
  );
};

export default MailLayout;
