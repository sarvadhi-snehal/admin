import React from "react";
import { Paperclip, StarFill, Star } from "react-bootstrap-icons";
import "./toolbar.scss";
const mails = [
  {
    name: "Hritik Roshan",
    mailType: "Work",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "12: 30 PM",
    stared: null,
    type: "primary",
  },
  {
    name: "	Genelia Roshan",

    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "May 13",
    type: "primary",
    stared: true,
  },
  {
    name: "Hritik Roshan",
    mailType: "Elite",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "12: 30 PM",
    stared: null,
    type: "warning",
  },
  {
    name: "	Genelia Roshan",
    mailType: "Work",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "May 13",
    stared: true,
    type: "success",
  },
  {
    name: "Hritik Roshan",
    mailType: "Work",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "12: 30 PM",
    stared: null,
    type: "primary",
  },
  {
    name: "	Genelia Roshan",
    mailType: null,
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "May 13",
    type: "primary",
    stared: true,
  },
  {
    name: "Hritik Roshan",
    mailType: "Elite",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "12: 30 PM",
    stared: null,
    type: "success",
  },
  {
    name: "	Genelia Roshan",
    mailType: "Work",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "May 13",
    stared: true,
    type: "info",
  },
  {
    name: "Hritik Roshan",
    mailType: "Work",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "12: 30 PM",
    stared: null,
    type: "primary",
  },
  {
    name: "	Genelia Roshan",
    mailType: null,
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "May 13",
    type: "primary",
    stared: true,
  },
  {
    name: "Hritik Roshan",
    mailType: "Elite",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "12: 30 PM",
    stared: null,
    type: "success",
  },
  {
    name: "	Genelia Roshan",
    mailType: "Work",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "May 13",
    stared: true,
    type: "info",
  },
  {
    name: "Hritik Roshan",
    mailType: "Work",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "12: 30 PM",
    stared: null,
    type: "primary",
  },
  {
    name: "	Genelia Roshan",
    mailType: null,
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "May 13",
    type: "primary",
    stared: true,
  },
  {
    name: "Hritik Roshan",
    mailType: "Elite",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "12: 30 PM",
    stared: null,
    type: "success",
  },
  {
    name: "	Genelia Roshan",
    mailType: "Work",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "May 13",
    stared: true,
    type: "info",
  },
  {
    name: "Hritik Roshan",
    mailType: "Work",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "12: 30 PM",
    stared: null,
    type: "primary",
  },
  {
    name: "	Genelia Roshan",
    mailType: null,
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "May 13",
    type: "primary",
    stared: true,
  },
  {
    name: "Hritik Roshan",
    mailType: "Elite",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "12: 30 PM",
    stared: null,
    type: "success",
  },
  {
    name: "	Genelia Roshan",
    mailType: "Work",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "May 13",
    stared: true,
    type: "info",
  },
  {
    name: "Hritik Roshan",
    mailType: "Work",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "12: 30 PM",
    stared: null,
    type: "primary",
  },
  {
    name: "	Genelia Roshan",
    mailType: null,
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "May 13",
    type: "primary",
    stared: true,
  },
  {
    name: "Hritik Roshan",
    mailType: "Elite",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "12: 30 PM",
    stared: null,
    type: "success",
  },
  {
    name: "	Genelia Roshan",
    mailType: "Work",
    body: "Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem",
    time: "May 13",
    stared: true,
    type: "info",
  },
];
const Mails = () => {
  return (
    <ul className="bg-white">
      {mails.map((mail, i) => (
        <li
          className=" border-bottom row overflow-auto w-100  d-flex align-items-center justify-content-evenly py-3"
          key={i}
        >
          <div className="d-flex align-items-center col-4">
            <div className="pe-4">
              <input
                type="checkbox"
                name=""
                id=""
                className="form-check-input "
              />
            </div>
            {mail.stared ? <StarFill className="text-warning " /> : <Star />}
            <p className=" w-100 text-start m-auto ps-4 ">{mail.name}</p>
          </div>
          <div className="col-7 d-flex   justify-content-start align-items-center">
            <div className=" align-items-center overflow-hidden d-flex  w-100  ">
              {mail.mailType && (
                <button className={`btn-sx me-2 bg-${mail.type} `}>
                  {mail.mailType}
                </button>
              )}
              <p className="text-nowrap m-auto text-start ">{mail.body}</p>
            </div>
            <div className="ps-4 w-75 justify-content-center align-item-center d-flex">
              <Paperclip className="m-auto" />
              <p className=" text-end w-75 m-auto">{mail.time}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Mails;
