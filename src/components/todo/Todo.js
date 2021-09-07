import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import "./todo.scss";
const Todo = () => {
  return (
    <div className="col col-sm-12 col-md-4 mt-4">
      <TodoHeader />
      <TodoList />
    </div>
  );
};

export default Todo;
