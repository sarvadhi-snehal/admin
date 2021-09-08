import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useStyles } from "./style";
import clsx from "clsx";
const Logo = ({ open }) => {
  const classes = useStyles();
  return (
    <ListItem
      button
      className={clsx(classes.logo, {
        [classes.logoOpen]: open,
      })}
    >
      <ListItemIcon>
        <img
          className="img-fluid invert"
          alt="logo"
          src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/logo-icon.png"
        />
      </ListItemIcon>

      {open && (
        <img
          className="invert  d-lg-block d-none"
          alt="logo"
          src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/logo-text.png"
        />
      )}
    </ListItem>
  );
};

export default Logo;
