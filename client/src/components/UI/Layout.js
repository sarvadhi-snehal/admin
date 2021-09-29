import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BreadCumb from "../BreadCumb";
import { useLocation, Redirect } from "react-router-dom";
import Bar from "../sidebar/Bar";
import Alert from "../Alert";
import Footer from "../Footer";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    marginBottom: 0,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    position: "relative",
  },
  content: {
    flexGrow: 1,
  },
}));

export default function Layout({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const classes = useStyles();
  const state = useSelector((state) => state);
  console.log("layout", state);
  if (!state.isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <div className={classes.root}>
      <Bar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <BreadCumb link={location.pathname.substring(1)} />
        <div className="main">
          {/* <Alert /> */}
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
