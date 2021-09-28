import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?",
      status: "1 week",
      variant: "danger",
      assignTo: [
        "https://mui.com/static/images/avatar/1.jpg",
        "https://mui.com/static/images/avatar/2.jpg",
        "https://mui.com/static/images/avatar/3.jpg",
        "https://mui.com/static/images/avatar/4.jpg",
      ],
      date: "",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?",
      status: "Yesterday",
      variant: "primary",
      assignTo: [],
      date: "26 jun 2017",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?",
      status: "2 Week",
      variant: "warning",
      assignTo: [
        "https://mui.com/static/images/avatar/1.jpg",
        "https://mui.com/static/images/avatar/2.jpg",
      ],
      date: "",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?",
      status: "Yesterday",
      variant: "primary",
      assignTo: [],
      date: "26 jun 2017",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?",
      status: "2 Week",
      variant: "warning",
      assignTo: [
        "https://mui.com/static/images/avatar/1.jpg",
        "https://mui.com/static/images/avatar/2.jpg",
      ],
      date: "",
    },
  ];
  return (
    <div className="scroll-div2 scroll">
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
