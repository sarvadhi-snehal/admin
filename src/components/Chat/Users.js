import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const list = [
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
  {
    name: "Jaqnelia desmukh",
    status: "Always",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "info",
  },

  {
    name: "Ritesh Deshmukh",
    status: "Busy",
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",
    type: "danger",
  },
  {
    name: "Arijit Singh",
    status: "Offline",
    avatar: "https://material-ui.com/static/images/avatar/3.jpg",
    type: "secondary",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/4.jpg",
    type: "success",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },

  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
  {
    name: "Varun Dhavan",
    status: "Online",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    type: "success",
  },
];

const Users = (props) => {
  const drawer = (
    <>
      <div className="bg-white p-4 border-bottom">
        <p>Search Contact</p>
      </div>
      <div className="scroll scroll-div2 flex-column">
        {list.map((item, i) => (
          <div className="btn p-2  d-flex" key={i}>
            <Avatar src={item.avatar} alt={item.name} />

            <p className="ms-2 p-0 flex-column text-start">
              {item.name}
              <span
                className={`text-${item.type} m-0 `}
                style={{ fontSize: "0.7rem" }}
              >
                {item.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={`border-end   bg-white ${props.className} `}>
      <nav className={classes.drawer} aria-label="user chat">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <div
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </div>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </main>
    </div>
  );
};

export default Users;
