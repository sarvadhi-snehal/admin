import React from "react";
import CommetnItem from "./CommentItem";
import Card from "../UI/HalfCard";

const comments = [
  {
    name: "James Anderson",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry",
    date: "April 14, 2016",
    type: "primary",
    text: "Pending",
  },
  {
    name: "Micheal Jorden",
    avatar: "https://mui.com/static/images/avatar/2.jpg",

    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry",
    date: "April 14, 2016",
    text: "Approved",
    type: "success",
  },
  {
    name: "Jonathan Doeting",
    avatar: "https://mui.com/static/images/avatar/3.jpg",

    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.",
    date: "April 14, 2016",
    type: "danger",
    text: "Rejected",
  },
  {
    name: "James Anderson",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry..",
    date: "April 14, 2016",
    type: "primary",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    text: "Pending",
  },
];

const RecentComments = () => {
  return (
    <Card title="Recent Comments">
      <div className="scroll-div scroll">
        {comments.map((comment, index) => (
          <CommetnItem key={index} comment={comment} />
        ))}
      </div>
    </Card>
  );
};

export default RecentComments;
