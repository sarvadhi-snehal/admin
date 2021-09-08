import { makeStyles } from "@material-ui/core";
import { Display } from "react-bootstrap-icons";
const drawerWidth = 230;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    border: "none",
  },
  appBar: {
    // width: `calc(100% - ${theme.spacing(9) + 1}px)`,
    boxShadow: "0 0 0",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    margin: 3,
  },
  hide: {
    display: "none",
  },
  drawer: {
    // width: drawerWidth,
    // flexShrink: 0,
    // border: "none",
    // whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    top: theme.spacing(8),
    border: "none",
    color: "grey",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    top: theme.spacing(8),

    border: "none",
    color: "grey",
    overflowX: "hidden",
    width: theme.spacing(8) + 1,
    // [theme.breakpoints.up("sm")]: {
    //   width: theme.spacing(8) + 1,
    // },
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(0) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    border: "none",

    padding: theme.spacing(0, 0),
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

  footer: {
    width: `calc(100% - ${theme.spacing(7) + 1}px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${theme.spacing(9) + 1}px)`,
    },
  },
  hover: {
    "&:hover": {
      color: "green",
    },
  },
  logo: {
    display: "flex",
    height: theme.spacing(8),
    width: theme.spacing(8),
    border: "none",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  logoOpen: {
    width: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(8),
    },
  },
}));
