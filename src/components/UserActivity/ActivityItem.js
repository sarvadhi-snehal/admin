import React from "react";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  inBorder: {
    backgroundColor: "red",
    left: -20,
    position: "absolute",
  },
}));
const ActivityItem = ({ title, time, info, action, person }) => {
  const classes = useStyles();
  return (
    <div className={`border-start border-bottom flex-center  ${classes.root}`}>
      <Avatar className={classes.inBorder} src=""></Avatar>
      <div className="text-start w-100 py-3  ms-5 ">
        <div className="m-0 d-flex ">
          {action ? (
            <p className="m-0  text-warning">{person}</p>
          ) : (
            <p className="m-0">{title}</p>
          )}
          <span className="ms-1 small-font">{time}</span>
        </div>
        <p>{info}</p>
        {action && (
          <div>
            <button
              className="btn border-success text-success rounded-pill m-1"
              style={{}}
            >
              Approve
            </button>
            <button className="btn border-danger text-danger rounded-pill m-1">
              Refuse
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;
