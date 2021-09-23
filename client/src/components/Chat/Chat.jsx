import MsgItem from "./MsgItem";
import { Telegram } from "react-bootstrap-icons";
import Users from "./Users";
import "./chat.scss";

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
const Chat = ({ className, header, list }) => {
  return (
    <div className={className}>
      <div className="div d-flex mt-4 postion-relative">
        <Users className={list} />
        <div className="w-100 openDrawer">
          <div className="bg-white p-4">
            <h6>Chat</h6>
          </div>
          <div className="scroll-div3 scroll bg-white d-flex ">
            <div className="w-100">
              {msges.map((msg, i) => (
                <MsgItem msg={msg} key={i} />
              ))}
            </div>
          </div>

          <div className="border-top  p-4 bg-white ">
            <form className="flex-between">
              <input
                className="border-0 form-control shadow-none"
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
      </div>
    </div>
  );
};

export default Chat;
