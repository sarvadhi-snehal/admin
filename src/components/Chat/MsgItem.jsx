import React from "react";

const MsgItem = ({ msg }) => {
  const avatar = (
    <div
      className="avatar rounded-circle m-2"
      style={{ maxWidth: "3rem", padding: "0.1rem" }}
    >
      <img alt="person" className="w-100 rounded-circle" src={msg.avatar} />
    </div>
  );
  const me = msg.name === "me";
  return (
    <div
      className="p-2 d-flex"
      style={me ? { marginLeft: "auto", textAlign: "right" } : {}}
    >
      {msg.avatar === "" ? "" : avatar}
      <div style={msg.name === "me" ? { marginLeft: "auto" } : {}}>
        {me ? "" : <h6 className="text-secondary">{msg.name}</h6>}
        <p className="flex-column ">
          {" "}
          <p
            className="p-2"
            style={
              me
                ? { backgroundColor: "#F39678", color: "white" }
                : {
                    backgroundColor: "#F8F9FA",
                  }
            }
          >
            {msg.message}
          </p>
          <span>{msg.date}</span>
        </p>
      </div>
    </div>
  );
};

export default MsgItem;
