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
      {listItems.map((list, i) => (
        <div className="border-bottom bg-white d-flex ms-2 p-4" key={i}>
          <div
            className="avatar rounded-circle"
            style={{ maxWidth: "4rem", padding: "0.1rem" }}
          >
            <img
              alt="person"
              className="w-100 rounded-circle"
              src={list.avatar}
            />
          </div>
          <div className="ms-2 flex-column ">
            <h6 className="text-dark m-0">{list.name}</h6>
            <span className="text-secondary fw-normal m-0">{list.msg}</span>

            <span className="text-secondary fw-normal m-0">{list.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
