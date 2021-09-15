import React from "react";
import Card from "../UI/ThreeCard";
import ActivityItem from "./ActivityItem";
import { Person, Image } from "react-bootstrap-icons";
const Activity = () => {
  const data = [
    {
      title: "Meeting Today",
      time: "5pm",
      info: "you can write anything",
      person: "",
      action: null,
      avatar: Person,
      type: "success",
    },
    {
      title: "Send documents to Clark",
      time: "",
      info: "Lorem Ipsum is simply",
      person: "",
      action: null,
      avatar: Image,

      type: "info",
    },
    {
      title: "Go to the Doctor",
      time: "5 minutes ago",
      info: "Contrary to popular belief",
      person: "",
      action: null,
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg",
    },

    {
      title: "",
      person: "Tiger Shrof",
      action: true,
      time: "5 minutes ago",
      info: "Approve meeting with tiger",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg",
    },
  ];

  return (
    <Card title="User Activity">
      <div className="p-4 bg-white">
        {data.map((item, i) => (
          <ActivityItem
            key={i}
            title={item.title}
            person={item.person}
            action={item.action}
            time={item.time}
            info={item.info}
            AvatarImg={item.avatar}
            type={item.type}
          />
        ))}
      </div>
    </Card>
  );
};
export default Activity;
