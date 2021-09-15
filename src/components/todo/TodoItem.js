const TodoItem = ({ todo }) => {
  const avatr = todo.assignTo.map((person) => (
    <div
      className="avatar rounded-circle"
      style={{ maxWidth: "2rem", padding: "0.1rem" }}
      key={person}
    >
      <img alt="person" className="w-100 rounded-circle" src={person} />
    </div>
  ));

  return (
    <div className="bg-white d-flex p-4">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" />
      </div>
      <div className="ps-2">
        <p>{todo.text}</p>
        <span className="d-flex ">{todo.date === "" ? avatr : todo.date}</span>
      </div>
      <button className={`bg-${todo.variant} btn-s h-100`}>
        {todo.status}
      </button>
    </div>
  );
};

export default TodoItem;
