import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import "./todo.scss";
const Todo = () => {
  return (
    <div className="col-12 col-sm-12 col-md-4 mt-4">
      <TodoHeader />
      <div className="bg-white">
        <TodoList />
      </div>
    </div>
  );
};

export default Todo;
