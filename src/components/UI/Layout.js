import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Notifiction from "../sidebar/Notifiction";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import Menu from "../sidebar/Menu";

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${theme.spacing(9) + 1}px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(9) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
  searchInput: {
    width: "10rem",
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    padding: "0.4rem",
    borderRadius: "1rem",
    border: "none",
    outline: "none",
    "&:focus": {
      width: "15rem",
      border: "none",
      outline: "none",
    },
  },
  dashbords: {
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    padding: "0.2rem",
  },
  footer: {
    width: `calc(100% - ${theme.spacing(7) + 1}px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${theme.spacing(9) + 1}px)`,
    },
  },
}));

export default function Layout({ children }) {
  const responseGoogle = () => {
    // dispatch(logout());
    // history.push({
    //   pathname: "/",
    // });
  };

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <input
            type="text"
            className={classes.searchInput}
            placeholder="Search and enter"
          />
          <Notifiction />
        </Toolbar>
      </AppBar>
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
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <img
              className={classes.logo}
              src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/logo-icon.png"
            />
          </ListItemIcon>
          <img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/logo-text.png" />
        </ListItem>
        <Divider />
        <ListItem button className="">
          <ListItemIcon>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          </ListItemIcon>
          <div className="dropdown">
            <button
              className="btn d-block dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Steve JAction
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </ListItem>

        <Menu />
        <List>
          <ListItem button>
            <ListItemIcon>
              <RadioButtonUncheckedIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Documents" />
          </ListItem>

          <GoogleLogout
            clientId="962281289281-o8jti4ni3imnsljch6j4i4pqp6ppb4mb.apps.googleusercontent.com"
            render={(renderProps) => (
              <ListItem
                button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                {" "}
                <ListItemIcon>
                  <RadioButtonUncheckedIcon color="error" />
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItem>
            )}
            buttonText="Logout"
            onLogoutSuccess={responseGoogle}
          ></GoogleLogout>

          <ListItem button>
            <ListItemIcon>
              <RadioButtonUncheckedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
