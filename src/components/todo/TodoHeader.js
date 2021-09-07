import { Plus } from "react-bootstrap-icons";
const TodoHeader = () => {
  const body = (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Task</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label for="task" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="task"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Sachin</option>
                  <option value="1">Shehwag</option>
                  <option value="2">Alia</option>
                  <option value="3">Varun</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-success ">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-between bg-white p-3">
      <h6>TO DO LIST</h6>
      <button
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <Plus size={25} color="white" />
      </button>
      {body}
    </div>
  );
};

export default TodoHeader;
