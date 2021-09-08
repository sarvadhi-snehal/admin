import GoogleSignin from "./GoogleLogin";
import { useEffect } from "react";
import LoginForm from "./LoginForm";
import { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import contextProvider from "../../Store";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
  },
}));
const Login = () => {
  const { state } = useContext(contextProvider);
  console.log(state);
  const history = useHistory();
  const location = useLocation();

  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <LoginForm />
      <GoogleSignin />
    </Grid>
  );
};

export default Login;
