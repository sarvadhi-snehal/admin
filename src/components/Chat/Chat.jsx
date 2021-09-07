import MsgItem from "./MsgItem";
import { Telegram } from "react-bootstrap-icons";
const msges = [
  {
    name: "James Anderson",
    message:
      "Lorem Ipsum is simply dummy text of the printing & type setting industry.",
    date: "10:56 am",
    avatar:
      "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
  },
  {
    name: "James Anderson",
    message:
      "Lorem Ipsum is simply dummy text of the printing & type setting industry.",
    avatar:
      "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg",
    date: "10:57 am",
  },
  {
    name: "me",
    message: "I would love to join the team.",
    date: "10:58 am",
    avatar: "",
  },
  {
    name: "me",
    message: "Whats budget of the new project.",
    date: "10:59 am",
    avatar: "",
  },
  {
    name: "Angelina Rhodes",
    message: "Well we have good budget for the project",
    avatar:
      "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg",
    date: "11:00 am",
  },
];
const Chat = () => {
  return (
    <div className="col col-sm-12 col-md-4 mt-4">
      <div className="bg-white p-4">
        <h6>Chat</h6>
      </div>
      <div className="scroll-div3 bg-white">
        {msges.map((msg) => (
          <MsgItem msg={msg} />
        ))}
      </div>

      <div className="border-top  p-4 bg-white ">
        <form className="flex-between">
          <input
            className="border-0 "
            type="text"
            name="message"
            placeholder="Type your message here"
          />
          <button className="btn">
            <Telegram size={40} color="#0dcaf0" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
