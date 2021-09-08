import React from "react";
import CommetnItem from "./CommentItem";

const comments = [
  {
    name: "James Anderson",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry",
    date: "April 14, 2016",
    type: "primary",
    text: "Pending",
  },
  {
    name: "Micheal Jorden",
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",

    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry",
    date: "April 14, 2016",
    text: "Approved",
    type: "success",
  },
  {
    name: "Jonathan Doeting",
    avatar: "https://material-ui.com/static/images/avatar/3.jpg",

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
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    text: "Pending",
  },
];

const RecentComments = () => {
  return (
    <div className="col col-sm-12 col-md-6  mt-4 ">
      <div className=" bg-white p-3">
        <h6>Recent Comments</h6>
      </div>
      <div className="scroll-div">
        {comments.map((comment, index) => (
          <CommetnItem key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default RecentComments;