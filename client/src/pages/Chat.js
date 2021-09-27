import React from "react";
import Msg from "../components/Chat/Chat";
const Chat = () => {
  return (
    <section className="container-fluid  overflow-hidden  ">
      <div className="bg-light mx-2 mb-4">
        <Msg list="d-block" className="col " />
      </div>
    </section>
  );
};

export default Chat;
