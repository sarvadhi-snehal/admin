import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";

import Person from "./Person";
import Menu from "./Menu";
import AppBarContainer from "./AppBar";
import { useStyles } from "./style";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/actions/action";

const Bar = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const sidebarColor = useSelector((state) => state.sidebarColor);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const responseGoogle = () => {
    dispatch(logout());
    history.push("/login");
  };
  return (
    <>
      <AppBarContainer open={open} handleDrawerOpen={handleDrawerOpen} />
      {open ? (
        <Drawer
          variant="permanent"
          className={clsx({
            [classes.drawerOpen]: open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
            }),
          }}
        >
          <div
            className="drawer h-100 overflow-show"
            style={{ backgroundColor: sidebarColor }}
          >
            <Person open={open} responseGoogle={responseGoogle} />

            {open && (
              <span
                className="text-uppercase"
                style={{ fontSize: "0.7rem", letterSpacing: "2px" }}
              >
                <span style={{ fontSize: "1rem" }}>---</span> personal
              </span>
            )}
            <Menu isClose={open} />
          </div>
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          className={clsx({
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div
            className="position-fixed h-100    p-1 overflow-show  "
            style={{ backgroundColor: sidebarColor }}
          >
            <Person open={open} responseGoogle={responseGoogle} />

            {open && (
              <span
                className="text-uppercase"
                style={{ fontSize: "0.7rem", letterSpacing: "2px" }}
              >
                <span style={{ fontSize: "1rem" }}>---</span> personal
              </span>
            )}
            <Menu isClose={open} />
          </div>
        </Drawer>
      )}
    </>
  );
};

export default Bar;
