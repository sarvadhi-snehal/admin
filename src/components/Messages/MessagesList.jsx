export const listItems = [
  {
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    name: "Sonu Nigam",
    msg: "Lorem ipsum dolor sit elit.",
    time: "6:12 AM",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",

    name: "Arijit singh",
    msg: "Lorem ipsum dolor sit amet, c.",
    time: "6:12 AM",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",

    name: "Pranav kumar",
    msg: "Lorem ipsum dolor sit amet, ng elit.",
    time: "6:12 AM",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",

    name: "Arijit singh",
    msg: "Lorem ipsum dolor sit amet",
    time: "6:12 AM",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",

    name: "Pranav kumar",
    msg: "Lorem ipsum dolor sit amet,",
    time: "6:12 AM",
  },
];

export default function MessagesList({ classname }) {
  return (
    <div className={classname}>
      {listItems.map((list) => (
        <div className="border-bottom bg-white d-flex p-2">
          <div
            className="avatar rounded-circle"
            style={{ maxWidth: "3rem", padding: "0.1rem" }}
          >
            <img
              alt="person"
              className="w-100 rounded-circle"
              src={list.avatar}
            />
          </div>
          <div className="ms-2 h-25">
            <h6 className="text-dark">{list.name}</h6>
            <p className="text-secondary small">{list.msg}</p>

            <p className="text-secondary">{list.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
