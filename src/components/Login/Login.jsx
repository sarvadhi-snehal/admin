import GoogleSignin from "./GoogleLogin";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Store/actions/action";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

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
  const state = useSelector((state) => state);
  console.log(state);
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: "/minimal" } };
  const responseGoogle = (response) => {
    console.log(response);
    const userObj = {
      token: response.Zb,
      user: response.profileObj,
    };
    dispatch(login(userObj));
    history.replace(from);
  };

  const responseGoogleError = (response) => {
    alert(`Something went wrong, login again`);
  };
  const classes = useStyles();
  return (
    <>
      {
        <Grid container className={classes.root}>
          <LoginForm />
          <GoogleSignin
            responseGoogle={responseGoogle}
            responseGoogleError={responseGoogleError}
          />
        </Grid>
      }{" "}
    </>
  );
};

export default Login;
