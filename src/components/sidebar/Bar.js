import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Person from "./Person";
import Menu from "./Menu";
import Logo from "./Logo";
import AppBarContainer from "./AppBar";
import { useStyles } from "./style";
import SiteLinks from "./SiteLinks";

const Bar = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <AppBarContainer open={open} handleDrawerOpen={handleDrawerOpen} />

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        {/* //logo */}
        {/* <Logo /> */}

        {/* user */}

        <Person open={open} />

        {open && (
          <span
            className="text-uppercase"
            style={{ fontSize: "0.7rem", letterSpacing: "2px" }}
          >
            <span style={{ fontSize: "1rem" }}>---</span> personal
          </span>
        )}
        <Menu isClose={open} />
        <SiteLinks />
      </Drawer>
    </>
  );
};

export default Bar;
