import React from "react";
import Card from "../UI/ThreeCard";
import { Bell, Server, Cart, Person } from "react-bootstrap-icons";
import Avatar from "@material-ui/core/Avatar";
const Feeds = () => {
  const data = [
    {
      title: "You have 4 pending tasks.",
      time: " Just Now",
      type: "info",
      Icon: Bell,
    },
    {
      title: "Server #1 overloaded.",
      time: " 2 Hours ago",
      type: "success",
      Icon: Server,
    },
    {
      title: "New order received.",
      time: "31 May",
      type: "warning",
      Icon: Bell,
    },
    {
      title: "New user registered.",
      time: "30 May",
      type: "danger",
      Icon: Person,
    },
    {
      title: "New Version just arrived.",
      time: " J27 May",
      type: "dark",
      Icon: Bell,
    },
    {
      title: "You have 4 pending tasks.",
      time: " Just Now",
      type: "info",
      Icon: Bell,
    },
    {
      title: "New user registered.",
      time: "30 May",
      type: "danger",
      Icon: Person,
    },
  ];

  return (
    <Card title="User Activity">
      <ul className="p-2 bg-white list-group ">
        {data.map((item, i) => (
          <li className="list-group-item d-flex list-group-item-action border-0 p-2 w-100">
            <item.Icon
              size={40}
              className={`bg-${item.type} rounded-circle text-white p-2`}
            />

            <div className="w-100 ms-2  flex-between">
              <p>{item.title}</p>
              <span className="text-end  ">{item.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Feeds;
