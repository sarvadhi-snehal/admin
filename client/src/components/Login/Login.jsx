import GoogleSignin from "./GoogleLogin";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../Store/actions/action";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { useHistory, useLocation, Link } from "react-router-dom";

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
  const classes = useStyles();

  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };
  console.log("location", location.state);
  const responseGoogle = async (response) => {
    const userObj = {
      token: response.tokenId,
      user: response.profileObj,
    };

    try {
      const isGoogleSignin = true;
      dispatch(signin(userObj, history, isGoogleSignin, from));
    } catch (e) {
      console.log(e);
    }
  };

  const responseGoogleError = (response) => {
    alert(`Something went wrong, login again`);
  };
  if (state.isAuthenticated) history.replace(from);

  return (
    <>
      {
        <Grid container className={classes.root}>
          <LoginForm />
          <div className="flex-between">
            <Link to="/signup" className="m-3 btn-white shadow p-2 btn">
              Create Account
            </Link>
            <GoogleSignin
              responseGoogle={responseGoogle}
              responseGoogleError={responseGoogleError}
            />
          </div>
        </Grid>
      }{" "}
    </>
  );
};

export default Login;
