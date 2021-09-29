import React from "react";

import "./chat.scss";
import { ArrowRightShort } from "react-bootstrap-icons";
import Avatar from "@material-ui/core/Avatar";

const list = [
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
  {
    name: "Jaqnelia desmukh",
    status: "Always",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "info",
  },

  {
    name: "Ritesh Deshmukh",
    status: "Busy",
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",
    type: "danger",
  },
  {
    name: "Arijit Singh",
    status: "Offline",
    avatar: "https://material-ui.com/static/images/avatar/3.jpg",
    type: "secondary",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/4.jpg",
    type: "success",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },

  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
];

const Users = (props) => {
  const drawer = (
    <>
      <div className="bg-white p-4 border-bottom  position-relative">
        <p className="text-nowrap">Search Contact</p>
      </div>
      <div className="scroll scroll-div2 flex-column">
        {list.map((item, i) => (
          <div className="btn p-2  d-flex" key={i}>
            <Avatar src={item.avatar} alt={item.name} />

            <p className="ms-2 p-0 flex-column text-start">
              {item.name}
              <span
                className={`text-${item.type} m-0 `}
                style={{ fontSize: "0.7rem" }}
              >
                {item.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className={`  drawer-container d-flex  bg-white ${props.className} `}>
      <input
        type="checkbox"
        name="draweropen"
        id="draweropen"
        className="d-none"
      />
      <div className="drawer border-end">{drawer}</div>

      <label htmlFor="draweropen" className="menuButton">
        <ArrowRightShort size={25} />
      </label>
    </div>
  );
};

export default Users;
