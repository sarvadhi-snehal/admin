import React from "react";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import "./activity.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  inBorder: {
    left: -20,
    position: "absolute",
  },
}));
const ActivityItem = ({
  title,
  time,
  info,
  action,
  person,
  AvatarImg,
  type,
}) => {
  const classes = useStyles();
  return (
    <div className={`border-start border-bottom flex-center  ${classes.root}`}>
      <div className={classes.inBorder}>
        {typeof AvatarImg === "string" ? (
          <Avatar src={AvatarImg} />
        ) : (
          <AvatarImg
            size={40}
            className={`bg-${type} rounded-circle text-white p-2`}
          />
        )}
      </div>
      <div className="text-start w-100 py-3  ms-5 ">
        <div className="m-0 d-flex ">
          {action ? (
            <p className="m-0  hover-orange">{person}</p>
          ) : (
            <p className="m-0">{title}</p>
          )}
          <span className="ms-1 small-font">{time}</span>
        </div>
        <p>{info}</p>
        {action && (
          <div>
            <button
              className="bt bsuccess border-success rounded-pill m-1"
              style={{}}
            >
              Approve
            </button>
            <button className="bt bdanger border-danger  rounded-pill m-1">
              Refuse
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;
