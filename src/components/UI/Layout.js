import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BreadCumb from "../BreadCumb";
import { useLocation } from "react-router-dom";
import Bar from "../sidebar/Bar";
import Alert from "../Alert";
import Footer from "../Footer";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
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
  const location = useLocation();
  const classes = useStyles();
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className={classes.root}>
      <Bar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Alert /> */}
        <BreadCumb link={location.pathname.substring(1)} />
        {children}
        <Footer />
      </main>
    </div>
  );
}
