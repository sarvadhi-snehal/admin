import { makeStyles } from "@material-ui/core";

const drawerWidth = 230;

const sbcolor = () => JSON.parse(localStorage.getItem("sbcolor"));
console.log(sbcolor());
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    border: "none",
  },

  appBar: {
    height: "auto",
    // width: `calc(100% - ${theme.spacing(9) + 1}px)`,
    boxShadow: "0 0 0",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    display: "flex",
  },
  appBarShift: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    margin: 5,
  },
  hide: {
    display: "none",
  },
  drawer: {
    fontFamily: "Poppins",
    display: "flex",
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
    fontFamily: "Poppins",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    top: theme.spacing(4),
    fontFamily: "Poppins",
    border: "none",
    color: "grey",
    width: theme.spacing(8),
    position: "relative",
    height: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   width: theme.spacing(8) + 1,
    // },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",

    border: "none",
    width: "100%",
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

  logo: {
    display: "flex",
    height: theme.spacing(8),
    width: theme.spacing(8),
    border: "none",

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  logoOpen: {
    width: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(8),
    },
  },
  badgeAnimation: {
    position: "relative",
    "&::after": {
      content: " ",
      position: "absolute",
      top: "-.1rem",
      left: "-.1rem",
      backgroundColor: "red",
      border: "2px solid rgba(255,0,0,.5)",
      // opacity:0,
      borderRadius: "50%",
      width: "100%",
      height: "50%",
      // animation: "sonar 1.5s 1",
    },
  },
}));
