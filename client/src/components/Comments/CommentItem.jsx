import "./comment.scss";
import { PencilSquare } from "react-bootstrap-icons";
import { XCircle } from "react-bootstrap-icons";
import { SuitHeart } from "react-bootstrap-icons";

function CommetnItem({ comment }) {
  const show = comment.type === "success" ? true : false;

  return (
    <div className=" border-bottom d-flex p-4 hover-effect">
      <div className="avatar rounded-circle" style={{ maxWidth: "4rem" }}>
        <img
          alt="person"
          className="w-100 rounded-circle"
          src={comment.avatar}
        />
      </div>
      <div className="ps-4">
        <h6>{comment.name}</h6>
        <p className="fw-light text-secondary">{comment.comment}</p>
        <div>
          <span className="text-secondary fw-light p-2">{comment.date}</span>
          <button className={`btn-s bg-${comment.type} me-2`}>
            {comment.text}
          </button>

          <span className={!show ? "hover" : undefined}>
            <label className="p-1">
              <PencilSquare className="customHoverFocus" />
            </label>
            <label className="p-1 ">
              <XCircle className="customHoverFocus" />
            </label>
            <label
              className={`p-1 ${
                !show ? "customHoverFocus" : "customHoverFocusRed"
              }`}
            >
              <SuitHeart />
            </label>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CommetnItem;
