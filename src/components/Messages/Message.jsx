import MessagesList from "./MessagesList";

const Message = () => {
  return (
    <div className="col col-sm-12 col-md-4 mt-4">
      <div className="p-4 bg-white">
        <h6>YOU HAVE 5 NEW MESSAGES</h6>
      </div>
      <MessagesList />
    </div>
  );
};

export default Message;
