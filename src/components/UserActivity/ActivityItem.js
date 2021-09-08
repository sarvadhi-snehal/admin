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
    <div className={`border-start border-bottom flex-center ${classes.root}`}>
      <Avatar className={classes.inBorder}></Avatar>
      <div className="text-start w-100 py-2  ms-5 ">
        <p className="m-0">
          {action ? (
            <label className="m-0  ">{person}</label>
          ) : (
            <label className="m-0  fw-bolder">{title}</label>
          )}
          <span className="ms-1 ">{time}</span>
        </p>
        <p>{info}</p>
        {action && (
          <div>
            <button className="btn btn-success">Approve</button>
            <button className="btn btn-danger">Refuse</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;
