import MessagesList from "./MessagesList";

const Message = ({ className }) => {
  return (
    <div className={className}>
      <div className="p-4 bg-white">
        <h6 className="text-dark">YOU HAVE 5 NEW MESSAGES</h6>
      </div>
      <MessagesList classname="scroll-div2 scroll" />
    </div>
  );
};

export default Message;
