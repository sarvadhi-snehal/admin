import React from "react";
import {
  EnvelopeFill,
  StarFill,
  FileEarmarkText,
  TrashFill,
  ArrowRight,
  CircleFill,
} from "react-bootstrap-icons";
const MailMenu = () => {
  console.log("MailMenu");
  const menu = [
    {
      name: "Inbox",
      Icon: EnvelopeFill,
      number: 6,
      type: "success",
    },
    {
      name: "Starred",
      Icon: StarFill,
      number: null,
      type: null,
    },
    {
      name: "Draft",
      Icon: ArrowRight,
      number: 3,
      type: "danger",
    },
    {
      name: "Sent mail",
      Icon: FileEarmarkText,
      number: null,
      type: null,
    },
    {
      name: "Trash",
      Icon: TrashFill,
      number: null,
      type: null,
    },
  ];

  const labels = [
    { name: "Work", type: "primary" },
    { name: "Family", type: "warning" },
    { name: "Private", type: "info" },
    { name: "Friends", type: "danger" },

    { name: "Corporate", type: "success" },
  ];
  return (
    <div className="col col-sm-12 col-xs-12 col-md-4 col-lg-4 ">
      <div className="ms-4 mt-4 flex-column h-100  w-100  ">
        <div className="bg-white flex-column h-100 p-4">
          <button className="btn btn-danger">Compose</button>
          <nav className="flex-column p-3">
            <ul className="p-0">
              {menu.map((item) => (
                <li className="flex-view p-2 mt-4">
                  <item.Icon />
                  <span className="ms-2">{item.name}</span>
                  {item.number && (
                    <button
                      className={`ms-auto btn-${item.type}  px-2 border-0 rounded-3`}
                    >
                      {item.number}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="lables p-3">
            <h3>Lables</h3>
            <ul className="p-0">
              {labels.map((label) => (
                <li key={label} className="text-danger p-3">
                  <CircleFill className={`text-${label.type} me-3`} />
                  {label.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailMenu;
